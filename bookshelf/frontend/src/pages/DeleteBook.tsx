import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { MdOutlineKeyboardBackspace } from "react-icons/md";

type Book = {
  title: string,
  author: string,
  publishYear: number,
  _id: number
}

export default function DeleteBook() {
  const {id} = useParams()
  const navigate = useNavigate()
  const [book, setBook] = useState<Book>()

  function deleteBook() {
    axios.delete(`http://localhost:3000/books/delete/${id}`)
    .then(res => {
      navigate("/books", {replace: true, state: {book: book, message: res.data}})
    })
    .catch(err => {
      console.log(err)
    })
  }

  function getBookInfo() {
    axios.get(`http://localhost:3000/books/${id}`)
    .then(res => {
      setBook(res.data)
    })
    .catch(err => {
      console.log(err)
    })
  }

  useEffect(() => {
    getBookInfo()
  })

  return (
    <div className='h-screen'>
      <button onClick={() => {
        navigate("/books", {replace: true, state: {book: book, message: "Deletion Canceled"}})
      }} className='text-4xl p-4 hover:text-blue-300 duration-200'><MdOutlineKeyboardBackspace /></button>
      <div className='flex flex-col justify-center'>
        <div className='flex flex-col gap-12 border-4 rounded-lg border-slate-400 mx-auto px-28 py-16'>
          <h1 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl'>Confirm Book Deletion?</h1>
          <button onClick={deleteBook} className='uppercase text-md sm:text-lg md:text-xl lg:text-2xl border-2 rounded-md border-red-900 bg-red-700 hover:bg-red-900 hover:text-gray-200 duration-200 mx-auto py-3 px-6 mt-6'>Delete</button>
        </div>
      </div>
    </div>
  )
}
