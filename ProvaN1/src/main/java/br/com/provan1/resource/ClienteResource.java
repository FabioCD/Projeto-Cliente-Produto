package br.com.provan1.resource;

import java.net.URI;
import java.util.List;
import java.util.Optional;

import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import br.com.provan1.model.Cliente;
@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/cliente")
public class ClienteResource {

	@Autowired
	private br.com.provan1.repository.ClienteRepository ClienteRepository;
	
	@GetMapping
	public List<Cliente> list() {
		return ClienteRepository.findAll();
	}
	@GetMapping("/{id}")
	public Optional<Cliente> findById(@PathVariable Long id) {
		return ClienteRepository.findById(id);
	}
	@PostMapping
	public ResponseEntity<Cliente> create(@Valid @RequestBody Cliente Cliente, HttpServletResponse response) {
		Cliente save = ClienteRepository.save(Cliente);
		URI uri = ServletUriComponentsBuilder.fromCurrentRequestUri().path("/{id}").buildAndExpand(save.getId()).toUri();
		return ResponseEntity.created(uri).body(save);
	}
	@DeleteMapping("/{id}")
	@ResponseStatus(HttpStatus.NO_CONTENT)
	public void delete(@PathVariable Long id) {
		ClienteRepository.deleteById(id);
	}

	@PutMapping("/{id}")
	public ResponseEntity<Cliente> update(@PathVariable Long id, @Valid @RequestBody Cliente Cliente) {
		Optional<Cliente> clienteBanco = ClienteRepository.findById(id);
		BeanUtils.copyProperties(Cliente, clienteBanco.get(), "id");
		ClienteRepository.save(clienteBanco.get());
		return ResponseEntity.ok(Cliente);
	}
}
