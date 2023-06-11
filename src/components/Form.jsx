// Note: Search Form
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { RiSearchLine } from 'react-icons/ri'

const Form = () => {
    const [query, setQuery] = useState()
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (query === '') return;
        navigate(`/search/${query}`);
        setQuery('')
    }

    return (
        <form className="flex items-center relative px-2 py-3 ">
            <input className="text-black w-[90%] mx-auto h-8" type="text" value={query} onChange={(e) => setQuery(e.target.value)} />
            <button type="submit" className="absolute right-11" onClick={handleSubmit}>
                <RiSearchLine />
            </button>
        </form>
    )
}

export default Form