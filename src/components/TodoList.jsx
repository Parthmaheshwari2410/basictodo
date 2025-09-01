import React from 'react';
import { useSelector } from 'react-redux';
import { EditTodo } from './EditTodo.jsx';

export function TodoList() {
    const { todos, filter } = useSelector(state => state);
    const getFilteredTodos = () => {
        switch (filter) {
            case 'ALL': return todos;
            case 'ACTIVE': return todos.filter(todo => !todo.completed);
            case 'COMPLETED': return todos.filter(todo => todo.completed);
            default: return todos;
        }
    };
    const filteredTodos = getFilteredTodos();
    if (filteredTodos.length === 0) {
        return (
            <div className="text-center p-10 text-gray-500 dark:text-gray-400">😐</div>
        );
    }
    return (
        <div >
            {filteredTodos.map(todo => (
                <EditTodo key={todo.id} todo={todo} />
            ))}
        </div>
    );
}