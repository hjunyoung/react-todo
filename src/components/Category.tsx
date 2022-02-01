import { useRecoilState } from 'recoil';
import { categoryState, Categories } from '../atoms';

const Category = () => {
  const [category, setCategory] = useRecoilState(categoryState);
  const handleChange = (event: React.FormEvent<HTMLSelectElement>) => {
    setCategory(event.currentTarget.value as Categories);
  };

  localStorage.setItem('category', category);

  return (
    <select onChange={handleChange} value={category}>
      <option value={Categories.TO_DO}>To Do</option>
      <option value={Categories.DOING}>Doing</option>
      <option value={Categories.DONE}>Done</option>
    </select>
  );
};

export default Category;
