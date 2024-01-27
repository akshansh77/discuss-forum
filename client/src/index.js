import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import LandingPage from './pages/LandingPage';
import CreateAccountPage from './pages/CreateAccount/CreateAccountPage';
import CountiunePage from './components/Continue_page';
import SussefullPage from './components/SussefullPage';
import Layout from './components/Layout/Layout';
import Home from './pages/Home/Home';
import AllPost from './components/AllPost/AllPost';
import CommentedPost from './components/CommentedPost';
import RepliedPost from './components/RepliedPost';
import Test from './components/Test';
import CreatePost from './pages/CreatePost/CreatePost';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout><LandingPage/></Layout>,
  },
  {
    path: "/create-account",
    element: <Layout>
      <CreateAccountPage/>
      </Layout>
  },
  {
    path: "/continue-page",
    element: <Layout><CountiunePage/></Layout>,
  },
  {
    path: "/successful-page",
    element: <Layout><SussefullPage/></Layout>,
  },
  {
    path: "/home",
    element: <Layout><Home/></Layout>,
    children: [
      {
        path:"allpost",
        element:<AllPost/>,
        
      },

      {
        path:"allpost/:postid",
        element:<Test/>
      }
      ,
      {
        path:"commentpost",
        element:<CommentedPost/>,
        children:[
          {
            path:":postid",
            element:<div>
              post:
            </div>
          }
        ]

      }
      ,
      {
        path:"replypost/",
        element:<RepliedPost/>,
        children:[
          {
            path:":postid",
            element:<div>
              post:
            </div>
          }
        ]
      },

      {
        path:"createpost/",
        element:<CreatePost/>,
        
      }
      
    ]
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);





// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
