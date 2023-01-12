import { TodoCounter } from './components/TodoCounter';
import { TodoItem } from './components/TodoItem';
import { TodoList } from './components/TodoList';
import { TodoSearch } from './components/TodoSearch';
import { Modal } from './components/Modal';
import { TodoForm } from './components/TodoForm';
import { CreateTodoBtn } from './components/CreateTodoBtn';
import { Top } from './components/Top';
import { Filter } from './components/Filter';
import { Bottom } from './components/Bottom';
import { Header } from './components/Header';
import { useTodos } from './components/customHooks/useTodos';
import { ErrorMsg } from './components/ErrorMsg';
import { LoadingMsg } from './components/LoadingMsg';
import { CreateTodoMsg } from './components/CreateTodoMsg';


function App() {
  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    addTodo,
  } = useTodos()


  return (
    <>

      <div className='mainContainer'>
        <Header />
        <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />

        <TodoList
          error={error}
          loading={loading}
          searchedTodos={searchedTodos}
          onError={() => <ErrorMsg />}
          onLoading={() => <LoadingMsg />}
          onEmptyTodos={() => <CreateTodoMsg />}
          render={todo => (
            <TodoItem
              key={todo.text}
              text={todo.text}
              completed={todo.completed}
              onComplete={() => completeTodo(todo.text)}
              onDelete={() => deleteTodo(todo.text)}
            />
          )}
          counter={() => <TodoCounter totalTodos={totalTodos} completedTodos={completedTodos} />}
        />

        <Filter />
      </div>

      {!!openModal && (<Modal><TodoForm addTodo={addTodo} setOpenModal={setOpenModal} /></Modal>)}

      <CreateTodoBtn setOpenModal={setOpenModal} />
    </>
  )
}

export default App
