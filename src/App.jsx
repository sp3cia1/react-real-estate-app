import Layout from './routes/layout/layout.jsx';
import HomePage from './routes/homePage/homePage.jsx';
import ListPage from './routes/listPage/listPage.jsx';
import SinglePage from './routes/singlePage/singlePage.jsx';
import ProfilePage from './routes/profilePage/profilePage.jsx';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children:[
        {
          path:"/",
          element:<HomePage/>
        },
        {
          path:"/list",
          element:<ListPage/>
        },
        {
          path:"/:id",
          element:<SinglePage/>
        },
        {
          path:"/profile",
          element:<ProfilePage/>
        },
        // {
        //   path:"/login",
        //   element:<Login/>
        // },
        // {
        //   path:"/register",
        //   element:<Register/>
        // }
      ]
    }
  ]);


  return ( 
    <RouterProvider router={router}/>
  )
}

export default App