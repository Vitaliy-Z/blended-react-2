import { FiSearch } from 'react-icons/fi';
import style from './Form.module.css';

const Form = ({ onSubmit }) => {
  const handleSubmit = evt => {
    evt.preventDefault();
    const value = evt.target.elements.search.value.trim();

    value !== '' && onSubmit(value);

    evt.target.reset();
  };

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <button className={style.button} type="submit">
        <FiSearch size="16px" />
      </button>

      <input
        className={style.input}
        placeholder="What do you want to write?"
        name="search"
        autoComplete="off"
        required
        autoFocus
      />
    </form>
  );
};

export default Form;
