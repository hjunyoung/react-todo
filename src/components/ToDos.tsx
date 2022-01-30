import React from 'react';
import { useSetRecoilState } from 'recoil';
import { IToDo, toDoState } from '../atoms';

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
        toDo.id === id ? { ...toDo, category: name as IToDo['category'] } : toDo
      );
    });
  };

  return (
    <li>
      <span>{text}</span>
      {category === 'TO_DO' || (
        <button data-name="TO_DO" onClick={handleClick}>
          To Do
        </button>
      )}
      {category === 'DOING' || (
        <button data-name="DOING" onClick={handleClick}>
          Doing
        </button>
      )}
      {category === 'DONE' || (
        <button data-name="DONE" onClick={handleClick}>
          Done
        </button>
      )}
    </li>
  );
};

export default ToDos;
