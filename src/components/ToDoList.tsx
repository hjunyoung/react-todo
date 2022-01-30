import { useForm } from 'react-hook-form';

interface IForm {
  toDo: string;
}

const ToDoList = () => {
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const onValid = (data: IForm) => {
    console.log('Add to do', data.toDo);
    setValue('toDo', '');
  };

  return (
    <div>
      <h1>Todo List</h1>
      <hr />
      <form onSubmit={handleSubmit(onValid)}>
        <input
          {...register('toDo', { required: 'Please write a to do' })}
          type="text"
          placeholder="Write a to do"
        />
        <button>Add</button>
      </form>
      <ul></ul>
    </div>
  );
};

export default ToDoList;
