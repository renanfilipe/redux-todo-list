import React, { memo } from "react";
import Todo from "./Todo";
import { TodoTypes } from "../actions/types";

interface TodoComponentProp {
  id: string;
  text: string;
  completed: boolean;
  onClick: (id: string) => TodoTypes;
  onClickRemoveTodo: (id: string) => TodoTypes;
}

interface Props {
  todos: TodoComponentProp[];
}

const TodoList: React.FC<Props> = ({ todos = [] }) => (
  <ul>
    {todos.map((todo) => (
      <Todo {...todo} key={todo.id} />
    ))}
  </ul>
);

export default memo(TodoList);
