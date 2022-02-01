import { useForm } from 'react-hook-form';
import { useRecoilState } from 'recoil';
import { categoryState, allCategoryState } from '../atoms';

interface ICategoryForm {
  newCategory: string;
}

const Category = () => {
  const { register, handleSubmit, setValue } = useForm<ICategoryForm>();
  const [allCategories, setAllCategories] = useRecoilState(allCategoryState);
  const [category, setCategory] = useRecoilState<string>(categoryState);
  const handleChange = (event: React.FormEvent<HTMLSelectElement>) => {
    setCategory(event.currentTarget.value as string);
  };
  const onValid = ({ newCategory }: ICategoryForm) => {
    if (Object.values(allCategories).includes(newCategory)) {
      setValue('newCategory', '');
      return;
    }

    setAllCategories((prevCategories: any) => {
      return { ...prevCategories, [newCategory]: newCategory };
    });
    setCategory(newCategory);
    setValue('newCategory', '');
  };

  localStorage.setItem('categoriesObj', JSON.stringify(allCategories));
  localStorage.setItem('category', category);

  return (
    <>
      <select onChange={handleChange} value={category}>
        {Object.values(allCategories).map((category, index) => (
          <option key={index} value={category as string}>
            {category as string}
          </option>
        ))}
      </select>
      <form onSubmit={handleSubmit(onValid)}>
        <input
          {...register('newCategory', { required: true })}
          type="text"
          placeholder="Add new category"
        />
        <button>New Category</button>
      </form>
    </>
  );
};

export default Category;
