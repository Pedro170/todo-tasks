import React from 'react'
import Input from 'components/Forms/Input/Input'
import Header from 'components/Header/Header'
import ListBox from 'components/List/ListBox'
import styles from './Home.module.css'
import Times from 'components/Times/Times'

const  DEFAULT_SECOND = 10;

const Home = () => {
  const [ taskName, setTaskName ] = React.useState('');
  const [ tasks, setTasks ] = React.useState<{ label: string }[]>( [] );
  const [ seconds, setSeconds ] = React.useState( DEFAULT_SECOND );

  let minutes = 25;
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

  const startTime = () => {
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
            placeholder="Adicione uma nova tarefa..."
          />
          <ListBox items={ tasks }/>
        </div>

        <div className={`${ styles.tarefas } ${ styles.time }`}>
          <Times
            seconds={ seconds }
            minutes={ minutes }
            onClick={ startTime }
          />
        </div>
      </section>
    </>
  )
}

export default Home
