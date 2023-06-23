import React, { useRef } from 'react'

const TodosVariant2 = () => {
  const todoInput = useRef('');

  const handleAddTodo = () => {
    console.log('will add todo');
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
              <li className="list-group-item">first todo</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TodosVariant2;
