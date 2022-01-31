import { useForm } from 'react-hook-form';
import { useRecoilValue, useRecoilState } from 'recoil';
import { categoryState, toDoState } from '../atoms';

interface IForm {
  toDo: string;
}

const ToDoForm = () => {
  const [toDos, setToDos] = useRecoilState(toDoState);
  const currentCategory = useRecoilValue(categoryState);
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const onValid = ({ toDo }: IForm) => {
    setToDos((prevToDos) => [
      { text: toDo, category: currentCategory, id: Date.now() },
      ...prevToDos,
    ]);
    setValue('toDo', '');
  };

  localStorage.setItem('toDos', JSON.stringify(toDos));

  return (
    <form onSubmit={handleSubmit(onValid)}>
      <input
        {...register('toDo', { required: 'Please write a to do' })}
        type="text"
        placeholder="Write a to do"
      />
      <button>Add</button>
    </form>
  );
};

export default ToDoForm;
