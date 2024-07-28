import axios from 'axios'
import { useEffect, useState } from 'react'

import { IoMdAdd } from "react-icons/io";
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import BookTable from '../components/BookTable';
import Cards from '../components/Cards';

type Book = {
    title: string,
    author: string,
    publishYear: number,
    _id: number
}

export default function BookList() {
    const [books, setBooks] = useState<Book[]>([])
    const location = useLocation()
    const navigate = useNavigate()
    const [state, setState] = useState<{book: Book, message: string}>(location.state || {})
    const [displayList, setDisplayList] = useState<"table" | "card">("table")

    function getBooks() {
        axios.get("http://localhost:3000/books")
        .then(res => {
            setBooks(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }

    useEffect(() => {
        getBooks()
        navigate(".", {replace: true})

        setTimeout(() => {
            setState({book: {title: "", author: "", publishYear: 0, _id: 0}, message: ""})
        }, 3000)
    }, [navigate])

    return (
        <div className='flex flex-col gap-6'>
            {/* <button onClick={getBooks} className='mt-16 mb-16 mx-auto p-3 border-2 rounded-md hover:text-slate-200 hover:bg-slate-900 duration-200'>Refresh Books</button> */}
            <div className='flex justify-between gap-4 text-4xl mx-auto mt-16 w-3/5'>
                <h1>Book List</h1>
                <div className='flex gap-10 text-xl'>
                    <button onClick={() => {setDisplayList("table")}} className='bg-gray-400 hover:bg-blue-300 duration-300 px-4 rounded'>Table</button>
                    <button onClick={() => {setDisplayList("card")}} className='bg-gray-400 hover:bg-blue-300 duration-300 px-4 rounded'>Card</button>
                </div>
                <NavLink to={"create"} className="border-2 p-1 border-gray-400 hover:border-green-400 hover:text-green-400 hover:text-3xl duration-300"><IoMdAdd /></NavLink>
            </div>

            {displayList == "table" ? <BookTable books={books} /> : <Cards books={books} />}
            
            <h4 className='text-sm text-center mt-10'>{state.book?.title} {state.message}</h4>
        </div>
    )
}
