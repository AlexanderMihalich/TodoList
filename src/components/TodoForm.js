import React, { useState } from 'react'

const TodoForm = (props) => {

	const [text, setText] = useState("")

	const handleChange = (e) => {
		setText(e.target.value)
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		if (text.length === 0) {
			return;
		}
		props.onSubmit({
			id: Math.floor(Math.random() * 1000),
			text: text
		})
		setText('')
	}

	return (
		<form className="todo__form" onSubmit={handleSubmit}>
			<input type="text" placeholder="Write Todo" className="todo__input" onChange={handleChange} value={text} />
			<button className="todo__btn" >Add</button>
		</form>
	)
}

export default TodoForm
