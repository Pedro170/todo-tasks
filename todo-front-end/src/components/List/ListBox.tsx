import ListItem, { ListItemProps } from "./ListItem";
import styles from "./ListBox.module.css";

type ListProps = {
  items: ListItemProps[];
};

const ListBox = ({ items }: ListProps) => {
  return (
    <section className={ styles.section }>
      { items.map(( item, idx ) => (
          <ListItem key={ idx } { ...item } />
      )) }
    </section>
  );
};

export default ListBox;
