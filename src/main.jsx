import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'

import App from './Components/App/App'
import HomePage from './Components/HomePage/HomePage'
import ChatPage from './Components/ChatPage/ChatPage'
import AboutPage from './Components/AboutPage/AboutPage'
import ContactPage from './Components/ContactPage/ContactPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <div> oopsie</div>,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: 'chat/',
        element: <ChatPage />,
      },
      {
        path: 'about/',
        element: <AboutPage />,
      },
      {
        path: 'contact/',
        element: <ContactPage />,
      }
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
