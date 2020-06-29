import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cliente } from '../models/cliente.model';


const url = 'http://localhost:8088/cliente';
const httpOptions = {
  headers : new HttpHeaders({'Content-Type':'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient) { }

  consultar (): Observable<Cliente[]>{
    return this.http.get<Cliente[]>(url);
  }

  consutarPorid(id: number): Observable<Cliente> {
    const urlLocal = `${url}/${id}`;
    return this.http.get<Cliente>(urlLocal);
  }

  adicional (Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(url,Cliente,httpOptions)
  }

  alterar (id,Cliente): Observable<any> {
    const urlLocal = `${url}/${id}`;
    return this.http.put(urlLocal,Cliente,httpOptions);
    }

  excluir (id): Observable<Cliente> {
    const urlLocal = `${url}/${id}`;
    return this.http.delete<Cliente>(urlLocal,httpOptions);
  }

}
