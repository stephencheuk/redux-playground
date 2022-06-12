import { useRecoilValue } from "recoil";
import { todoQuery } from "./todoQuery";

export function TodoInfo() {
  const todo = useRecoilValue(todoQuery);
  return <div>{todo.title}</div>;
}