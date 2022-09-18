import ListItem from "./ListItem";
import styles from "./ListBox.module.css";
import { ITodo } from "model/ITodo";

type ListProps = {
  items: ITodo[];
  selectedIndex: number;
  onClick: ( index: number ) => void;
};

const ListBox = ({ items, selectedIndex, onClick }: ListProps) => {
  return (
    <section className={ styles.section }>
      { items.map(( item, index ) => (
          <ListItem key={ index } isActive={ index === selectedIndex } { ...item } index={ index } onClick={ onClick } />
      )) }
    </section>
  );
};

export default ListBox;
