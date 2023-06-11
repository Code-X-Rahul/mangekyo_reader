import { Link } from "react-router-dom";

const Card = ({ image, headerForImage, title ,id, status}) => {


    const imageDta = `http://localhost:3000/image-proxy?url=${encodeURIComponent(image)}&headers=${encodeURIComponent(JSON.stringify({ Referer: headerForImage.Referer }))}`;

    return (
        <Link to={`../read/${id}`} className=' relative w-[100%] overflow-hidden bg-teal-100 rounded-lg hover:scale-105 transition-all ease-in grid'>
            <img src={imageDta} className='w-[100%] object-cover rounded-md' alt={title} />
            <h1 className='text-center '>{title}</h1>
            {status==="Ongoing" && <h3 className="text-center text-sm px-1 absolute top-0 right-0 bg-teal-400 rounded-bl-lg">{status}</h3>}
            {status==="Completed" && <h3 className="text-center text-sm px-1 absolute top-0 right-0 bg-zinc-600 rounded-bl-lg">{status}</h3>}
        </Link>
    )
}

export default Card