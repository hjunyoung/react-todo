import { atom, selector } from 'recoil';

export enum Categories {
  'TO_DO' = 'TO_DO',
  'DOING' = 'DOING',
  'DONE' = 'DONE',
}

export interface IToDo {
  text: string;
  category: Categories;
  id: number;
}

export const toDoState = atom<IToDo[]>({
  key: 'toDo',
  default: JSON.parse(localStorage.getItem('toDos') as string) ?? [],
});

export const categoryState = atom<Categories>({
  key: 'category',
  default:
    Categories[(localStorage.getItem('category') as Categories) ?? 'TO_DO'],
});

export const toDoSelector = selector({
  key: 'toDoSelector',
  get: ({ get }) => {
    const toDos = get(toDoState);
    const category = get(categoryState);

    return toDos.filter((toDo) => toDo.category === category);
  },
});
