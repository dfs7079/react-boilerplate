/**
 *
 */

import React from 'react';
import {connect} from 'react-redux';
import {dispatch} from '../store';
import {addTodo} from '../actions/creators';
import TodoInput from '../components/TodoInput.jsx';
import TodoList from '../components/TodoList.jsx';

const mapStateToProps = (state) => {
    return {
        todos: state.todos
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onAddTodo: (text) => {
            dispatch(addTodo(text))
        }
    }
};

let TodoAppContainer = React.createClass({
    render() {
        return(
            <section className="app-container">
                <TodoInput onAddTodo={this.props.onAddTodo} />
                <TodoList todos={this.props.todos} />
            </section>
        )
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(TodoAppContainer);