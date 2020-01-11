import React, { Component } from 'react';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';
import AddItem from '../add-item/';
import './app.css';

export default class App extends Component {
  maxId = 1;
  constructor() {
    super();

    this.state = {
      todoData: [
        this.createTodoItem('Drink Coffee'),
        this.createTodoItem('Make Awesome App'),
        this.createTodoItem('Have a lunch')
      ]
    };
  }

  createTodoItem(label) {
    return {
      label,
      important: false,
      done: false,
      id: this.maxId++
    };
  }
  deleteItem = id => {
    this.setState(({ todoData }) => {
      const index = todoData.findIndex(el => el.id === id);
      const newArray = [
        ...todoData.slice(0, index),
        ...todoData.slice(index + 1)
      ];

      return {
        todoData: newArray
      };
    });
  };

  onAddItem = text => {
    //generete id
    const newItem = this.createTodoItem(text);

    //add elemet in array

    this.setState(({ todoData }) => {
      const newArray = [...todoData, newItem];
      return {
        todoData: newArray
      };
    });
  };

  toggleProperty(arr, id, propName) {
    const index = arr.findIndex(el => el.id === id);
    const oldItem = arr[index];
    const newItem = { ...oldItem, [propName]: !oldItem[propName] };

    return [...arr.slice(0, index), newItem, ...arr.slice(index + 1)];
  }

  onToggleImportant = id => {
     this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProperty(todoData, id, 'important')
      };
    });
    console.log('onToggleImportant', id);
  };

  onToggleDone = id => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProperty(todoData, id, 'done')
      };
    });
     console.log('onToggleDone', id)
  };

  render() {
    const { todoData } = this.state;
    const doneCount = todoData.filter(el => el.done).length;
    const todoCount = todoData.length - doneCount;
    return (
      <div className='todo-app'>
        <AppHeader toDo={todoCount} done={doneCount} />
        <div className='top-panel d-flex'>
          <SearchPanel />
          <ItemStatusFilter />
        </div>
        <TodoList
          todos={todoData}
          onDeleted={this.deleteItem}
          onToggleImportant={this.onToggleImportant}
          onToggleDone={this.onToggleDone}
        />
        <AddItem ItemAdd={this.onAddItem} />
      </div>
    );
  }
}
