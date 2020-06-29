import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//Adicionado Manualmete
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClienteComponent } from './cliente/cliente.component';
import { ClienteService } from './services/cliente.service';
import { PedidoprodutoComponent } from './pedidoproduto/pedidoproduto.component';
//PrimeNG
import {AutoCompleteModule} from 'primeng/autocomplete';
import {CalendarModule} from 'primeng/calendar';
import {ListboxModule} from 'primeng/listbox';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    ClienteComponent,
    PedidoprodutoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
//PrimeNG
    AutoCompleteModule,
    CalendarModule,
    ListboxModule,
    BrowserAnimationsModule
  ],
  providers: [ClienteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
