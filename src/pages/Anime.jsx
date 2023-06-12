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



    // const imageDta = animeData && `http://localhost:3000/image-proxy?url=${encodeURIComponent(animeData?.image)}&headers=${encodeURIComponent(JSON.stringify({ Referer: animeData?.headers?.Referer }))}`;


    if (!animeData) return (<h1>Loading...</h1>)
    return (
        <section className="">
            <div className="flex p-4">
                <img className="w-[10rem]" src={animeData?.image} alt={animeData?.title?.romaji} />
                <div className="ml-4">
                    <h1 className="text-2xl py-1">{animeData?.title?.romaji}</h1>
                    <h3 className="text-sm py-1">{animeData?.status}</h3>
                    {/* <h3 className="text-sm">{animeData?.authors.join(", ")}</h3> */}
                    <h3 className="text-sm">{animeData?.genres.join(", ")}</h3>
                </div>
            </div>
            <div className="p-4">
                <h1 className="text-2xl py-1">Description</h1>
                <p className="text-sm py-1">{animeData?.description}</p>
            </div>
            <div className="p-4">
                <h1 className="text-2xl py-1">Chapters</h1>
                <div className="h-[60vh] overflow-y-scroll  grid grid-cols-2 gap-3 p-2 py-4 bg-zinc-300">
                    {animeData && animeData.episodes.map((episode) =>
                        <div>
                            <img className="w-[10rem]" src="https://artworks.thetvdb.com/banners/v4/episode/9551541/screencap/64235bbaf119a.jpg" alt={episode?.title} />
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