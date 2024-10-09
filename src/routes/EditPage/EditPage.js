import { TodoForm } from '../../ui/TodoForm/TodoForm'
import { useTodos } from '../useTodos'
import { useLocation, useParams } from 'react-router-dom';

function EditPage() {
    const location = useLocation()
    const {updaterStates, states} = useTodos()
    const {editTodo} = updaterStates;
    const { loading, getTodo} = states;
    const {id} = useParams();

    let todoText;
    
    console.log(location)
    if (location.state?.todo) {
        todoText = location.state.todo.text;
        console.log('if ',todoText);
        
    } else if (loading) {
        return <p>Cargando...</p>
    } else {
        const todo = getTodo(id)
        todoText = todo.text;
    }

    return (
        <>
            <TodoForm 
            label="Editar TODO" 
            defaultTodoText={todoText}
            submitText="Editar"
            submitEvent={(newTodoValue) => editTodo(id, newTodoValue)} />
        </>
    )
}

export {EditPage}