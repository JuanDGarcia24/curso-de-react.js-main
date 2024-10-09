import { useTodos } from '../useTodos'
import { useNavigate } from 'react-router-dom';
import { TodoHeader } from '../../ui/TodoHeader';
import { TodoCounter } from '../../ui/TodoCounter/TodoCounter';
import { TodoSearch } from '../../ui/TodoSearch/TodoSearch';
import { TodoList } from '../../ui/TodoList/TodoList';
import { TodoItem } from '../../ui/TodoItem/TodoItem';
import { TodosLoading } from '../../ui/TodosLoading/TodosLoading';
import { TodosError } from '../../ui/TodosError/TodosError';
import { TodosEmpty } from '../../ui/TodosEmpty/TodosEmpty';
import { CreateTodoButton } from '../../ui/CreateButton/CreateTodoButton';
import { Modal } from '../../ui/Modal/Modal';
import { TodoForm } from '../../ui/TodoForm/TodoForm';
import {ChangeAlertWithStorageListener} from '../../ui/ChangeAlert'

function HomePage() {

    const navigate  = useNavigate();
  const {states, updaterStates} = useTodos()
  const {
    loading,
    error,
    searchedTodos,
    // openModal,
    searchValue, 
    completedTodos,
    totalTodos,
  } = states;

  const {
    completeTodo,
    deleteTodo,
    // setOpenModal,
    //addTodo,
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
              key={todo.id}
              text={todo.text}
              completed={todo.completed}
              onEdit={() => navigate('/edit/' + todo.id)}
              onComplete={() => completeTodo(todo.id)}
              onDelete={() => deleteTodo(todo.id)}
            />
          )}>
      </TodoList>

      {/* {openModal &&
        <Modal>
          <TodoForm
            addTodo={addTodo}
            setOpenModal={setOpenModal}
          />
        </Modal>
      } */}
      <CreateTodoButton 
        onClick={() => navigate('/new')}
        // setOpenModal={setOpenModal} 
      />
      <ChangeAlertWithStorageListener sincronize={sincronizeTodos}/>
     
    </>
  );
}

export {HomePage};
