import React from 'react';
import { useSetRecoilState } from 'recoil';
import { Categories, IToDo, toDoState } from '../atoms';

const ToDos = ({ text, category, id }: IToDo) => {
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
        toDo.id === id ? { ...toDo, category: name as Categories } : toDo
      );
    });
  };

  return (
    <li>
      <span>{text}</span>
      {category === Categories.TO_DO || (
        <button data-name={Categories.TO_DO} onClick={handleClick}>
          To Do
        </button>
      )}
      {category === Categories.DOING || (
        <button data-name={Categories.DOING} onClick={handleClick}>
          Doing
        </button>
      )}
      {category === Categories.DONE || (
        <button data-name={Categories.DONE} onClick={handleClick}>
          Done
        </button>
      )}
    </li>
  );
};

export default ToDos;
