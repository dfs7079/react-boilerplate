import React from 'react';


let Todo = React.createClass({
    render() {
        return (
            <div className="todo">{this.props.text}</div>
        );
    }
});


export default Todo;