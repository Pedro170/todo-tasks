import Icon from 'components/Icon/Icon';
import styles from './ListItem.module.css'

export type ListItemProps = {
  index: number;
  CD_ID: string;
  task: string;
  isDone: number;
  isActive: boolean;
  onClick: ( index: number ) => void;
}

const ListItem = ({ index, CD_ID, task, isDone, isActive, onClick }: ListItemProps) => {
  return (
    <div
      className={ styles.item }
      onClick={() => onClick( index )}
      style={{background: `${ isActive ? '#36373b' : '#17181F' }`}}
    >
      { task }
      { isDone === 1 && <span><Icon variant='done'/></span>}
    </div>
  )
}

export default ListItem
