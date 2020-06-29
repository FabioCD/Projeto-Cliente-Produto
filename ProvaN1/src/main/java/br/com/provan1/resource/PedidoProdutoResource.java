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

import br.com.provan1.model.PedidoProduto;
@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/pedido")
public class PedidoProdutoResource {

	@Autowired
	private br.com.provan1.repository.PedidoProdutoRepository PedidoProdutoRepository;
	
	@GetMapping
	public List<PedidoProduto> list() {
		return PedidoProdutoRepository.findAll();
	}
	@GetMapping("/{id}")
	public Optional<PedidoProduto> findById(@PathVariable Long id) {
		return PedidoProdutoRepository.findById(id);
	}
	@PostMapping
	public ResponseEntity<PedidoProduto> create(@Valid @RequestBody PedidoProduto PedidoProduto, HttpServletResponse response) {
		PedidoProduto save = PedidoProdutoRepository.save(PedidoProduto);
		URI uri = ServletUriComponentsBuilder.fromCurrentRequestUri().path("/{id}").buildAndExpand(save.getId()).toUri();
		return ResponseEntity.created(uri).body(save);
	}
	@DeleteMapping("/{id}")
	@ResponseStatus(HttpStatus.NO_CONTENT)
	public void delete(@PathVariable Long id) {
		PedidoProdutoRepository.deleteById(id);
	}

	@PutMapping("/{id}")
	public ResponseEntity<PedidoProduto> update(@PathVariable Long id, @Valid @RequestBody PedidoProduto PedidoProduto) {
		Optional<PedidoProduto> pedidoProdutoBanco = PedidoProdutoRepository.findById(id);
		BeanUtils.copyProperties(PedidoProduto, pedidoProdutoBanco.get(), "id");
		PedidoProdutoRepository.save(pedidoProdutoBanco.get());
		return ResponseEntity.ok(PedidoProduto);
	}
}
