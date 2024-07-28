import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { MdOutlineKeyboardBackspace } from "react-icons/md";

type Book = {
    title: string,
    author: string,
    publishYear: number,
    _id: number
}

export default function BookDetails() {
    const {id} = useParams()
    const navigate = useNavigate()
    const [book, setBook] = useState<Book>()

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
        <div className="h-screen">
            <button onClick={() => {
                navigate("/books")
            }} className='text-4xl p-4 hover:text-blue-300 duration-200'><MdOutlineKeyboardBackspace /></button>

            <div className="flex flex-col h-[calc(70vh)] gap-4 items-center justify-center">
                    <h1 className="text-8xl">{book?.title}</h1>
                    <div className="flex gap-8 items-end">
                        <h2 className="text-4xl text-gray-400">{book?.author}</h2>
                        <h2 className="text-lg">{book?.publishYear}</h2>
                    </div>
            </div>
        </div>
    )
}