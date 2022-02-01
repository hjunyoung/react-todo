import { useRecoilValue } from 'recoil';
import ToDoForm from './ToDoForm';
import { toDoSelector } from '../atoms';
import ToDos from './ToDos';
import Category from './Category';

const ToDoList = () => {
  const toDos = useRecoilValue(toDoSelector);

  return (
    <div>
      <h1>Todo List</h1>
      <hr />
      <Category />
      <ToDoForm />
      {toDos.map((toDo) => (
        <ToDos key={toDo.id} {...toDo} />
      ))}
    </div>
  );
};

export default ToDoList;
