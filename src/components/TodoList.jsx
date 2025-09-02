import React from 'react';
import { useSelector } from 'react-redux';
import { EditTodo } from './EditTodo.jsx';

export function TodoList() {
    const todos = useSelector(state => state.todos);

    if (todos.length === 0) {
        return (
            <div className="text-center p-10 text-gray-500 dark:text-gray-400">☹️</div>
        );
    }
    return (
        <div>
            {todos.map(todo => (
                <EditTodo key={todo.id} todo={todo} />
            ))}
        </div>
    );
}