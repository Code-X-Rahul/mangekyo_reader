import { Link } from "react-router-dom";

const Card = ({ image, title, id, status, height, width }) => {
    return (
        <Link to={`../anime/${id}`} className={` relative w-[${width}] h-${height} overflow-hidden bg-[#8CA9E4] rounded-sm hover:scale-105 transition-all ease-in grid`}>
            <div className="bg-zinc-900"><img src={image} className='w-[100%] h-full object-cover hover:opacity-60' alt={title?.romaji} /></div>
            <div className="line-clamp-2 overflow-hidden h-12 ">
                <h1 className='text-center px-3'>{title?.romaji}</h1>
            </div>
            {status === "Ongoing" && <h3 className="text-center text-sm px-1 absolute top-0 right-0 bg-teal-400 rounded-bl-lg">{status}</h3>}
            {status === "Completed" && <h3 className="text-center text-teal-400 text-sm px-1 absolute top-0 right-0 bg-zinc-900 rounded-bl-lg">{status}</h3>}
        </Link>
    )
}

export default Card