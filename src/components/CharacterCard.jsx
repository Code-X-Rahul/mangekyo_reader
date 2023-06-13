import { Link } from "react-router-dom"

const CharacterCard = ({characters, title}) => {
    return (
        <div className="px-1">
            <h1 className='text-3xl text-yellow-500 px-4 py-2 '>
                Characters
            </h1>
            <div className='flex justify-start items-center'>
                <div className='grid gap-1 grid-flow-col px-1 py-2 bg-zinc-800 h-auto overflow-x-scroll hide-scrollbar'>
                    {characters.map((c) => (
                        <Link to={`../${title}/character/${c.id}`} className={` relative w-[8rem] h-60 overflow-hidden bg-[#8CA9E4] rounded-sm hover:scale-105 transition-all ease-in grid`} key={c.id}>
                            <div className="bg-zinc-900"><img src={c.image} className='w-[100%] h-full object-cover hover:opacity-60' alt={c.name?.full} /></div>
                            <div className="line-clamp-2 overflow-hidden h-12 ">
                                <h1 className='text-center px-3'>{c.name?.full}</h1>
                            </div>
                            {c.role === "MAIN" && <h3 className="text-center text-sm px-1 absolute top-0 right-0 text-zinc-800 bg-teal-400 rounded-bl-lg">{c.role}</h3>}
                            {c.role === "SUPPORTING" && <h3 className="text-center text-teal-400 text-sm px-1 absolute top-0 right-0 bg-zinc-900 rounded-bl-lg">{c.role}</h3>}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default CharacterCard