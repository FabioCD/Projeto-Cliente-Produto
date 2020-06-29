import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClienteComponent } from './cliente/cliente.component';
import { PedidoprodutoComponent } from './pedidoproduto/pedidoproduto.component';


const routes: Routes = [
  { path: '', component: Component},
  { path: 'home', component: Component},
  { path: 'cliente', component: ClienteComponent},
  { path: 'pedidoproduto', component: PedidoprodutoComponent}
];

  export const RoutingModule = RouterModule.forRoot(routes);

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
