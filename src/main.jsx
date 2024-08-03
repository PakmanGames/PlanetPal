import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'

import App from './Components/App/App'
import HomePage from './Components/HomePage/HomePage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <div> oopsie</div>,
    children: [
      {
        path: '/',
        element: <HomePage />
      },
      {
        path: 'chat/',
        element: <div>This is the chat</div>,
      },
      {
        path: 'about/',
        element: <div>This is the about page</div>
      },
      {
        path: 'contact/',
        element: <div>This is the contact page</div>
      }
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
