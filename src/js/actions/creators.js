import actionTypes from './types';


export function addTodo(text) {
    return {
        type: actionTypes.ADD_TODO,
        value: text
    };
}