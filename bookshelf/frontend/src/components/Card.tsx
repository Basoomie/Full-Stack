import { FaTrash, FaEdit, FaInfoCircle, FaBook} from "react-icons/fa";
import { IoPersonCircleOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";

type Book = {
    title: string,
    author: string,
    publishYear: number,
    _id: number
}

type CardProps = {
    book: Book
}

export default function Card(props: CardProps) {
    const {book} = props

    return (
        <div>
            <div className="flex flex-col gap-2 border-2 rounded-lg m-6 px-4 py-4 bg-slate-800 hover:bg-slate-900 overflow-auto">
                <div className="flex justify-between gap-2 pb-2">
                    <p className="text-gray-300">{book._id}</p>
                    <p className="">{book.publishYear}</p>
                </div>
                <div className="flex gap-2 items-center">
                    <FaBook />
                    <p>{book.title}</p>
                </div>
                <div className="flex gap-2 items-center">
                    <IoPersonCircleOutline />
                    <p>{book.author}</p>
                </div>
                <div className="flex justify-between p-3">
                    {<NavLink to={`${book._id}`} className="hover:text-gray-300 duration-200"><FaInfoCircle /></NavLink>}
                    {<NavLink to={`update/${book._id}`} className="hover:text-gray-300 duration-200" ><FaEdit /></NavLink>}
                    {<NavLink to={`delete/${book._id}`} className="hover:text-gray-300 duration-200" ><FaTrash /></NavLink>}
                </div>
            </div>
        </div>
    )
}
