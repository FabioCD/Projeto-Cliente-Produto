import { Component, OnInit } from '@angular/core';
import { Pedidoproduto } from '../models/pedidoproduto.model';
import { PedidoprodutoService } from '../services/pedidoproduto.service';
import { Cliente } from '../models/cliente.model';
import { ClienteService } from '../services/cliente.service';

@Component({
  selector: 'app-pedidoproduto',
  templateUrl: './pedidoproduto.component.html',
  styleUrls: ['./pedidoproduto.component.css']
})
export class PedidoprodutoComponent implements OnInit {

  lista: Pedidoproduto[] = [];
  obj: Pedidoproduto = new Pedidoproduto();
  listaCliente: Cliente[] = [];
  objCliente :Cliente; 
  //list : List[]=[]; 
  mens = '';

  constructor( private api: PedidoprodutoService, private apiclass: ClienteService ) { }

  ngOnInit(): void {
    this.consultar();
    this.consultarclass();
  }

  consultarclass(){
    this.apiclass.consultar()
    .toPromise()
    .then(res => {this.listaCliente = res;});
  }

  consultar(){
    this.api.consultar()
    .toPromise()
    .then(res => {this.lista = res;});
  }

  adicionar() {
    this.api.adicional(this.obj)
      .toPromise()
      .then(pedidoproduto => {
          this.mens = `${pedidoproduto.cliente.nome}  Foi adicionado(a) com sucesso!#seufela`;
          this.consultar();
      });
  }

  excluir() {
    this.api.excluir(this.obj.id)
        .toPromise()
        .then(pedidoproduto => {
            this.mens= "Pedido excluido com sucesso!#seufela";
            this.consultar();
        });
  }

  alterar() {
    this.api.alterar(this.obj.id, this.obj)
        .toPromise()
        .then(pedidoproduto => {
              this.mens = `${pedidoproduto.cliente.nome} Alterado(a) com sucesso!#seufela`;
        });
  }

  carregarDados(obj: Pedidoproduto) {
    this.obj = obj;
    
   }

  atribuir(id) {
   this.obj.cliente.id = id;
    console.log(`Cliente: ${this.obj.cliente.id}`);
  }


}
