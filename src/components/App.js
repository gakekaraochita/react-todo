import React, { useState } from "react";
import { Input } from "./Input";
import { Incomplete } from "./Incomplete";
import { Complete } from "./Complete";

export const App = () => {
  const [todoText, setTodoText] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState([]);
  const [completeTodos, setCompleteTodos] = useState([]);

  const onChangeTodoText = (event) => {
    setTodoText(event.target.value);
  };

  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText("");
  };

  const onClickDelete = (index) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
  };

  const onClickComplete = (index) => {
    const newIncompleteTodos = [...incompleteTodos];
    newIncompleteTodos.splice(index, 1);

    const newCompleteTodos = [...completeTodos, incompleteTodos[index]];
    setIncompleteTodos(newIncompleteTodos);
    setCompleteTodos(newCompleteTodos);
  };
  const onClickReturn = (index) => {
    const newBackTodos = [...completeTodos];
    newBackTodos.splice(index, 1);

    const newIncompleteTodos = [...incompleteTodos, completeTodos[index]];
    setCompleteTodos(newBackTodos);
    setIncompleteTodos(newIncompleteTodos);
  };

  return (
    <>
      <h1 className={"font-bold text-3xl mb-3"}>TodoApp</h1>
      <Input
        todoText={todoText}
        onClick={onClickAdd}
        onChange={onChangeTodoText}
        disabled={incompleteTodos.length >= 5}
      />
      {incompleteTodos.length >= 5 && (
        <p className={"text-red-600 mb-1"}>
          You can add up to 5 messages. Please complete the task.
        </p>
      )}
      <Incomplete
        incompleteTodos={incompleteTodos}
        onClickComplete={onClickComplete}
        onClickDelete={onClickDelete}
      />
      <Complete completeTodos={completeTodos} onClickReturn={onClickReturn} />
    </>
  );
};
