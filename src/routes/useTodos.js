import React from 'react'
import { useLocalStorage } from './useLocalStorage';

function useTodos() {

    const {
        item: todos,
        saveItem: saveTodos,
        sincronizeItem: sincronizeTodos,
        loading,
        error,
    } = useLocalStorage('Todo_v1', []);
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
        const newTodos = [...todos];
        newTodos.push({
            text: text,
            completed: false,
        });
        saveTodos(newTodos)
    };

    const completeTodo = (text) => {
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex(
            (todo) => todo.text === text
        );
        newTodos[todoIndex].completed = true;
        saveTodos(newTodos);
    }

    const deleteTodo = (text) => {
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex(
            (todo) => todo.text === text
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
export { useTodos };
