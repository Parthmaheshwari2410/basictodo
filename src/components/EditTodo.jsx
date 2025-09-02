import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTodo, editTodo, setEditing, toggleTodo } from '../redux/action';

export function EditTodo({ todo }) {
    const dispatch = useDispatch();
    const editingId = useSelector(state => state.editingId);
    const [editText, setEditText] = useState(todo.text);
    const isEditing = editingId === todo.id;

    const handleEdit = () => {
        dispatch(setEditing(todo.id));
        setEditText(todo.text);
    };

    const handleSave = () => {
        const trimmedText = editText.trim();
        if (trimmedText) {
            dispatch(editTodo(todo.id, trimmedText));
            dispatch(setEditing(null))
        } else {
            dispatch(setEditing(null));
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSave();
        }
    };

    return (
        <div className={`flex items-center gap-4 p-4 mb-3 rounded-lg transition-all  border-l-4 `}>
            <input type="checkbox" className="w-5 h-5 cursor-pointer accent-blue-500" checked={todo.completed} onChange={() => dispatch(toggleTodo(todo.id))}
            />

            {isEditing ? (
                <> <input type="text" className="flex-1 p-2 border-2 border-blue-400 dark:border-blue-500 rounded text-base bg-white dark:bg-gray-600 text-gray-900 dark:text-white" value={editText} onChange={(e) => setEditText(e.target.value)} onKeyDown={handleKeyPress} autoFocus
                />
                    <button className="px-3 py-2  text-white bg-amber-600 rounded text-xs font-bold hover:-translate-y-1 transition-transform"
                        onClick={handleSave} >Save</button> </>
            ) : (
                <><span className={`flex-1 text-base transition-all text-gray-900 dark:text-white ${todo.completed ? 'line-through text-gray-500 dark:text-gray-400' : ''
                    }`}> {todo.text}  </span>
                    <button className="px-3 py-2 bg-gray-400 dark:bg-gray-500 text-white text-xs font-bold hover:-translate-y-1 transition-transform" onClick={handleEdit}>Edit</button>
                    <button className="px-3 py-2 bg-red-500 dark:bg-red-600 text-white text-xs font-bold hover:-translate-y-1 transition-transform"
                        onClick={() => dispatch(deleteTodo(todo.id))}> Delete </button>
                </>
            )}
        </div>
    );
}