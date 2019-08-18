import React, { memo } from "react";
import { TodoTypes } from "../actions/types";

interface Props {
  id: string;
  text: string;
  completed: boolean;
  onClick: (id: string) => TodoTypes;
  onClickRemoveTodo: (id: string) => TodoTypes;
}

const Todo: React.FC<Props> = ({
  id,
  text,
  onClick,
  completed,
  onClickRemoveTodo,
}) => (
  <li
    id={id}
    style={{
      textDecoration: completed ? "line-through" : "none",
    }}
  >
    <span onClick={() => onClick(id)}>{text}</span>
    <button
      style={{ marginLeft: 5 }}
      type="button"
      onClick={() => onClickRemoveTodo(id)}
    >
      Remove
    </button>
  </li>
);

export default memo(Todo);
