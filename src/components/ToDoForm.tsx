import { useForm } from 'react-hook-form';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { categoryState, toDoState } from '../atoms';

interface IForm {
  toDo: string;
}

const ToDoForm = () => {
  const setToDos = useSetRecoilState(toDoState);
  const currentCategory = useRecoilValue(categoryState);
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const onValid = ({ toDo }: IForm) => {
    setToDos((prevToDos) => [
      { text: toDo, category: currentCategory, id: Date.now() },
      ...prevToDos,
    ]);
    setValue('toDo', '');
  };
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
