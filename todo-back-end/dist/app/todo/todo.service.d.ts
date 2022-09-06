import { Repository } from 'typeorm';
import { UpdateTodoDto } from './../dto/udate-todo.dto';
import { CreateTodoDto } from './../dto/create-todo.dto';
import { TodoEntity } from './entity/todo.entity';
export declare class TodoService {
    private readonly todoRepository;
    constructor(todoRepository: Repository<TodoEntity>);
    findAll(): Promise<TodoEntity[]>;
    findOneOrFail(id: string): Promise<TodoEntity>;
    create(data: CreateTodoDto): Promise<TodoEntity>;
    update(id: string, data: UpdateTodoDto): Promise<TodoEntity>;
    removeId(id: string): Promise<void>;
}
