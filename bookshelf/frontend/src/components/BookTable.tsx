import { FaTrash, FaEdit, FaInfoCircle } from "react-icons/fa";
import { NavLink } from "react-router-dom";

type Book = {
    title: string,
    author: string,
    publishYear: number,
    _id: number
}

type BookTableProps = {
    books: Book[]
}

export default function BookTable(props: BookTableProps) {
    const {books} = props

    return (
        <div>
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
                                        {<NavLink to={`${book._id}`} className="hover:text-gray-300 duration-200"><FaInfoCircle /></NavLink>}
                                        {<NavLink to={`update/${book._id}`} className="hover:text-gray-300 duration-200" ><FaEdit /></NavLink>}
                                        {<NavLink to={`delete/${book._id}`} className="hover:text-gray-300 duration-200" ><FaTrash /></NavLink>}
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
