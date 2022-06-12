import { selector } from "recoil";

export const todoQuery = selector({
  key: "todo",
  get: async ({ get }) => {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos/3");
    const todos = res.json();
    console.log(todos);
    return todos;
  },
});
