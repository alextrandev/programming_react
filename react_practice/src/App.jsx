import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Root from './components/Root';
import About from './pages/About';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import Person from './pages/Person';

export default function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      children: [
        { path: '/', element: <Home /> },
        { path: '/dashboard', element: <Dashboard /> },
        { path: '/person', element: <Person /> },
        { path: '/about', element: <About /> },
      ]
    },
  ])

  return <RouterProvider router={router} />;
}
