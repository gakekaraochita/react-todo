import React from "react";

export const Complete = (props) => {
  const { completeTodos, onClickReturn } = props;
  return (
    <div className={"bg-green-200 rounded mb-5 p-5"}>
      <h2 className={"font-bold text-2xl mb-3"}>CompleteList</h2>
      <ul>
        {completeTodos.map((todo, index) => {
          return (
            <li
              key={todo}
              className={
                "flex items-center justify-between gap-2 border-b-[1px] border-white p-2"
              }
            >
              <p>{todo}</p>
              <button className={"btn"} onClick={() => onClickReturn(index)}>
                Return to incomplete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
