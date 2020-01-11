import React, { Component } from 'react';
import './add-item.css';

export default class AddItem extends Component {
  render() {
    return (
      <div className='add-item'>
        <button
          className='btn btn-outline-primary'
          onClick={() => this.props.ItemAdd('hello world')}
        >
          Add Item
        </button>
      </div>
    );
  }
}
