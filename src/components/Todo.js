import React, { useState } from 'react'
import TodoForm from './TodoForm'
import { MdDeleteForever } from 'react-icons/md'
import { BiMessageSquareEdit } from 'react-icons/bi'

const Todo = ({ todos, completeTodo, removeTodo, updateTodo }) => {
	const [edit, setEdit] = useState({
		id: null,
		value: ''
	})
	const submitUpdate = value => {
		updateTodo(edit.id, value)
		setEdit({
			id: null,
			value: ''
		})
	}

	if (edit.id) {
		return <TodoForm edit={edit} onSubmit={submitUpdate} />
	}
	return (
		<div className="todo__list">
			{todos.map(todo =>
				<li className={todo.isComplete ? 'complete' : ' '} key={todo.id}>
					<span className="complete__text" key={todo.id} onClick={() => completeTodo(todo.id)}>
						{todo.text}
					</span>
					<span>
						<button onClick={() => setEdit({ id: todo.id, value: todo.text })} className="todo__linkBtn" ><span>update</span><BiMessageSquareEdit /></button>
						<button onClick={() => removeTodo(todo.id)} className="todo__linkBtn"><span>delete</span><MdDeleteForever /></button>
					</span>
				</li>
			)
			}
		</div >
	)
}

export default Todo
