import React from "react";

export const Incomplete = (props) => {
  const { incompleteTodos, onClickComplete, onClickDelete } = props;
  return (
    <div className={"bg-blue-200 rounded mb-5 p-5"}>
      <h2 className={"font-bold text-2xl mb-3"}>IncompleteList</h2>
      <ul>
        {incompleteTodos.map((todo, index) => {
          return (
            <li
              key={todo}
              className={
                "flex items-center gap-2 w-full justify-between border-b-[1px] border-white p-2"
              }
            >
              <p className={"basis-1"}>{todo}</p>
              <div>
                <button
                  className={"btn"}
                  onClick={() => onClickComplete(index)}
                >
                  Completed
                </button>
                <button className={"btn"} onClick={() => onClickDelete(index)}>
                  Delete
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
