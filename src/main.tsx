import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { createBrowserRouter, Navigate, RouterProvider, type RouteObject } from 'react-router-dom'
import { Container } from "react-bootstrap";


import App from './App.tsx'
import New from './pages/New.tsx'
import NotList from './pages/NotList.tsx'


// import { BrowserRouter } from 'react-router-dom'

const routers: RouteObject[] = [
  { path: '/', element: <App />, },
  { path: '/note', element: <NotList />, },
  { path: 'new', element: <New />, },
  { path: '*', element: <Navigate to='/' /> }

]

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Container>
    <RouterProvider router={createBrowserRouter(routers)} />
    </Container>
  </StrictMode>,
)
