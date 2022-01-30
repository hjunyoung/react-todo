import { useRecoilValue } from 'recoil';
import ToDoForm from './ToDoForm';
import { toDoState } from '../atoms';
import ToDos from './ToDos';

const ToDoList = () => {
  const toDos = useRecoilValue(toDoState);

  return (
    <div>
      <h1>Todo List</h1>
      <hr />
      <ToDoForm />
      <ul>
        {toDos.map((toDo) => (
          <ToDos key={toDo.id} {...toDo} />
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
