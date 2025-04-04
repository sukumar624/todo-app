import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchTodos } from '../features/todoSlice';

const TodoList = () => {
  const { loading, error, todo } = useSelector((state) => state.todos)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodos())
  }, [dispatch]);

  if (loading) {
    return <p>Loading...</p>
  };

  if (error) {
    return <p style={{ color: 'red' }}>{error}</p>
  }

  return (
    <div className='todo_item'>
      {
        todo.map((todo) =>
          <p key={todo.id}>{todo.title}</p>
        )
      }
    </div>
  )
}

export default TodoList
