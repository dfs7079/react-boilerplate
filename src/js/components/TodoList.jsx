import React from 'react';
import Todo from './Todo.jsx';

let TodoList = React.createClass({

    render() {
        return (
            <div className="todo-list">
                {this.props.todos.map(todo => <Todo key={todo.id} text={todo.text}  onClick={this.props.onClickTodo} />)}
            </div>
        )
    }

});


export default TodoList;