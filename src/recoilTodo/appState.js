import { atom, selector } from "recoil";

export const todosQuery = selector({
  key: "todo",
  get: async ({ get }) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos`);
    const todos = res.json();
    return todos;
  },
});

export const todoState = atom({
  key: "todoState",
  default: selector({
    key: "todoState/default",
    get: ({ get }) => {
      const todos = get(todosQuery);
      return todos[0];
    },
  }),
});