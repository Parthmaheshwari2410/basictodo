
const initialState = {
    todos: [],
    filter: 'ALL',
    editingId: null
};
export function todoReducer(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case "ADD_TODO":
            return {
                ...state,
                todos: [...state.todos, { text: payload.text, completed: false },],
            };

        case "DELETE_TODO":
            return { ...state, todos: state.todos.filter((todo) => todo.id !== payload.id), editingId: state.editingId === payload.id ? null : state.editingId, };

        case "TOGGLE_TODO":
            return { ...state, todos: state.todos.map((todo) => todo.id === payload.id ? { ...todo, completed: !todo.completed } : todo), };

        case "EDIT_TODO":
            return {
                ...state,
                todos: state.todos.map((todo) =>
                    todo.id === payload.id ? { ...todo, text: payload.text } : todo
                ),
                editingId: null,
            };

        case "SET_FILTER":
            return { ...state, filter: payload.filter };

        case "SET_EDITING":
            return { ...state, editingId: payload.id };

        case "CANCEL_EDIT":
            return { ...state, editingId: null };

        default:
            return state;
    }
}