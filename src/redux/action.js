export const ActionTypes = {
    ADD_TODO: 'ADD_TODO',
    DELETE_TODO: 'DELETE_TODO',
    TOGGLE_TODO: 'TOGGLE_TODO',
    EDIT_TODO: 'EDIT_TODO',
    SET_EDITING: 'SET_EDITING',
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
export const setEditing = (id) => ({
    type: ActionTypes.SET_EDITING,
    payload: { id }
});

