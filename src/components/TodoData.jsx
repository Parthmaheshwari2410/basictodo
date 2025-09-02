import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/action';


export function TodoData() {
    const dispatch = useDispatch();
    const [inputText, setInputText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const text = inputText.trim();
        if (text) {
            dispatch(addTodo(text));
            setInputText('');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="mb-8">
            <div className="flex gap-4">
                <input type="text" value={inputText} onChange={(e) => setInputText(e.target.value)} placeholder="Type something......"
                    className="flex-1 p-4 border-2 border-blue-300  rounded-lg text-base bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:border-blue-500 dark:focus:border-blue-400 transition-colors"
                />
                <button type="submit" className="px-6 py-4 bg-blue-300 dark:bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-600 dark:hover:bg-blue-300 hover:-translate-y-1 transition-all">Add Todo </button>
            </div>
        </form>
    );
}