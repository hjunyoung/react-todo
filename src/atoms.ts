import { atom, selector } from 'recoil';

export const defaultCategories = {
  TO_DO: 'To Do',
  DOING: 'Doing',
  DONE: 'Done',
};

export interface IToDo {
  text: string;
  category: string;
  id: number;
}

export const allCategoryState = atom({
  key: 'allCategory',
  default:
    JSON.parse(localStorage.getItem('categoriesObj') as string) ??
    defaultCategories,
});

export const categoryState = atom<string>({
  key: 'category',
  default: localStorage.getItem('category') ?? 'To Do',
});

export const toDoState = atom<IToDo[]>({
  key: 'toDo',
  default: JSON.parse(localStorage.getItem('toDos') as string) ?? [],
});

export const toDoSelector = selector({
  key: 'toDoSelector',
  get: ({ get }) => {
    const toDos = get(toDoState);
    const category = get(categoryState);

    return toDos.filter((toDo) => toDo.category === category);
  },
});
