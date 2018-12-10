import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const TodoItem = (props) => <li>{props.description}</li>

let todoList = ["Aller à la plage",
				"Faire des courses",
				"Ranger les courses",
				"Faire la cuisine",
				"Ranger la cuisine"]

class TodoApp extends Component {
	
	render() {
    	return (
      		<div>
      			<ul>
              		{todoList.map(element => <TodoItem description={element}/>)}
      			</ul>
      		</div>
    	);
  	}
}

export default TodoApp;
		