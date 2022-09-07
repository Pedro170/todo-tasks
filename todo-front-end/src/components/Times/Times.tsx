import React from 'react'
import Icon from 'components/Icon/Icon'
import styles from './Times.module.css'

type props = {
  minutes: number;
  seconds: number;
  onClick?: ( value: any ) => void;
}

const Times = ({ minutes, seconds, onClick }: props) => {
  return (
    <section>
      <div className={ styles.containerTimes } >
        <span>{ minutes.toString().padStart(2, '0') }</span><b>:</b>
        <span>{ seconds.toString().padStart(2, '0') }</span>
      </div>
      <button onClick={ onClick } className={ styles.buttonStart }>
        start
      </button>
      <div className={ styles.buttonRow }>
        <button>
          <Icon variant='play' />
        </button>

        <button>
          <Icon variant='pause' />
        </button>

        <button>
          <Icon variant='stop' />
        </button>

        <button>
          <Icon variant='restart' />
        </button>

        <button>
          <Icon variant='done' />
        </button>
      </div>
    </section>
  )
}

export default Times
