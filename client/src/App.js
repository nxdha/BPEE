import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup"
import Mvt from "./pages/Mvt";
import View from "./pages/Viewticket"
import Book from "./pages/Ticketbook"
import Timing from "./pages/Timings"
import Payment from "./pages/Payment"
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
  {
    path: "/mvt",
    element: <Mvt/>,
    errorElement: <div>Something went wrong</div>,
  },   
  {
    path: "/view",
    element: <View/>,
    errorElement: <div>Something went wrong</div>,
  }, 
  {
    path: "/book",
    element: <Book/>,
    errorElement: <div>Something went wrong</div>,
  }, 
  {
    path: "/timing",
    element: <Timing/>,
    errorElement: <div>Something went wrong</div>,
  }, 
  // {
  //   path: "/payment",
  //   element: <Payment/>,
  //   errorElement: <div>Something went wrong</div>,
  // }, 
]);


function App() {
  return (
    
    <div className="App">

    <RouterProvider router={router} />
    </div>
  );
}

export default App;
