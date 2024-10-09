import { TodoForm } from '../../ui/TodoForm/TodoForm'
import { useTodos } from '../useTodos'

function NewPage() {

    const {updaterStates} = useTodos()
    const {addTodo} = updaterStates
    return (
        <>
            <TodoForm 
            label="Escribe tu nuevo TODO" 
            submitText="Añadir"
            submitEvent={(newTextValue) => addTodo(newTextValue)} />
        </>
    )
}

export {NewPage}