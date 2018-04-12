import React, {Component} from 'react'
import API from '../api/todoApi';
import '../assets/css/bootstrap.min.css';

export default class TodoList extends Component{
	constructor(){
			super();
			this.state ={
					todos: []
			}
	}
	
	componentDidMount(){
			API
				.filter()
				.then(todos => this.setState({todos}))
	}
	saveTodo(todo){
			API
				.save(todo)
				.then(todo => this.setState({todos: [...this.state.todos, todo]}))
	}
	
	render(){
		return (
			<div className='container'>
				<div>
					<TodoForm saveTodo={this.saveTodo.bind(this)}/> 
				</div>
				<div>
					{this.state.todos.map( todo => (<Todo  todo={todo} />))}
				</div>
			</div>
		);
	}
}

class TodoForm extends Component{

	saveTodo(event){
			event.preventDefault();
			this.props.saveTodo({description: this.description.value})
			this.description.value = ''
	}

	render(){
			return(
				<form onSubmit={this.saveTodo.bind(this)}>
						<label for='description-todo'> Criar tarefa </label>
						<input id='description-todo' placeholder='Digite a descrição da tarefa' className='form-control' ref={ element=> this.description = element} />
						<button className='btn btn-default' type='submit' > Criar </button>
				</form>
			)
	}
}

class Todo extends Component{

	toggleStatus(){
		this.props.toogleStatus();
	}
	render(){
		const {todo} = this.props;
		return (
			<div>
				<input type='checkbox'  onClick={this.toggleStatus.bind(this)} checked={ todo.done } />
				<strong>{ todo.description } </strong>
			</div>
		)
	}
}