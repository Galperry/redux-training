import {ADD_TODO , DELETE_TODO , MARK_DONE} from "../constants/action-types"

const initialState = {
    todos: []
}


const todos = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, action.payload]
            }
        case DELETE_TODO:
            let updatedTodos = state.todos.filter(
                (todo) => todo.id !== action.payload
            )
            return {todos: updatedTodos}
        case MARK_DONE:
            let allTodos = state.todos.map(todo => {
                    if (todo.id === action.payload){
                        if (!todo.line){
                            todo.line = true
                        }
                        else{
                            todo.line = !todo.line
                        }
                    }
                    return todo;
                }
            )
            return {todos: allTodos}

        default:
            return state
    }
}

export default todos;
