import React, {PropTypes} from 'react';


let TodoInput = React.createClass({

    propTypes: {
        onAddTodo: PropTypes.func.isRequired,
    },

    render() {
        return (
            <div className="todo-input">
                <input ref="_input" maxLength="100" />
                <button onClick={this.onClickAdd}>Add Todo</button>
            </div>
        );
    },

    onClickAdd(e) {
        let text = this.refs._input.value;

        // clear field - could also handle with state
        this.refs._input.value = '';

        // trigger parent event
        this.props.onAddTodo(text);
    }
});


export default TodoInput;