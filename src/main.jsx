import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import './index.css'
import Layout from './layout/Layout';
import Home from './pages/home/Home';
import ErrorMessage from './pages/errorMessage/ErrorMessage';
import FriendDetails from './pages/friendDetails/FriendDetails';
import ContextData from './contextData/ContextData';
import TimeLine from './pages/timeLine/TimeLine';
import { ToastContainer } from 'react-toastify';
import Stats from './pages/stats/Stats';




const router = createBrowserRouter([
  {
    path: "/",
    element:<Layout></Layout>,
    children : [
      {
        index:true,
        element: <Home> </Home>
      },
      {
        
        path:"/friend/:userId",
        loader:()=>fetch(`/FriendsData.json`).then(res=>res.json()),
        element:<FriendDetails></FriendDetails>
      },
      {
        path:"/timeLine",
        element:<TimeLine></TimeLine>
      },
      {
        path:"/stats",
        element:<Stats></Stats>
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
     <ContextData> 
      <RouterProvider router={router} />
      <ToastContainer />
     </ContextData>
  </StrictMode>,

)
