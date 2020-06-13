 import { ClienteEntidade } from "./cliente.entidade";
import { Injectable } from '@nestjs/common';
 
@Injectable()
export class ClienteService{
 
    cliente: Array<ClienteEntidade> = [ ];
 
    constructor(){
        let clienteL = new ClienteEntidade();
        clienteL.id = 1;
        clienteL.nome = "Alquimista";
        clienteL.cpf = 080021848-89;
        clienteL.email = "Otodoemente@gmail.com";
        clienteL.rg = 369124;
        clienteL.telefone = 123581321;
        clienteL.Estado_civil = "Solteiro";
        clienteL.enderenco = "Nárnia";
        clienteL.idade = 33;
        clienteL.livro_favorito = "O cabalion"
        this.cliente.push(clienteL);
    }
    async findAll(){
        return this.cliente;
    }
    
    async save(cliente: ClienteEntidade) {
        this.cliente.push(cliente);
    
    }
}
