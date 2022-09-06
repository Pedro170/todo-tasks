import { UpdateTodoDto } from './../dto/udate-todo.dto';
import { CreateTodoDto } from './../dto/create-todo.dto';
import { TodoService } from './todo.service';
import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseUUIDPipe, Post, Put } from '@nestjs/common';

@Controller('api/v1/tb_todos')
export class TodoController {
  constructor( private readonly todoService: TodoService ) {}

  @Get()
  async index() {
    return this.todoService.findAll();
  }

  //http://localhost:3000/api/v1/tb_todos/id
  @Get(':id')
  async show( @Param('id', new ParseUUIDPipe() ) id: string) {
    return await this.todoService.findOneOrFail( id );
  }

  @Post()
  async create( @Body() body: CreateTodoDto ) {
    return await this.todoService.create( body )
  }

  @Put(':id')
  async update( @Param('id', new ParseUUIDPipe()) id: string, @Body() body: UpdateTodoDto ) {
    return await this.todoService.update( id, body )
  }

  @Delete(':id')
  @HttpCode( HttpStatus.NO_CONTENT )
  async destroy( @Param('id', new ParseUUIDPipe()) id: string ) {
    return this.todoService.removeId( id );
  }
}
