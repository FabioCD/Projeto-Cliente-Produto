package br.com.provan1.model;

import java.math.BigDecimal;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.constraints.DecimalMin;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.PastOrPresent;
import javax.validation.constraints.Pattern;



@Entity
@Table(name = "pedidoproduto")
public class PedidoProduto {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id_pp")
	private Long id;
	
	@Column(name = "datasolicitacao_pp")
	@NotNull
	@PastOrPresent
	private Date dataSolicitacao;//O campo: dataSolicitacao deve ser maior ou igual a data atual.
	

	@Column(name = "dataentrega_pp")
	private Date dataEntrega;
	
	@Column(name = "valortotal_pp")
	@NotNull
	@DecimalMin("0.01")
	private BigDecimal valorTotal;//O campo: valor deve ser maior que zero.
	
	
	@Column(name = "status_pp")
	@NotNull
	@Pattern(regexp = "Aberto|Cancelado|Processado|Entregue" )
	private String status;
	
	@Column(name = "cordeiro_pp")
	private String cordeiro;
	
	@ManyToOne
	@JoinColumn(name = "id_cliente_fk")
	private Cliente cliente;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Date getDataSolicitacao() {
		return dataSolicitacao;
	}

	public void setDataSolicitacao(Date dataSolicitacao) {
		this.dataSolicitacao = dataSolicitacao;
	}

	public Date getDataEntrega() {
		return dataEntrega;
	}

	public void setDataEntrega(Date dataEntrega) {
		this.dataEntrega = dataEntrega;
	}

	public BigDecimal getValorTotal() {
		return valorTotal;
	}

	public void setValorTotal(BigDecimal valorTotal) {
		this.valorTotal = valorTotal;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public String getCordeiro() {
		return cordeiro;
	}

	public void setCordeiro(String cordeiro) {
		this.cordeiro = cordeiro;
	}

	public Cliente getCliente() {
		return cliente;
	}

	public void setCliente(Cliente cliente) {
		this.cliente = cliente;
	}

	
	

	
	
}
