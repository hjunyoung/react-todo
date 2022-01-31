import { useRecoilValue, useRecoilState } from 'recoil';
import ToDoForm from './ToDoForm';
import { categoryState, categories, toDoSelector } from '../atoms';
import ToDos from './ToDos';
import React from 'react';

const ToDoList = () => {
  const toDos = useRecoilValue(toDoSelector);
  const [category, setCategory] = useRecoilState(categoryState);
  const handleChange = (event: React.FormEvent<HTMLSelectElement>) => {
    setCategory(event.currentTarget.value as categories);
  };
  return (
    <div>
      <h1>Todo List</h1>
      <hr />
      <select onChange={handleChange} value={category}>
        <option value="TO_DO">To Do</option>
        <option value="DOING">Doing</option>
        <option value="DONE">Done</option>
      </select>
      <ToDoForm />
      {toDos.map((toDo) => (
        <ToDos key={toDo.id} {...toDo} />
      ))}
    </div>
  );
};

export default ToDoList;
