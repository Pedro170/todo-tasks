import React from 'react'
import Input from 'components/Forms/Input/Input'
import Header from 'components/Header/Header'
import ListBox from 'components/List/ListBox'
import styles from './Home.module.css'
import Times from 'components/Times/Times'
import useTodo from 'hooks/useTodo'

const Home = () => {
  const [ taskName, setTaskName ] = React.useState('');
  const { tasks, getAll, createTodo } = useTodo();
  const [ taskIndex, setTaskIndex ] = React.useState( 0 )


  const handleKeyUp = React.useCallback( async ( event: React.KeyboardEvent ) => {
    if( (event.code === 'Enter' || event.code === 'NumpadEnter') && taskName !== '' ) {
      await createTodo({ task: taskName, isDone: 0 });
      await getAll();
      setTaskName('');
    }
  }, [ createTodo, getAll, taskName ])

  React.useEffect(() => {
    getAll();
  }, [ getAll ]);

  return (
    <>
      <Header />
      <section className={ styles.home }>
        <div className={ styles.tarefas }>
          <Input
            id='tarefa'
            type='text'
            value={ taskName }
            onChange={({ target }) => setTaskName( target.value )}
            onKeyUp={ handleKeyUp }
            placeholder="Adicione uma nova tarefa"
          />
          <ListBox items={ tasks } selectedIndex={ taskIndex } onClick={ setTaskIndex } />
        </div>

        <div className={`${ styles.tarefas } ${ styles.time }`}>
          <Times tasks={ tasks } taskIndex={ taskIndex } />
        </div>
      </section>
    </>
  )
}

export default Home
