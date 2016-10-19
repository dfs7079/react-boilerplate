import actionTypes from '../actions/types';


let __nextId = 0;

export default function todos(state = [], action) {
    switch (action.type) {
        case actionTypes.ADD_TODO:
            // add a new Todo to the state
            return [
                ...state,
                {
                    text: action.text,
                    id: __nextId++,
                    completed: false
                }
            ];
        default:
            return state;
    }
}