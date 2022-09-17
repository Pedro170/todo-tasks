import React from 'react'
import Input from 'components/Forms/Input/Input'
import Header from 'components/Header/Header'
import ListBox from 'components/List/ListBox'
import styles from './Home.module.css'
import Times from 'components/Times/Times'

const Home = () => {
  const [ taskName, setTaskName ] = React.useState('');
  const [ tasks, setTasks ] = React.useState<{ label: string }[]>( [] );

  const handleKeyUp = ( event: React.KeyboardEvent ) => {
    if( (event.code === 'Enter' || event.code === 'NumpadEnter') && taskName !== '' ) {
      setTasks(( prev ) => {
        const _tasks =  [...prev ];
        _tasks.push({ label: taskName });
        return _tasks;
      })
      setTaskName('');
    }
  }

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
          <ListBox items={ tasks }/>
        </div>

        <div className={`${ styles.tarefas } ${ styles.time }`}>
          <Times />
        </div>
      </section>
    </>
  )
}

export default Home
