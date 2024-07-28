import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import NewBookInput from "../components/NewBookInput";

export default function UpdateBook() {
  const {id} = useParams()
  const navigate = useNavigate()
  const [title, setTitle] = useState<string>("")
  const [author, setAuthor] = useState<string>("")
  const [publishYear, setPublishYear] = useState<number>(0)

  function getBookInfo() {
      axios.get(`http://localhost:3000/books/${id}`)
      .then(res => {
        setTitle(res.data.title)
        setAuthor(res.data.author)
        setPublishYear(res.data.publishYear)
      })
      .catch(err => {
        console.log(err)
      })
  }

  useEffect(() => {
      getBookInfo()
  }, [])


  function updateBook() {
    axios.put(`http://localhost:3000/books/update/${id}`, {title, author, publishYear})
    .then((res) => {
      navigate("/books", {replace: true, state: {book: {title, author, publishYear}, message: res.data }})
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

        <button onClick={updateBook} className='uppercase text-md sm:text-lg md:text-xl lg:text-2xl border-2 rounded-md border-green-900 bg-green-600 hover:bg-green-700 hover:text-gray-200 duration-200 mx-auto py-1 px-12 mt-12'>Update</button>
      </div>
    </div>
  )
}
