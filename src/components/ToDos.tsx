import React from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { allCategoryState, IToDo, toDoState } from '../atoms';

const ToDos = ({ text, category, id }: IToDo) => {
  const categoriesObj = useRecoilValue(allCategoryState);
  const setCategory = useSetRecoilState(toDoState);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: {
        dataset: { name },
      },
    } = event;

    setCategory((prevToDos) => {
      // Method 1.
      /* const targetIndex = prevToDos.findIndex((toDo) => toDo.id === id);
      const newToDo = {
        ...prevToDos[targetIndex],
        category: name as IToDo['category'],
      };
      console.log(newToDo);
      return [...prevToDos].splice(targetIndex, 1, newToDo); */

      // Method 2.
      return prevToDos.map((toDo) =>
        toDo.id === id ? { ...toDo, category: name as string } : toDo
      );
    });
  };
  const deleteToDo = (event: React.MouseEvent<HTMLButtonElement>) => {
    setCategory((prevToDos) => prevToDos.filter((toDo) => toDo.id !== id));
  };

  return (
    <li>
      <span>{text}</span>
      {category === categoriesObj.TO_DO || (
        <button data-name={categoriesObj.TO_DO} onClick={handleClick}>
          To Do
        </button>
      )}
      {category === categoriesObj.DOING || (
        <button data-name={categoriesObj.DOING} onClick={handleClick}>
          Doing
        </button>
      )}
      {category === categoriesObj.DONE || (
        <button data-name={categoriesObj.DONE} onClick={handleClick}>
          Done
        </button>
      )}
      <button onClick={deleteToDo}>Delete</button>
    </li>
  );
};

export default ToDos;
