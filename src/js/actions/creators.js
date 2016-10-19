import actionTypes from './types';


export function addTodo(text) {
    return {
        type: actionYypes.ADD_TODO,
        text
    };
}