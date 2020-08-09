import React, { Component } from 'react';

import { connect } from 'react-redux';

class Counter extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <h2> Você tem {this.props.todos.length}</h2>
        )
    }

}

const mapStateToProps = state => ({
    todos: state.todos,
})

export default connect(mapStateToProps)(Counter);