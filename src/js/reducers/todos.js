import actionTypes from '../actions/types';


export default function todos(state = [], action) {
    switch (action.type) {
        case actionTypes.ADD_TODO:
            return state.concat([ action.text ]);
        default:
            return state;
    }
}