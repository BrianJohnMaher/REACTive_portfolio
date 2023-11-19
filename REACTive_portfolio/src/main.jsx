import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Main from './components/Main.jsx'
import About from './components/pages/AboutMe.jsx'
import Portfolio from './components/pages/Portfolio.jsx'

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'



const router =  createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
        index: true,
        element: <Main />
      },
      {
        path: '/about', 
        element: <About />
      }, 
      {
        path: '/portfolio', 
        element: <Portfolio />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>,
)
