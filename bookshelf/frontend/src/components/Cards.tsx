import Card from './Card'

type Book = {
    title: string,
    author: string,
    publishYear: number,
    _id: number
}


type CardsProps = {
    books: Book[]
}

export default function Cards(props: CardsProps) {
    const {books} = props

    return (
        <div className='grid grid-cols-2 lg:grid-cols-4 mt-12'>
            {books.map(book => {
                return (
                    <div key={book._id}>
                        <Card book={book} />
                    </div>
                )
            })}
        </div>
    )
}
