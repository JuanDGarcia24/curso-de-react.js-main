import { TodoForm } from '../../ui/TodoForm/TodoForm'
import { useTodos } from '../useTodos'
import { useParams } from 'react-router-dom';

function EditPage() {

    const {updaterStates} = useTodos()
    const {editTodo} = updaterStates;
    const {id} = useParams();
    return (
        <>
            <TodoForm 
            label="Editar TODO" 
            submitText="Editar"
            submitEvent={(newTodoValue) => editTodo(id, newTodoValue)} />
        </>
    )
}

export {EditPage}