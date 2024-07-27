import { createBrowserRouter, RouterProvider } from "react-router-dom"
import BookRoutes from "./routes/BookRoute"


const router = createBrowserRouter([
  {
    path: '/',
    element: <h1>Hello World</h1>,
  },
  {
    path: 'books',
    children: [BookRoutes]
  }
])

function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
