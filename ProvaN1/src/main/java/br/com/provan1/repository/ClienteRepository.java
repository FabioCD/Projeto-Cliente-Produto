package br.com.provan1.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.provan1.model.Cliente;

public interface ClienteRepository extends JpaRepository<Cliente, Long>{

}
