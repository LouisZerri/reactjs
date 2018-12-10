import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const TodoItem = (props) => <li>{props.description}</li>

class TodoApp extends Component {
	render() {
    	return (
      		<div>
      			<ul>
              <TodoItem description="Aller à la plage" />
      				<TodoItem description="Faire des courses" />
							<TodoItem description="Ranger les courses" />
							<TodoItem description="Faire la cuisine" />
							<TodoItem description="Ranger la cuisine" />
      			</ul>
      		</div>
    	);
  	}
}

export default TodoApp;
		