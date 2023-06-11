import { useParams } from "react-router-dom"
import { MANGA } from '@consumet/extensions';
import { useEffect, useState } from "react";


const Manga = () => {
    const [mangaData, setMangaData] = useState();
    const { mangaId } = useParams();
    useEffect(() => {
        const fetch = async () => {
            const getManga = new MANGA.MangaHere();
            const results = await getManga.fetchMangaInfo(mangaId);
            console.log(results)
            setMangaData(results)
        }
        fetch()
    }, [mangaId])

    const imageDta = mangaData && `http://localhost:3000/image-proxy?url=${encodeURIComponent(mangaData?.image)}&headers=${encodeURIComponent(JSON.stringify({ Referer: mangaData?.headers?.Referer }))}`;


    if (!mangaData) return (<h1>Loading...</h1>)
    return (
        <section className="">
            <div className="flex p-4">
                <img className="w-[10rem]" src={imageDta} alt={mangaData.title} />
                <div className="ml-4">
                    <h1 className="text-2xl py-1">{mangaData?.title}</h1>
                    <h3 className="text-sm py-1">{mangaData?.status}</h3>
                    <h3 className="text-sm">{mangaData?.authors.join(", ")}</h3>
                    <h3 className="text-sm">{mangaData?.genres.join(", ")}</h3>
                </div>
            </div>
            <div className="p-4">
                <h1 className="text-2xl py-1">Description</h1>
                <p className="text-sm py-1">{mangaData?.description}</p>
            </div>
            <div className="p-4">
                <h1 className="text-2xl py-1">Chapters</h1>
                <div className="h-[60vh] overflow-y-scroll  grid grid-cols-2 gap-3 p-2 py-4 bg-zinc-300">
                    {mangaData && mangaData.chapters.map((chapter) => <h1>{chapter.title}</h1>)}
                </div>
            </div>
            <div className="p-4">
                <h1 className="text-2xl py-1">Comments</h1>
            </div>

        </section>

    )
}

export default Manga