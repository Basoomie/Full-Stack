import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import NewBookInput from "../components/NewBookInput";


export default function AddBook() {
  const navigate = useNavigate()
  const [title, setTitle] = useState<string>("")
  const [author, setAuthor] = useState<string>("")
  const [publishYear, setPublishYear] = useState<number>(0)
  // const [book, setBook] = useState<Book>()

  function addBook() {

    axios.post("http://localhost:3000/books/create", {title, author, publishYear})
    .then((res) => {
      navigate("/books", {replace: true, state: {book: {title, author, publishYear}, message: res.data}})      
    })
    .catch(err => {
      console.log(err)
    })
  }

  return (
    <div className="h-screen">
      <button onClick={() => {
        navigate("/books")
      }} className='text-4xl p-4 hover:text-blue-300 duration-200'><MdOutlineKeyboardBackspace /></button>

      <div className="flex flex-col gap-4 items-center p-12 mx-auto">

        <NewBookInput title={title} setTitle={setTitle} author={author} setAuthor={setAuthor} publishYear={publishYear} setPublishYear={setPublishYear} />

        <button onClick={addBook} className='uppercase text-md sm:text-lg md:text-xl lg:text-2xl border-2 rounded-md border-green-900 bg-green-600 hover:bg-green-700 hover:text-gray-200 duration-200 mx-auto py-1 px-12 mt-12'>Add</button>
      </div>
    </div>
  )
}
