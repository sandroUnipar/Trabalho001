import { ClienteService } from "./cliente.service";
import { Controller, Get, Body, Post } from "@nestjs/common";
import { ClienteDto } from "./cliente.dto";
import { ClienteEntidade } from "./cliente.entidade";
import { plainToClass } from "class-transformer";
 
 
@Controller('cliente')
export class clienteController {
 
    constructor(private readonly service: ClienteService) {
    }
 
    @Get()
    findAll() {
        return this.service.findAll();
    }
 
    @Post()
    save(@Body() ClienteDto: ClienteDto) {
        const cliente = plainToClass(ClienteEntidade, ClienteDto);
        return this.service.save(cliente);
 
    }
 
}
