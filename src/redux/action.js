export const ActionTypes = {
    ADD_TODO: 'ADD_TODO',
    DELETE_TODO: 'DELETE_TODO',
    TOGGLE_TODO: 'TOGGLE_TODO',
    EDIT_TODO: 'EDIT_TODO',
    SET_FILTER: 'SET_FILTER',
    SET_EDITING: 'SET_EDITING',
    CANCEL_EDIT: 'CANCEL_EDIT'
};

export const addTodo = (text) => ({
    type: ActionTypes.ADD_TODO,
    payload: { text }
});

export const deleteTodo = (id) => ({
    type: ActionTypes.DELETE_TODO,
    payload: { id }
});

export const toggleTodo = (id) => ({
    type: ActionTypes.TOGGLE_TODO,
    payload: { id }
});

export const editTodo = (id, text) => ({
    type: ActionTypes.EDIT_TODO,
    payload: { id, text }
});

export const setFilter = (filter) => ({
    type: ActionTypes.SET_FILTER,
    payload: { filter }
});

export const setEditing = (id) => ({
    type: ActionTypes.SET_EDITING,
    payload: { id }
});

export const cancelEdit = () => ({
    type: ActionTypes.CANCEL_EDIT
});