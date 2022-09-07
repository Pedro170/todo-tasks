import styles from './ListItem.module.css'

export type ListItemProps = {
  label: string;
}

const ListItem = ({ label }: ListItemProps) => {
  return (
    <div className={ styles.item }>{ label }</div>
  )
}

export default ListItem
