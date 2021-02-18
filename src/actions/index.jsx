import { ADD_TODO, DELETE_TODO, MARK_DONE } from '../constants/action-types'


export const addTodo = (data) => ({
    type: ADD_TODO,
    payload: data
})


export const deleteTodo = (data) => ({
    type: DELETE_TODO,
    payload: data
})

export const markDone = (data) => ({
    type: MARK_DONE,
    payload: data
})
