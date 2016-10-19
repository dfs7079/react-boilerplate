import React from 'react';
import Todo from './Todo.jsx';

let TodoList = React.createClass({

    render() {
        return (
            <div className="todo-list">
                {this.props.todos.map(todo => <Todo key={todo.id} text={todo.text} />)}
            </div>
        )
    }

});


export default TodoList;