import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../redux/action';


export function TodoFilter() {
    const dispatch = useDispatch();
    const currentFilter = useSelector(state => state.filter);
    const filters = ['All', 'Active', 'Completed'];

    const handleFilterClick = (filter) => {
        dispatch(setFilter(filter));
    };

    return (
        <div className="flex gap-2 mb-6">
            {filters.map(filter => (
                <button
                    key={filter}
                    className={`px-4 py-2 border-2 border-blue-400 dark:border-blue-500 text-amber-50 rounded-full transition-all`}
                    onClick={() => handleFilterClick(filter)}
                >
                    {filter}
                </button>
            ))}
        </div>
    );
}