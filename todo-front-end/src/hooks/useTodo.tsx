import React from 'react'
import { ITodo } from 'model/ITodo'
import { TodoService } from 'services/TodoService'

const useTodo = () => {
  const [ tasks, setTasks ] = React.useState<ITodo[]>( [] )

  const getAll = React.useCallback( async () => {
    const { status, data } = await TodoService.getAll();
    if( status !== 200 ) throw new Error();

    setTasks( data );
  }, [])

  const createTodo = React.useCallback( async ( body: Pick<ITodo, 'task' | 'isDone'> ) => {
    const { status } = await TodoService.createTodo( body );
    if( status !== 201 ) throw new Error();
  }, [])

  const updateTodo = React.useCallback( async ( id: string, body: Pick<ITodo, 'task' | 'isDone'> ) => {
    const { status } = await TodoService.updateTodo( id, body );
    if( status !== 200 ) throw new Error();
  }, [])

  // const updateTodo = React.useCallback( async ( id: string, body: Pick<ITodo, 'task' | 'isDone'> ) => {
  //   const { status } = await TodoService.updateTodo( id, body );
  //   if( status !== 200 ) throw new Error();
  // }, [])

  return {
    tasks,
    getAll,
    createTodo,
    updateTodo,
  }
}

export default useTodo
