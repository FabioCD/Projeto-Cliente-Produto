package br.com.provan1.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.provan1.model.PedidoProduto;

public interface PedidoProdutoRepository extends JpaRepository<PedidoProduto, Long> {
	

}
