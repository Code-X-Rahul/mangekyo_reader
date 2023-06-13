import { Link, useParams } from "react-router-dom"
import { useAnime } from "../context/AnimeContext";
import Slider from "../components/Slider";
import CharacterCard from "../components/CharacterCard";



const Anime = () => {
    const { animeId } = useParams();
    const { queryFn } = useAnime();
    const info = queryFn(animeId);

    if (info.isLoading) return (<h1>Loading....</h1>)
    if (info.isError) return (<h1>Error loading data!!!</h1>)

    const reversedEp = info.data && [...info.data.episodes].reverse();

    return (
        <section className=" lg:px-4">
            <div className="flex p-4 relative">
                <img className="w-[10rem] z-10" src={info.data?.image} alt={info.data?.title?.romaji} />
                <div className="ml-4 z-10 text-slate-100">
                    <h1 className="text-2xl py-1">{info.data?.title?.romaji} ({info.data?.releaseDate})</h1>
                    <p className="text-sm py-1 text-teal-400">{info.data?.status}</p>
                    <h3 className="text-sm text-zinc-300">{info.data?.genres.join(", ")}</h3>
                    <h3 className="text-sm">{info.data?.studios.join(', ')}</h3>
                    <h3 className="text-sm">{info.data?.type}</h3>
                    <h4 className="text-xl absolute right-3 top-1 text-teal-400"><span className="text-yellow-500 text-3xl mt-1">✩</span>{info.data?.rating}+</h4>
                </div>
                <div className="absolute inset-0 bg-black z-0">
                    <img className=" pointer-events-none opacity-40 blur-sm w-full h-[100%] object-cover " src={info.data?.cover} alt={info.data?.id} />
                </div>
            </div>
            <div className=" text-slate-300">
                <div className="p-4">
                    <h1 className="text-2xl py-1  text-teal-500">Description</h1>
                    <p className="text-sm py-1" dangerouslySetInnerHTML={{ __html: info.data?.description }}></p>
                </div>
                <div className="p-4">
                    <h1 className="text-2xl py-1  text-teal-400">Episodes</h1>
                    <div className="grid grid-cols-6 gap-3 p-2 py-4 hide-scrollbar">
                        {info.data && reversedEp.map((episode) =>
                            <Link to={`../anime/${animeId}/watch/${episode?.id}`} className="bg-zinc-950 rounded-lg flex justify-center items-center hover:bg-zinc-900 transition-all ease-in-out" key={episode.id}>
                                <span className="py-3 px-4">{episode?.number}</span>
                            </Link>
                        )}
                    </div>
                </div>
                {info.data.characters.length !== 0 && <CharacterCard characters={info.data.characters} title={info?.data?.title?.romaji} />}
                {info.data.recommendations.length !== 0 && <Slider type={info?.data?.recommendations} variant="anime" heading='Recommendation' />}
                <div className="p-4">
                    <h1 className="text-2xl py-1">Comments</h1>
                </div>
            </div>

        </section>

    )
}

export default Anime