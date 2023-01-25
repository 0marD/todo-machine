import { HashRouter, Route, Routes } from 'react-router-dom';
import { HomePage } from './routes/HomePage';
import { NewTodoPage } from './routes/NewTodoPage';
import { EditTodoPage } from './routes/EditTodoPage';
import { NotFoundPage } from './routes/NotFoundPage';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/new' element={<NewTodoPage />} />
        <Route path='/edit/:id' element={<EditTodoPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
