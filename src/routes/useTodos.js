import React from 'react'
import { useLocalStorage } from './useLocalStorage';

function useTodos() {

    const {
        item: todos,
        saveItem: saveTodos,
        sincronizeItem: sincronizeTodos,
        loading,
        error,
    } = useLocalStorage('Todo_v2', []);
    const [searchValue, setSearchValue] = React.useState('');
    const [openModal, setOpenModal] = React.useState(false);

    // counter
    // aca se le asigna a completedTodos, la cantidad ya completados.
    const completedTodos = todos.filter(todo => !!todo.completed).length;
    const totalTodos = todos.length;
    // search
    const searchedTodos = todos.filter(
        (todo) => {
            const todoText = todo.text.toLowerCase();
            const todoTextSearch = searchValue.toLowerCase();
            return todoText.includes(todoTextSearch);
        });

    const addTodo = (text) => {
        const id = newTodoId()
        const newTodos = [...todos];
        newTodos.push({
            text: text,
            completed: false,
            id,
        });
        saveTodos(newTodos)
    };

    const completeTodo = (id) => {
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex(
            (todo) => todo.id === id
        );
        newTodos[todoIndex].completed = true;
        saveTodos(newTodos);
    }

    const deleteTodo = (id) => {
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex(
            (todo) => todo.id === id
        );
        newTodos.splice(todoIndex, 1);
        saveTodos(newTodos);
    }

    const states = {
        loading,
        error,
        completedTodos, // Variables de estado que se envian a el componente APP.
        totalTodos,
        searchedTodos,
        searchValue,
        openModal,
    } 
    const updaterStates = {
        setSearchValue,
        completeTodo, // Actualizadores y funciones de estado
        deleteTodo,
        setOpenModal,
        addTodo,
        sincronizeTodos,
    }

    return { states, updaterStates }
}

function newTodoId() {
    return Date.now().toString(16);
}
export { useTodos };
