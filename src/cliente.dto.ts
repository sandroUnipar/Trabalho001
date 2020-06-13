 import { IsInt, IsString, MaxLength, MinLength, IsNumber } from "class-validator";
 
export class ClienteDto{
 
@IsInt({ message: 'inteiro válido'})
    id: number;
 
    @IsString({ message: 'String inválida'})
    @MinLength(10,{message: 'Mínimo 10 caracteres.'})
    @MaxLength(30, {message: 'Máximo 30 caracteres.'})
    nome: String;
 
    @IsInt({ message: 'Number inválido'})
    @MinLength(1,{message: 'Mínimo 1 caractere.'})
    @MaxLength(3, {message: 'Máximo 3 caracteres.'})
    idade: number;
 
    @IsString({ message: 'String inválida'})
    @MinLength(15,{message: 'Mínimo 15 caracteres.'})
    @MaxLength(80, {message: 'Máximo 45 caracteres.'})
    email: string;
 
    @IsString({ message: 'String inválida'})
    @MinLength(10,{message: 'Mínimo 10 caracteres.'})
    @MaxLength(30, {message: 'Máximo 30 caracteres.'})
    Estado_civil: string;
 
    @IsInt({ message: 'Number inválido'})
    @MinLength(11,{message: 'Mínimo 11 caracteres.'})
    @MaxLength(15, {message: 'Máximo 15 caracteres.'})
    cpf:number;
 
    @IsInt({ message: 'Number inválido'})
    @MinLength(4,{message: 'Mínimo 4 caracteres.'})
    @MaxLength(10, {message: 'Máximo 10 caracteres.'})
    rg: number;
 
    @IsString({ message: 'Não é uma string válida'})
    @MinLength(10,{message: 'Mínimo 10 caracteres.'})
    @MaxLength(50, {message: 'Máximo 50 caracteres.'})
    livro_favorito: string
 
    @IsString({ message: 'Não é uma string válida'})
    @MinLength(5,{message: 'Mínimo 5 caracteres.'})
    @MaxLength(50, {message: 'Máximo 50 caracteres.'})
    enderenco: string
 
    @IsInt({ message:  'Number inválido'})
    @MinLength(8,{message: 'Mínimo 8 caracteres.'})
    @MaxLength(15, {message: 'Máximo 15 caracteres.'})
    telefone:number
 
}
