import { useTodos } from './useTodos'
import { TodoHeader } from '../TodoHeader';
import { TodoCounter } from '../TodoCounter/TodoCounter';
import { TodoSearch } from '../TodoSearch/TodoSearch';
import { TodoList } from '../TodoList/TodoList';
import { TodoItem } from '../TodoItem/TodoItem';
import { TodosLoading } from '../TodosLoading/TodosLoading';
import { TodosError } from '../TodosError/TodosError';
import { TodosEmpty } from '../TodosEmpty/TodosEmpty';
import { CreateTodoButton } from '../CreateButton/CreateTodoButton';
import { Modal } from '../Modal/Modal';
import { TodoForm } from '../TodoForm/TodoForm';
import {ChangeAlertWithStorageListener} from '../ChangeAlert'

function App() {

  const {states, updaterStates} = useTodos()
  const {
    loading,
    error,
    searchedTodos,
    openModal,
    searchValue, 
    completedTodos,
    totalTodos,
  } = states;

  const {
    completeTodo,
    deleteTodo,
    setOpenModal,
    addTodo,
    setSearchValue,
    sincronizeTodos
  } = updaterStates;
  return (
    <>
      <TodoHeader loading={loading}>
        <TodoCounter
          totalTodos={totalTodos}
          completedTodos={completedTodos}
        />
        <TodoSearch
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
      </TodoHeader>
      
      <TodoList
        error={error}
        loading={loading}
        searchedTodos={searchedTodos}
        searchText={searchValue}
        totalTodos={totalTodos}
        onError={() => <TodosError />}
        onLoading={() => <TodosLoading />}
        onEmptyTodos={() => <TodosEmpty />}
        onEmptySearchResults={() => <p> No hay resultados para {searchValue}</p>}
        // Render Function

        render={todo => (
          <TodoItem
              key={todo.text}
              text={todo.text}
              completed={todo.completed}
              onComplete={() => completeTodo(todo.text)}
              onDelete={() => deleteTodo(todo.text)}
            />
          )}>
      </TodoList>

      <CreateTodoButton setOpenModal={setOpenModal} />
      <ChangeAlertWithStorageListener sincronize={sincronizeTodos}/>
      {openModal &&
        <Modal>
          <TodoForm
            addTodo={addTodo}
            setOpenModal={setOpenModal}
          />
        </Modal>
      }
     
    </>
  );
}

export default App;
