import { TodoEntity } from "../entity/todo.entity";
// import { OmitType, PartialType } from "@nestjs/swagger"

export class SwaggerTodo extends TodoEntity{}

// export class SwaggerTodo extends PartialType( 
//   OmitType(TodoEntity, ['createdAt', 'updatedAt', 'deletedAt'])
// ) {}