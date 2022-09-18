import React from 'react'
import Icon from 'components/Icon/Icon'
import styles from './Times.module.css'
import useTodo from 'hooks/useTodo';
import { ITodo } from 'model/ITodo';

const SECONDS_DEFAULT = 5;

type Props = {
  tasks: ITodo[];
  taskIndex: number;
}

const Times = ({ tasks, taskIndex }: Props) => {
  const [seconds, setSeconds] = React.useState(SECONDS_DEFAULT);
  const [timer, setTimer] = React.useState<any>();
  const [stage, setStage] = React.useState('ready');

  const { updateTodo, getAll } = useTodo();

  const secondsToTime = (secs: number) => {
    const divisorMinutes = secs % 3600;
    let minutes: any = Math.floor(divisorMinutes / 60);
    minutes = String(minutes).padStart(2, '0');

    const divisorSeconds = divisorMinutes % 60;
    let seconds: any = Math.ceil(divisorSeconds);
    seconds = String(seconds).padStart(2, '0');

    return `${minutes}:${seconds}`;
  };

  const startTimer = () => {
    setStage('in_progress');

    const timerInterval = setInterval(() => {
      setSeconds((previousSeconds) => {
        if (previousSeconds === 0) {
          clearInterval(timerInterval);
          setTimer(undefined);
          setStage('finished');
          return 0;
        }

        return previousSeconds - 1;
      });
    }, 1000);

    setTimer(timerInterval);
  };

  const handleRestartButton = React.useCallback(() => {
    setStage('ready');
    setSeconds(SECONDS_DEFAULT);
    clearInterval(timer);
    setTimer(undefined);
  }, [timer]);

  const handlePauseButton = React.useCallback(() => {
    clearInterval(timer);
    setTimer(undefined);
  }, [timer]);

  const handleStopButton = React.useCallback(() => {
    handlePauseButton();
    setSeconds(SECONDS_DEFAULT);
    setStage('ready');
  }, [handlePauseButton]);

  const handleStageStatus = React.useMemo(() => {
    switch( stage ) {
      case 'ready':
        return 'Ready';

      case 'in_progress':
        return 'Time to Work';

      case 'finished':
        return 'Finished';

      default:
        return 'Ready';
    }
  }, [ stage ])

  const handleDoneButton = React.useCallback( async () => {
    const task = tasks[ taskIndex ];
    if( task ) {
      await updateTodo( task.CD_ID, { ...task, isDone: 1 } );
      console.log(task)
      getAll();
    }
  }, [ taskIndex, tasks, updateTodo, getAll ])

  return (
    <section>
      <div className={ styles.containerTimes } >
        <p>{ handleStageStatus }</p>
        <span> { secondsToTime(seconds) }</span>
      </div>

      <button onClick={ startTimer } className={ styles.buttonStart }>
        start
      </button>

      <div className={ styles.buttonRow }>
        <button onClick={ startTimer }>
            <Icon variant='play' />
        </button>

        <button onClick={ handlePauseButton }>
            <Icon variant='pause' />
        </button>

        <button onClick={ handleStopButton }>
          <Icon variant='stop' />
        </button>

        <button onClick={ handleRestartButton }>
          <Icon variant='restart' />
        </button>

        <button onClick={ handleDoneButton }>
          <Icon variant='done' />
        </button>
      </div>
    </section>
  )
}

export default Times
