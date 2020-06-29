import { Component, OnInit } from '@angular/core';
import { Cliente } from '../models/cliente.model';
import { ClienteService } from '../services/cliente.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  lista: Cliente[] = [];
  obj: Cliente = new Cliente();
  mens = '';

  constructor(private api: ClienteService) { }

  ngOnInit(): void {
    this.consultar();
  }

  consultar(){
    this.api.consultar()
    .toPromise()
    .then(res => {this.lista = res;});
  }

  adicionar() {
    this.api.adicional(this.obj)
      .toPromise()
      .then(cliente => {
          this.mens = cliente.nome + "Foi adicionado(a) com sucesso!#seufela";
          this.consultar();
      });
  }

  excluir() {
    this.api.excluir(this.obj.id)
        .toPromise()
        .then(cliente => {
            this.mens= "Cliente excluido com sucesso!#seufela";
            this.consultar();
        });
  }

  alterar() {
      this.api.alterar(this.obj.id, this.obj)
          .toPromise()
          .then(cliente => {
                this.mens = cliente.nome + "Alterado(a) com sucesso!#seufela";
          });
  }

  carregarDados(c: Cliente) {
    this.obj = c;
  }


}
