import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodo } from "../features/todoSlice";

const TodoList = () => {
  const { loading, data, error } = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTodo());
  }, []);
  return (
    <div>
      {data.map((data) => (
        <p>{data.title}</p>
      ))}
    </div>
  );
};

export default TodoList;
