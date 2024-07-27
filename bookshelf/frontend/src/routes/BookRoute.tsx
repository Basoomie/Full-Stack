import BookList from '../pages/BookList'
import AddBook from "../pages/AddBook"
import UpdateBook from "../pages/UpdateBook"
import DeleteBook from "../pages/DeleteBook"
import BookDetails from "../pages/BookDetails"


const BookRoutes = 
  {
    path: "/",
    element: <BookList />,
    children: [
      {
        path: "create",
        element: <AddBook />
      },
      {
        path: "update/:id",
        element: <UpdateBook />
      },
      {
        path: "delete/:id",
        element: <DeleteBook />
      },
      {
        path: ":id",
        element: <BookDetails />
      }
    ]
  }


export default BookRoutes