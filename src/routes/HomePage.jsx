import { Top } from '../components/Top';
import { useNavigate, useParams } from 'react-router-dom';
// import { Modal } from '../components/Modal';
import { Bottom } from '../components/Bottom';
import { Header } from '../components/Header';
import { TodoList } from '../components/TodoList';
import { ErrorMsg } from '../components/ErrorMsg';
import { TodoItem } from '../components/TodoItem';
import { TodoForm } from '../components/TodoForm';
import { TodoSearch } from '../components/TodoSearch';
import { LoadingMsg } from '../components/LoadingMsg';
import { TodoCounter } from '../components/TodoCounter';
import { NoResultsMsg } from '../components/NoResultsMsg';
import { CreateTodoBtn } from '../components/CreateTodoBtn';
import { CreateTodoMsg } from '../components/CreateTodoMsg';
import { useTodos } from '../Hooks/useTodos';
import { ChangeAlert } from '../components/ChangeAlert';

function HomePage(props) {
  const navigate = useNavigate();
  const { state, stateUpdaters } = useTodos();

  const {
    error,
    loading,
    searchedTodos,
    totalTodos,
    completedTodos,
    searchValue,
  } = state;

  const { deleteTodo, setSearchValue, completeTodo, sincronizeTodos } =
    stateUpdaters;

  // const { searchValue } = useParams();

  return (
    <div className='Home'>
      <Top />
      <Bottom />

      <div className='mainContainer'>
        <Header />

        <TodoSearch
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          loading={loading}
          searchedTodos={searchedTodos}
        />

        <TodoList
          error={error}
          loading={loading}
          searchedTodos={searchedTodos}
          totalTodos={totalTodos}
          onError={() => <ErrorMsg />}
          onLoading={() => <LoadingMsg />}
          onEmptyTodos={() => <CreateTodoMsg />}
          onNoResults={() => <NoResultsMsg searchText={searchValue} />}
          render={(todo) => (
            <TodoItem
              key={todo.id}
              text={todo.text}
              completed={todo.completed}
              onEdit={() => navigate('/edit/' + todo.id)}
              onComplete={() => completeTodo(todo.id)}
              onDelete={() => deleteTodo(todo.id)}
            />
          )}
          counter={() => (
            <TodoCounter
              totalTodos={totalTodos}
              completedTodos={completedTodos}
            />
          )}
        >
          {/* <TodoCounter totalTodos={totalTodos} completedTodos={completedTodos} /> */}
        </TodoList>
        {/* <Filter /> */}
      </div>

      {/* {!!openModal && (
        <Modal>
          <TodoForm addTodo={addTodo} setOpenModal={setOpenModal} />
        </Modal>
      )} */}
      <ChangeAlert sincronize={sincronizeTodos} />
      <CreateTodoBtn onClick={() => navigate('/new')} />
      {/* <CreateTodoBtn setOpenModal={setOpenModal} /> */}
    </div>
  );
}

export { HomePage };
