import { Dispatch, SetStateAction } from "react"

type NewBookInputProps = {
    title: string,
    setTitle: Dispatch<SetStateAction<string>>,
    author: string,
    setAuthor: Dispatch<SetStateAction<string>>,
    publishYear: number,
    setPublishYear: Dispatch<SetStateAction<number>>
}

export default function NewBookInput(props: NewBookInputProps) {
    const {title, setTitle, author, setAuthor, publishYear, setPublishYear} = props
    
    return (
        <>
            <div className="flex flex-col w-1/5 gap-3">
            <div className="flex flex-col gap-1 mb-4">
                <label className="">Title:</label>
                <input 
                type="text" 
                className="text-black p-1 w-full" 
                defaultValue={title} 
                onChange={(e) => setTitle(e.target.value)}/>
            </div>
            <div className="flex flex-col gap-1 mb-4">
                <label>Author:</label>
                <input 
                type="text" 
                className="text-black p-1 w-full" 
                defaultValue={author} 
                onChange={(e) => setAuthor(e.target.value)}/>
            </div>
            <div className="flex flex-col gap-1">
                <label>Year Published:</label>
                <input 
                type="number" 
                className="text-black w-full p-1" 
                value={publishYear}
                onChange={(e) => setPublishYear(Number(e.target.value))} />
            </div>
            </div>
        </>
    )
}
