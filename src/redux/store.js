import { createStore } from 'redux';
import { todoReducer } from './todoSlice';

export const store = createStore(todoReducer);