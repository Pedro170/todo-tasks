import styles from './Input.module.css'

type InputProps = {
  id?: string;
  type?: string;
  label?: string;
  value?: string | number;
  placeholder?: string;
  onChange?: ( value: any ) => void;
  onKeyUp?: ( value: any ) => void;
}

const Input = ({ id, type, label, value, placeholder, onChange, onKeyUp }: InputProps) => {
  return (
    <label htmlFor={ id } className={ styles.label }>
      <span>{ label }</span>
      <input
        id={ id }
        type={ type }
        value={ value }
        className={ styles.input }
        placeholder={ placeholder }
        onChange={ onChange }
        onKeyUp={ onKeyUp }
      />
    </label>
  )
}

export default Input
