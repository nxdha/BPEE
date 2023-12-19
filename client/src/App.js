import "./App.css";
import Home from "./pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
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
