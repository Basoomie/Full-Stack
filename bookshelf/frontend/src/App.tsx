import { createBrowserRouter, RouterProvider } from "react-router-dom"
import BookRoutes from "./routes/BookRoute"
import NotFound from "./pages/NotFound"


const router = createBrowserRouter([
  {
    path: '/',
    element: <h1>Hello World</h1>,
  },
  {
    path: 'books',
    children: BookRoutes
  },
  {
    path: "*",
    element: <NotFound />
  }
])

function App() {

  return (
    <main className="h-screen text-white bg-gradient-to-r from-slate-600 to-slate-800">
      <RouterProvider router={router} />
    </main>
  )
}

export default App
