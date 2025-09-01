import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from './context/ThemeContext.jsx';
import { TodoData } from './components/TodoData.jsx';
import { TodoList } from './components/TodoList.jsx';
import { ThemeSwitcher } from './context/ThemeSwitcher.jsx';
import { store } from './redux/store.js';
import { TodoFilter } from './components/TodoFilter.jsx';


function App() {
  return (
    <ThemeProvider>
      <Provider store={store}>
        <div className="min-h-screen bg-gradient-to-br text-white bg-black py-8 transition-colors duration-300">
          <ThemeSwitcher />
          <div className="max-w-2xl mx-auto px-4">
            <h1 className="text-4xl font-bold text-center mb-8 text-gray-800 dark:text-white"> ---- Todo App ----  </h1>
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg  p-8 transition-colors duration-300">
              <TodoData />
              <TodoFilter />
              <TodoList />
            </div>
          </div>
        </div>
      </Provider>
    </ThemeProvider>
  );
}
export default App; 