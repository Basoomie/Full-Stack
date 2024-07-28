import { useEffect } from "react"
import { NavLink, useNavigate } from "react-router-dom"


export default function NotFound() {
  const navigate = useNavigate()

  useEffect(() => {
    setTimeout(() => {
      navigate("/books")
    }, 2000)
  }, [])

// I wanted to add a gradeient to the text but the background clips some letters
// bg-gradient-to-r from-white to-slate-300 inline-block text-transparent bg-clip-text

  return (
    <div className="h-screen flex flex-col justify-center">
      <div className="flex flex-col items-center gap-14">
        <h1 className="text-8xl">Sorry, this page doesn't exist.</h1>
        <p className="text-xl">You will be redirected to the home page in 2 seconds :)</p>
        <NavLink to={'/books'} className="hover:text-blue-200">Can't wait? Click Here</NavLink>
      </div>
    </div>
  )
}
