import { Cliente } from './cliente.model';

export class Pedidoproduto {
    id: number;
    dataSolicitacao:Date;
	dataEntrega: Date;
	valorTotal: number;
	status: string ;
	cordeiro: string;
	cliente: Cliente = new Cliente();
}
