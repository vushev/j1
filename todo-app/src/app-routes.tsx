import { useRoutes } from 'react-router-dom';
import Home from './pages/Home';
import TodoForm from './components/Todo/TodoForm';
import TodoList from './components/Todo/TodoList';


const AppRoutes = () => {
    const routes = useRoutes([
        { path: '/', element: <Home /> },

        { path: '/add-todo', element: <TodoForm /> },

        { path: '/todos', element: <TodoList /> },
        
    ]);

    return routes;
}

export default AppRoutes;