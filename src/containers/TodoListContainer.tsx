import React, { useCallback, memo } from "react";
import { useDispatch } from "react-redux";
import { TodoList } from "../components";
import { toggleTodo, removeTodo } from "../actions";
import { TodoItem, TodoTypes } from "../actions/types";

interface Props {
  todos: TodoItem[];
}

const TodoListContainer: React.FC<Props> = ({ todos }) => {
  const dispatch = useDispatch();
  const onClick = useCallback(
    (id: string): TodoTypes => dispatch(toggleTodo(id)),
    [dispatch],
  );
  const onClickRemoveTodo = useCallback(
    (id: string): TodoTypes => dispatch(removeTodo(id)),
    [dispatch],
  );
  const formatedTodos = todos.map((todo: TodoItem) => ({
    ...todo,
    onClick,
    onClickRemoveTodo,
  }));

  return <TodoList todos={formatedTodos} />;
};

export default memo(TodoListContainer);
