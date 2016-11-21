import React, {PropTypes} from 'react';


let TodoInput = React.createClass({
    propTypes: {
        onAddTodo: PropTypes.func.isRequired,
    },

    getInitialState() {
      return {
          text: ''
      };
    },

    render() {
        return (
            <div className="todo-input">
                <input ref="_input" maxLength="100" value={this.state.text} onInput={this.handleInput} />
                <button onClick={this.onClickAdd}>Add Todo</button>
            </div>
        );
    },

    handleInput(e) {
        let text = this.refs._input.value; // reflect on the input to update component state

        this.setState({text: text});
    },

    onClickAdd(e) {
        let text = this.state.text;
        this.setState({text: ''}); // clear input field

        // trigger parent event
        if (text && text.length) {
            this.props.onAddTodo(text);
        }
    }
});


export default TodoInput;