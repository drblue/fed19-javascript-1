import React from "react";
import AddTodo from './AddTodo';
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
		<div className="todos">
			<ul className="todo-list">
				{todoItems}
			</ul>

			<AddTodo
				onAddTodo={props.onTodoItemAdd}
			/>
		</div>
	)
}

export default TodoList
