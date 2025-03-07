import Grid from '../Grid/Grid';
import GridItem from '../GridItem/GridItem';
import TodoListItem from '../TodoListItem/TodoListItem';

const TodoList = ({ todos, removeTodo, playUpdate }) => {
  return (
    <Grid>
      {todos.map((el, idx) => (
        <GridItem key={el.id}>
          <TodoListItem
            todoItem={el}
            numberOf={idx + 1}
            playUpdate={playUpdate}
            removeTodo={removeTodo}
          />
        </GridItem>
      ))}
    </Grid>
  );
};

export default TodoList;
