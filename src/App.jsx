import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomeView from './view/HomeView';
import PlaningView from './view/PlaningView';
import Pres from '../src/view/Pres';


function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element:<HomeView/>,
    },
    {
      path:"/Planing",
      element:<PlaningView/>,
    },
    {
      path:"/Pres",
      element:<Pres/>,
    },

  ]);

  return (
    <RouterProvider router={router}/>
  )
}

export default App
