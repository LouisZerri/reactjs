import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const TodoItem = (props) => <li>{props.description}</li>

class TodoApp extends Component {

	constructor(){
		super();
		this.state = {
			currentTodo : "",
			list : ["Aller à la plage", "Faire des courses", "Ranger les courses", "Faire la cuisine", "Ranger la cuisine"]
		}

		this.changeCurrentTodo = this.changeCurrentTodo.bind(this)
		this.addTodo = this.addTodo.bind(this)
	}

	addTodo()
	{
		//Ajouter au tableau this.state.list, le contenu du champ text
		let currentTodo = this.state.currentTodo
		this.state.list.push()
		this.setState({
			list : this.state.list.concat(currentTodo)
		})

	}

	changeCurrentTodo(event)
	{
		console.log(`Contenu du champ text : ${event.target.value}`)
		this.setState({
			currentTodo : event.target.value
		})
	}
	
	render() {
    	return (
      	<div>
				<input onChange={this.changeCurrentTodo} type="text" name="todoText" value={this.state.currentTodo}/>
				<input onClick={this.addTodo} type="submit" value="Add"/>
      		<ul>
            	{this.state.list.map(element => <TodoItem description={element}/>)}
      		</ul>
      	</div>
    	);
  	}
}

export default TodoApp;
		