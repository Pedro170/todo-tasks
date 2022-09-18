import { ITodo } from "model/ITodo";
import Api from "utils/Api";

const getAll = () => Api.get<ITodo[]>('/v1/tb_todos');

const createTodo = ( body: Pick<ITodo, 'task' | 'isDone'>  ) => Api.post('/v1/tb_todos', body);

const updateTodo = ( id: string, body: Pick<ITodo, 'task' | 'isDone'>  ) => Api.put(`/v1/tb_todos/${ id }`, body);

// const updateTodo = ( CD_ID: string, body: Pick<ITodo, 'task' | 'isDone'> ) => Api.put<ITodo>(`/v1/tb_todos/${ CD_ID }`, body);

export const TodoService = {
  getAll,
  createTodo,
  updateTodo,
}
