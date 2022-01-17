import React from "react";

export const Input = (props) => {
  const { todoText, onChange, onClick, disabled } = props;
  return (
    <div className={"flex items-center mb-5"}>
      <input
        disabled={disabled}
        className={"input"}
        type="text"
        placeholder={"Add text here"}
        value={todoText}
        onChange={onChange}
      />
      <button className={"btn"} disabled={disabled} onClick={onClick}>
        Add
      </button>
    </div>
  );
};
