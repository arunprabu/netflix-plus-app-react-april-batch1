import React, { useEffect, useReducer, useRef } from 'react'
import todoReducer from '../../../reducers/todoReducer';

const TodosVariant2 = () => {
  const todoInput = useRef('');

  const [todoList, todoDispatch] = useReducer(todoReducer);
  console.log(todoList); // undefined -- get the state data from reducer. How?
  console.log(todoDispatch); // dispatcher fn -- part of react core
  // dispatcher fn must be called with an action obj to get state data from the reducer

  useEffect(() => {
    todoDispatch({
      type: 'LIST_TODOS'
    })
  }, []);

  const handleAddTodo = () => {
    console.log('will add todo');
    console.log(todoInput.current.value);
    todoDispatch({
      type: 'ADD_TODO',
      payload: {
        id: Math.floor(Math.random() * 100000),
        title: todoInput.current.value,
        isCompleted: false
      }
    });
  }

  return (
    <div style={{ backgroundColor: '#B2EBF2', padding: '20px' }}>
      <h3>Todos App with useReducer and useRef</h3>

      <div className="row">
        <div className="col-auto">
          {/* Uncontrolled Component -- where form data is handled by the DOM itself. */}
          <input type="text" className="form-control" ref={todoInput} />
        </div>
        <div className="col-auto">
          <button className="btn btn-success" onClick={handleAddTodo}>
            ADD TODO
          </button>
        </div>
      </div>

      <div className="row mt-3">
        <div className="col-md-4">
          <div className="card">
            <ul className="list-group list-group-flush">
              {
                todoList?.map((todo) => {
                  return <li key={todo.id} className="list-group-item">{todo.title}</li>;
                })
              }
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TodosVariant2;
