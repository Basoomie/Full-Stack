import axios from 'axios'
import { useEffect, useState } from 'react'
import { FaTrash, FaEdit, FaInfoCircle } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import AddBook from './AddBook';

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
            setState({})
        }, 3000)
    }, [navigate])

    return (
        <div className='flex flex-col gap-6'>
            {/* <button onClick={getBooks} className='mt-16 mb-16 mx-auto p-3 border-2 rounded-md hover:text-slate-200 hover:bg-slate-900 duration-200'>Refresh Books</button> */}
            <div className='flex justify-between text-4xl mx-auto mt-16 w-3/5'>
                <h1 className=''>Book List</h1>
                <NavLink to={"create"} className="border-2 p-1 border-gray-400 hover:border-green-400 hover:text-green-400 hover:text-3xl duration-300"><IoMdAdd /></NavLink>
            </div>
            <div className='grid w-3/5 mx-auto mt-2 overflow-x-auto relative'>
                <table className='text-sm sm:text-md text-left rtl:text-right text-gray-500 dark:text-gray-400'>
                    <thead className='text-xs uppercase bg-gray-900'>
                        <tr>
                            <th className='px-2 py-1'>Title</th>
                            <th>Author</th>
                            <th>Publish Year</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {books.map((book) => {
                            return (
                                <tr key={book._id} className='text-gray-200 border-b border-gray-700 odd:bg-gray-700 even:bg-gray-800 hover:bg-gray-500 duration-200'>
                                    <td className='px-2 py-3'>{book.title}</td>
                                    <td>{book.author}</td>
                                    <td>{book.publishYear}</td>
                                    <td className='flex gap-4 items-center align-middle'>
                                        {<NavLink to={`${book._id}`}><FaInfoCircle /></NavLink>}
                                        {<NavLink to={`update/${book._id}`} ><FaEdit /></NavLink>}
                                        {<NavLink to={`delete/${book._id}`} ><FaTrash /></NavLink>}
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
            
            <h4 className='text-sm text-center mt-10'>{state.book?.title} {state.message}</h4>
        </div>
    )
}
