import React, { useState, memo } from "react";

interface Props {
  onClick: (text: string) => void;
}

const AddTodo: React.FC<Props> = ({ onClick }) => {
  const [inputValue, setInputValue] = useState("");
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setInputValue(e.target.value);
  const localOnClick = (): void => {
    if (inputValue === "") {
      return;
    }
    onClick(inputValue.trim());
    setInputValue("");
  };

  return (
    <>
      <input type="text" value={inputValue} onChange={onChange} />
      <button type="button" onClick={localOnClick}>
        Add Todo
      </button>
    </>
  );
};

export default memo(AddTodo);
