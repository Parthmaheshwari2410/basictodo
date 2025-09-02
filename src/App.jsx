import React from 'react';
import { Provider } from 'react-redux';
import { TodoData } from './components/TodoData.jsx';
import { TodoList } from './components/TodoList.jsx';
import { store } from './redux/store.js';

function App() {
  return (
    <Provider store={store}>
      <div className="min-h-screen  text-white bg-black transition-colors duration-300">
        <div className="max-w-2xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-8 text-gray-800 dark:text-white"> ---- Todo App ----  </h1>
          <div className="bg-white dark:bg-gray-800 rounded-xl p-8 transition-colors duration-300">
            <TodoData />
            <TodoList />
          </div>
        </div>
      </div>
    </Provider>
  )
}

export default App
