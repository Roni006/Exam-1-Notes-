import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
// import Navbar from "./components/menubar"
import Rootlayouts from "./RootLayouts/Rootlayouts"

import Home from "./pages/Home"
import TaskView from "./pages/TaskView"
import Contact from "./pages/Contact"
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route element={<Rootlayouts/>}>
          <Route path="/" element={<Home/>} />
          <Route path="/taskview" element={<TaskView/>} />
          <Route path="/contact" element={<Contact/>} />
        </Route>
      </Route>
    )
  )
  
  return (
    <>
    
    <RouterProvider router={router}/>
    </>
  )
}

export default App
