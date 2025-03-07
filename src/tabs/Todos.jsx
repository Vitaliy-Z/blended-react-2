import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import Form from '../components/Form/Form';
import EditForm from '../components/EditForm/EditForm';
import TodoList from '../components/TodoList/TodoList';

const todosInit = [
  { id: '1', text: 'Practice more' },
  { id: '2', text: 'Get all tasks done on time' },
];

const Todos = () => {
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem('todo')) || todosInit
  );
  const [isEditing, setIsEditing] = useState(false);
  const [currentTodo, setCurrentTodo] = useState(null);

  useEffect(() => {
    localStorage.setItem('todo', JSON.stringify(todos));
  }, [todos]);

  const addNewTodo = text =>
    setTodos(prevState => [...prevState, { id: nanoid(), text }]);
  const removeTodo = id =>
    setTodos(prevState => prevState.filter(el => el.id !== id));
  const goUpdate = id => {
    setCurrentTodo(todos.find(el => el.id === id)), setIsEditing(true);
  };

  const cancelUpdate = () => setIsEditing(false);

  const handleUpdateCurrentTodo = newText =>
    setCurrentTodo(prev => ({ ...prev, text: newText }));

  const updateTodo = id => {
    const idx = todos.findIndex(el => el.id === id);
    setTodos(prev => prev.toSpliced(idx, 1, currentTodo));
    setCurrentTodo(null);
    cancelUpdate();
  };

  return (
    <>
      {isEditing ? (
        <EditForm
          defaultTodo={currentTodo}
          updateTodo={updateTodo}
          onChangeUpdate={handleUpdateCurrentTodo}
          cancelUpdate={cancelUpdate}
        />
      ) : (
        <Form onSubmit={addNewTodo} />
      )}
      <TodoList todos={todos} removeTodo={removeTodo} playUpdate={goUpdate} />
    </>
  );
};

export default Todos;
