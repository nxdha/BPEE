import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup"
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    errorElement: <div>Something went wrong</div>,
  }, 
  {
    path: "/login",
    element: <Login/>,
    errorElement: <div>Something went wrong</div>,
  }, 
  {
    path: "/signup",
    element: <Signup/>,
    errorElement: <div>Something went wrong</div>,
  },  
]);


function App() {
  return (
    
    <div className="App">

    <RouterProvider router={router} />
    </div>
  );
}

export default App;
