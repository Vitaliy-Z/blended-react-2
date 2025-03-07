import { RiSaveLine } from 'react-icons/ri';
import { MdOutlineCancel } from 'react-icons/md';

import style from './EditForm.module.css';

const EditForm = ({
  defaultTodo,
  onChangeUpdate,
  updateTodo,
  cancelUpdate,
}) => {
  const onChange = evt => {
    const text = evt.currentTarget.value.trim();
    onChangeUpdate(text);
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    const value = evt.target.elements.text.value.trim();
    value !== '' && updateTodo(defaultTodo.id);
  };

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <button className={style.submitButton} type="submit">
        <RiSaveLine color="green" size="16px" />
      </button>

      <button className={style.editButton} type="button" onClick={cancelUpdate}>
        <MdOutlineCancel color="red" size="16px" />
      </button>

      <input
        className={style.input}
        placeholder="What do you want to write?"
        name="text"
        autoComplete="off"
        required
        defaultValue={defaultTodo.text}
        autoFocus
        onChange={onChange}
      />
    </form>
  );
};
export default EditForm;
