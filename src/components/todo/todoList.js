import React, { Component } from 'react';

class TodoList extends Component {
  render() {
    return (
      <ul>
        {this.props.todo_data}
      </ul>
    )

  }
}

export default TodoList;
