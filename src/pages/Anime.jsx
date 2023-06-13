import { useParams } from "react-router-dom"
import { META } from '@consumet/extensions';
import { useQuery } from 'react-query';



const Anime = () => {
    const { animeId } = useParams();

    const fetchAnimeInfo = async (id) => {
        const getAnime = new META.Anilist();
        const results = await getAnime.fetchAnimeInfo(id);
        return results
    }

    const infoQuery = useQuery({
        queryKey: ['info', animeId],
        queryFn: () => fetchAnimeInfo(animeId)
    })

    if (infoQuery.isLoading) return (<h1>Loading....</h1>)
    if (infoQuery.isError) return (<h1>Error loading data!!!</h1>)

    const reversedEp = infoQuery.data && [...infoQuery.data.episodes].reverse();

    // const imageDta = infoQuery.data && `http://localhost:3000/image-proxy?url=${encodeURIComponent(infoQuery.data?.image)}&headers=${encodeURIComponent(JSON.stringify({ Referer: infoQuery.data?.headers?.Referer }))}`;

    return (
        <section className=" bg-zinc-200 ">
            <div className="flex p-4 relative">
                <img className="w-[10rem] z-10" src={infoQuery.data?.image} alt={infoQuery.data?.title?.romaji} />
                <div className="ml-4 z-10 text-slate-100">
                    <h1 className="text-2xl py-1">{infoQuery.data?.title?.romaji} ({infoQuery.data?.releaseDate})</h1>
                    <p className="text-sm py-1 text-teal-400">{infoQuery.data?.status}</p>
                    <h3 className="text-sm text-zinc-300">{infoQuery.data?.genres.join(", ")}</h3>
                    <h3 className="text-sm">{infoQuery.data?.studios.join(', ')}</h3>
                    <h3 className="text-sm">{infoQuery.data?.type}</h3>
                    <h4 className="text-xl absolute right-3 top-1 text-teal-400"><span className="text-yellow-500 text-3xl mt-1">✩</span>{infoQuery.data?.rating}+</h4>
                </div>
                <div className="absolute inset-0 bg-black z-0">
                    <img className=" pointer-events-none opacity-40 blur-sm w-full h-[100%] object-cover " src={infoQuery.data?.cover} alt={infoQuery.data?.id} />
                </div>
            </div>
            <div className="p-4">
                <h1 className="text-2xl py-1">Description</h1>
                <p className="text-sm py-1" dangerouslySetInnerHTML={{ __html: infoQuery.data?.description }}></p>
            </div>
            <div className="p-4">
                <h1 className="text-2xl py-1">Chapters</h1>
                <div className="h-[60vh] overflow-y-scroll  grid grid-cols-2 gap-3 p-2 py-4 bg-zinc-300">
                    {infoQuery.data && reversedEp.map((episode) =>
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