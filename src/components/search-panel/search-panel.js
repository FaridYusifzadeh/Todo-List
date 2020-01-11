import React, { Component } from 'react';

import './search-panel.css';

export default class SearchPanel extends Component {
  constructor() {
    super();
    this.state = {
      term: ''
    };
  }

  onSearcChange = e => {
    const term = e.target.value;
    this.setState({ term });
    this.props.onSearcChange(term)
  };

  render() {
    return (
      <input
        type='text'
        className='form-control search-input'
        placeholder='type to search'
        value={this.state.term}
        onChange={this.onSearcChange}
      />
    );
  }
}
