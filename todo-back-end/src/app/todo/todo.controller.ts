import { NotFoundSwagger } from './../../helpers/swagger/not-found.swagger';
import { BadRequestSwagger } from './../../helpers/swagger/bad-request.swagger';
import { UpdateTodoDto } from './../dto/udate-todo.dto';
import { CreateTodoDto } from './../dto/create-todo.dto';
import { TodoService } from './todo.service';
import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseUUIDPipe, Post, Put } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger/dist';
import { SwaggerTodo } from './swagger/index-todo.swagger';
import { CreateTodoSwagget } from './swagger/create-todo.swagger';
import { ShowTodoSwagger } from './swagger/show-todo.swagger';
import { UpdateTodoSwagger } from './swagger/update-todo.swagger';

@Controller('api/v1/tb_todos')
@ApiTags('tb_todos')
export class TodoController {
  constructor( private readonly todoService: TodoService ) {}

  @Get()
  @ApiOperation({ summary: 'Listar todas as tarefas'})
  @ApiResponse({ 
    status: 200, 
    description: 'Listar de as tarefas retornada com sucesso',
    type: SwaggerTodo,
    isArray: true,
  })
  async index() {
    return this.todoService.findAll();
  }

  //http://localhost:3000/api/v1/tb_todos/id
  @Get(':id')
  @ApiOperation({ summary: 'Exibir os dados de uma tarefas'})
  @ApiResponse({ 
    status: 200, 
    description: 'Dados de uma tarefa retornado com sucesso',
    type: ShowTodoSwagger,
  })
  @ApiResponse({ 
    status: 404,
    description: 'Task não foi encontrada',
    type: NotFoundSwagger,
  })
  async show( @Param('id', new ParseUUIDPipe() ) id: string) {
    return await this.todoService.findOneOrFail( id );
  }

  @Post()
  @ApiOperation({ summary: 'Adicionar uma nova tarefas'})
  @ApiResponse({ 
    status: 201, 
    description: 'Nova tarefa criada com sucesso',
    type: CreateTodoSwagget,
  })

  @ApiResponse({ 
    status: 400, 
    description: 'Parâmetros inválidos',
    type: BadRequestSwagger,
  })
  async create( @Body() body: CreateTodoDto ) {
    return await this.todoService.create( body )
  }

  @Put(':id')
  @ApiOperation({ summary: 'Atualizar os dados de uma tarefas'})
  @ApiResponse({ 
    status: 200, 
    description: 'Tarefa atualizada com sucesso',
    type: UpdateTodoSwagger,
  })
  @ApiResponse({ 
    status: 400, 
    description: 'Dados inválidos',
    type: BadRequestSwagger,
  })
  @ApiResponse({ 
    status: 404, 
    description: 'Task não foi encontrada',
    type: NotFoundSwagger,
  })
  async update( @Param('id', new ParseUUIDPipe()) id: string, @Body() body: UpdateTodoDto ) {
    return await this.todoService.update( id, body )
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Remover uma tarefas'})
  @ApiResponse({ status: 204, description: 'Tarefa removida com sucesso' })
  @ApiResponse({ 
    status: 404,
    description: 'Task não foi encontrada',
    type: NotFoundSwagger,
  })
  @HttpCode( HttpStatus.NO_CONTENT )
  async destroy( @Param('id', new ParseUUIDPipe()) id: string ) {
    return this.todoService.removeId( id );
  }
}
