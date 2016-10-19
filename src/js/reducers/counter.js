import actionTypes from '../actions/types';


export default function counter(state = 0, action) {
    switch (action.type) {
        case actionTypes.ADD_TODO:
            return state + 1;
        default:
            return state;
    }
}