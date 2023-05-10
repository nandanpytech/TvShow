import './App.css'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { createBrowserRouter, Outlet } from "react-router-dom";
import NavBar from './components/NavBar';
import Home from './components/Home';
import ShowDetils from './components/ShowDetils';


function App() {
  return (
    <>
      <NavBar/>
      <Outlet/>
    </>
  )
}

export const route = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/show/:id",
        element: <ShowDetils />,
      },
    ],
  },
]);


export default App
