import { useParams } from "react-router-dom"
import { META } from '@consumet/extensions';
import { useEffect, useState } from "react";


const Anime = () => {
    const [animeData, setAnimeData] = useState();
    const { animeId } = useParams();
    useEffect(() => {
        const fetch = async () => {
            const getManga = new META.Anilist();
            const results = await getManga.fetchAnimeInfo(animeId);
            console.log(results)
            setAnimeData(results)
        }
        return () => {
            fetch()
        }
    }, [animeId])

    const reversedEp = animeData && [...animeData.episodes].reverse();

    // const imageDta = animeData && `http://localhost:3000/image-proxy?url=${encodeURIComponent(animeData?.image)}&headers=${encodeURIComponent(JSON.stringify({ Referer: animeData?.headers?.Referer }))}`;


    if (!animeData) return (<h1>Loading...</h1>)
    return (
        <section className=" bg-zinc-200 ">
            <div className="flex p-4 relative">
                <img className="w-[10rem] z-10" src={animeData?.image} alt={animeData?.title?.romaji} />
                <div className="ml-4 z-10 text-slate-100">
                    <h1 className="text-2xl py-1">{animeData?.title?.romaji} ({animeData?.releaseDate})</h1>
                    <p className="text-sm py-1 text-teal-400">{animeData?.status}</p>
                    <h3 className="text-sm text-zinc-300">{animeData?.genres.join(", ")}</h3>
                    <h3 className="text-sm">{animeData?.studios.join(', ')}</h3>
                    <h3 className="text-sm">{animeData?.type}</h3>
                    <h4 className="text-xl absolute right-3 top-1 text-teal-400"><span className="text-yellow-500 text-3xl mt-1">✩</span>{animeData?.rating}+</h4>
                </div>
                <div className="absolute inset-0 bg-black z-0">
                    <img className=" pointer-events-none opacity-40 blur-sm w-full h-[100%] object-cover " src={animeData?.cover} alt={animeData?.id} />
                </div>
            </div>
            <div className="p-4">
                <h1 className="text-2xl py-1">Description</h1>
                <p className="text-sm py-1" dangerouslySetInnerHTML={{ __html: animeData?.description }}></p>
            </div>
            <div className="p-4">
                <h1 className="text-2xl py-1">Chapters</h1>
                <div className="h-[60vh] overflow-y-scroll  grid grid-cols-2 gap-3 p-2 py-4 bg-zinc-300">
                    {animeData && reversedEp.map((episode) =>
                        <div key={episode.id}>
                            <h1 key={episode?.id}>{episode?.title}</h1>
                            <span>{episode?.number}</span>
                        </div>
                    )}
                </div>
            </div>
            <div className="p-4">
                <h1 className="text-2xl py-1">Comments</h1>
            </div>

        </section>

    )
}

export default Anime