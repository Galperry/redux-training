import React,{useState} from 'react'

const TodoList = ({todos, onDeleteTodo, onMarkDone}) => {
    // const [Line, setLine] = useState(false)
    return (
    <div className="todo-list">
        {todos && todos.length > 0 ? (
            todos.map((todo) => ( 
            <div style={todo.line ? {textDecoration: "line-through"}:{}} className="todo-item" key={todo.id}>
                <div className="row">
                {/* {console.log(todo.line)} */}
                <div className="col-xs-8">
                    <h4 style={todo.line ? {textDecoration: "line-through"}:{}}>{todo.title}</h4>
                </div>
                <div className="col-xs-2">
                    <button
                    className="btn btn-success"
                    onClick={() => onMarkDone(todo.id)}
                    // onClick={()=>setLine(!Line)}
                    >
                    Mark as Done
                    </button>
                    <button
                    className="btn btn-danger"
                    onClick={() => onDeleteTodo(todo.id)}
                    >
                    Delete
                    </button>
                </div>
                </div>
                <p>{todo.desc}</p>
            </div>
            ))
        ) : (
        <i>No data found</i>
      )}
    </div>
    )
}

export default TodoList
