import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pedidoproduto } from '../models/pedidoproduto.model';


const url = 'http://localhost:8088/pedido';
const httpOptions = {
  headers : new HttpHeaders({'Content-Type':'application/json'})
};


@Injectable({
  providedIn: 'root'
})
export class PedidoprodutoService {

  constructor(private http: HttpClient) { }

  consultar (): Observable<Pedidoproduto[]>{
    return this.http.get<Pedidoproduto[]>(url);
  }

  consutarPorid(id: number): Observable<Pedidoproduto> {
    const urlLocal = `${url}/${id}`;
    return this.http.get<Pedidoproduto>(urlLocal);
  }

  adicional (Pedidoproduto): Observable<Pedidoproduto> {
    return this.http.post<Pedidoproduto>(url,Pedidoproduto,httpOptions)
  }

  alterar (id,Pedidoproduto): Observable<any> {
    const urlLocal = `${url}/${id}`;
    return this.http.put(urlLocal,Pedidoproduto,httpOptions);
    }

  excluir (id): Observable<Pedidoproduto> {
    const urlLocal = `${url}/${id}`;
    return this.http.delete<Pedidoproduto>(urlLocal,httpOptions);
  }

}
