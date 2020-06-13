import { Module } from '@nestjs/common';
import { clienteController } from './cliente.controller';
import { ClienteService } from './cliente.service';


@Module({
  imports: [
  ],
  controllers: [
    clienteController
  ],
  providers: [
    ClienteService
  ],
})
export class AppModule { }
