import React from "react";
import TodoItem from "./TodoItem";

const TodoList = (props) => {

	const todoItems = props.todos.map(todoItem => {
		return (
			<TodoItem
				todo={todoItem}
				key={todoItem.id}
				onDelete={props.onTodoItemDelete}
				onToggle={props.onTodoItemToggle}
			/>
		)
	})

	return (
		<ul className="todo-list">
			{todoItems}
		</ul>
	)
}

export default TodoList
