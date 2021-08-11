import React, { useState } from 'react'
import Todo from './components/Todo';
import TodoForm from './components/TodoForm';

const AppTodo = () => {

	const [todos, setTodos] = useState([])

	const addTodo = todo => {
		if (!todo.text.length === 0) {
			return;
		}
		const newTodos = [todo, ...todos]
		setTodos(newTodos)
	}
	const removeTodo = id => {
		const removeArr = [...todos].filter(todo => todo.id !== id)
		setTodos(removeArr)
	}
	let removeCompleted = () => {
		const removeArr = todos.filter(todo => !todo.isComplete);
		setTodos(removeArr)
	}
	const updateTodo = (todoId, newValue) => {
		if (!newValue.text.length === 0) {
			return;
		}
		setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)))
	}
	const completeTodo = id => {
		let updateTodos = todos.map(todo => {
			if (todo.id === id) {
				todo.isComplete = !todo.isComplete
			}
			return todo
		})
		setTodos(updateTodos)
	}
	const filterIsCompleted = todos.filter(item => item.isComplete === true).length

	return (
		<main className="wrapper">
			<div className="todo">
				<h1 className="todo__title">Left to complete {!todos.length ? null : todos.length}</h1>
				<TodoForm onSubmit={addTodo} />
				<div className="todo__completed completed">
					<h2 className="completed__fulfilled">Completed {!filterIsCompleted ? null : filterIsCompleted}</h2>
					<button className="completed__btn" onClick={() => removeCompleted()} >Clear completed</button>
				</div>
				<Todo todos={todos} removeTodo={removeTodo} updateTodo={updateTodo} completeTodo={completeTodo} />
			</ div>
		</main>
	);
}

export default AppTodo;
