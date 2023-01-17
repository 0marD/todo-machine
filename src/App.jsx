import { Top } from './components/Top';
import { Filter } from './components/Filter';
import { Modal } from './components/Modal';
import { Bottom } from './components/Bottom';
import { Header } from './components/Header';
import { TodoList } from './components/TodoList';
import { ErrorMsg } from './components/ErrorMsg';
import { TodoItem } from './components/TodoItem';
import { TodoForm } from './components/TodoForm';
import { TodoSearch } from './components/TodoSearch';
import { LoadingMsg } from './components/LoadingMsg';
import { TodoCounter } from './components/TodoCounter';
import { NoResultsMsg } from './components/NoResultsMsg';
import { CreateTodoBtn } from './components/CreateTodoBtn';
import { CreateTodoMsg } from './components/CreateTodoMsg';
import { useTodos } from './customHooks/useTodos'
import { ChangeAlert } from './components/ChangeAlert';


function App(props) {
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
    sincronizeTodos,
  } = useTodos()


  return (
    <div className="App">
      <Top />
      <Bottom />

      <div className='mainContainer'>
        <Header />

        <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} loading={loading} />

        <TodoList
          error={error}
          loading={loading}
          searchedTodos={searchedTodos}
          totalTodos={totalTodos}
          onError={() => <ErrorMsg />}
          onLoading={() => <LoadingMsg />}
          onEmptyTodos={() => <CreateTodoMsg />}
          onNoResults={() => <NoResultsMsg searchText={searchValue} />}
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
        >
          {/* <TodoCounter totalTodos={totalTodos} completedTodos={completedTodos} /> */}
        </TodoList>
        <Filter />
      </div>


      {!!openModal && (<Modal><TodoForm addTodo={addTodo} setOpenModal={setOpenModal} /></Modal>)}
      <ChangeAlert sincronize={sincronizeTodos} />
      <CreateTodoBtn setOpenModal={setOpenModal} />
    </div>
  )
}

export default App
