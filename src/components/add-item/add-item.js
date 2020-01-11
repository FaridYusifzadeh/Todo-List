import React, { Component } from 'react';
import './add-item.css';

export default class AddItem extends Component {
  constructor() {
    super();

    this.state = {
      label: ''
    };
  }

  onLabelChange = e => {
    this.setState({ label: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.ItemAdd(this.state.label);
    this.setState({ label: '' });
  };
  render() {
    return (
      <form className='add-item d-flex' onSubmit={this.onSubmit}>
        <input
          type='text'
          className='form-control'
          onChange={this.onLabelChange}
          placeholder=' Add New Task'
          value={this.state.label}
        />
        <button className='btn btn-outline-primary'>Add Task</button>
      </form>
    );
  }
}
