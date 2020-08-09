import React, { Component } from 'react';

import { bindActionCreators } from 'redux';

import { connect } from 'react-redux';

import * as todoActions from './actions/todos'

class TodoList extends Component {

    constructor(props) {
        super(props);

        console.log(props)

    }

    state = {
        newTodoText: ''
    }

    addNewTodo = () => {
        if(this.state.newTodoText === ''){
            return
        }
        this.props.addTodo(this.state.newTodoText)
        console.log(this.state.newTodoText)
        console.log(this.props)
        this.setState({ newTodoText: '' })
    }
    render() {

        return (
            <>
                {/* <ul>
                    {this.props.todos.map(function (todo) 
                    { return(
                        <li key={todo.id}>
                            {todo.text}
                        </li>
                     )})}
                </ul> */}
                <ul>
                    {this.props.todos.map(todo =>
                        (
                            <li key={todo.id}>
                                {todo.text}
                            </li>
                        ))}
                </ul>

                <input
                    type="text"
                    value={this.state.newTodoText}
                    onChange={(ev) => { this.setState({ newTodoText: ev.currentTarget.value }) }}
                />
                <button onClick={this.addNewTodo}>Novo Todo</button>
            </>
        );
    }
}

const mapStateToProps = state => ({
    todos: state.todos,
});

const mapDispatchToProps = dispatch => {
    return bindActionCreators(todoActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);