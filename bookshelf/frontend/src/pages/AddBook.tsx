import { useState } from "react"
import { useNavigate } from "react-router-dom"

type Book = {
  title: string,
  author: string,
  publishYear: number,
  _id: number
}

export default function AddBook() {
  const navigate = useNavigate()
  const [message, setMessgae] = useState<string>("Test")
  const [book, setBook] = useState<Book>()

  return (
    <div>AddBook</div>
  )
}
