import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import './index.css'
import Layout from './layout/Layout';
import Home from './pages/home/Home';
import ErrorMessage from './pages/errorMessage/ErrorMessage';
import FriendDetails from './pages/friendDetails/FriendDetails';




const router = createBrowserRouter([
  {
    path: "/",
    element:<Layout></Layout>,
    children : [
      {
        index:true,
        element:<Home></Home>
      },
      {
        path:"/friend/:userId",
        loader:()=>fetch(`/FriendsData.jsx`).then(res=>res.json()),
        element:<FriendDetails></FriendDetails>
      }
    ]
 
  },
  {
    path:"*",
    element:<ErrorMessage></ErrorMessage>
  },
 
]);
createRoot(document.getElementById('root')).render(

  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>,
)
