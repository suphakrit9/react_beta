import React from "react"
import { Todo } from "./type"
import TodoItem from "./TodoItem"

type TodoListProps = {
    todos: Todo[]
}

const TodoList: React.FC<TodoListProps> = (props) => {
    const todoItems: JSX.Element[] = []
    for (const todo of props.todos) {
        const item =<TodoItem todo={todo}></TodoItem>
        todoItems.push(item)
    }
    return (
        <div>
            {todoItems}
        </div>
    )
}

export default TodoList