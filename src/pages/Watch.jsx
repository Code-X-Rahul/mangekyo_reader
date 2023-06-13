import { useParams } from "react-router-dom"
import { useQuery } from 'react-query';
import { useAnime } from "../context/AnimeContext";
import axios from "axios";
import Player from "../components/Player";
import AnimeInfo from "../components/AnimeInfo";
import { DiscussionEmbed } from "disqus-react";
import LoadingPage from "../components/LoadingPage";

const Watch = () => {
    const { episodeId, animeId } = useParams()
    const { queryFn } = useAnime();
    const info = queryFn(animeId);


    const fetchEpisodeInfo = async (id) => {
        const url = `https://api.consumet.org/meta/anilist/watch/${id}`;
        const { data } = await axios.get(url);
        const results = data
        console.log(results);
        return results;
    }

    const eInfoQuery = useQuery({
        queryKey: ['eInfo', episodeId],
        queryFn: () => fetchEpisodeInfo(episodeId)
    })

    if (eInfoQuery.isLoading) return (<LoadingPage />)
    if (eInfoQuery.isError) return (<h1>Error loading data!!!</h1>)



    return (
        <>
            {eInfoQuery.status === "success" && <Player
                animeStreamInfo={eInfoQuery.data}
                getInstance={(art) => console.info(art)}
            />}
            <div>
                <h1 className="text-2xl font-bold text-center">{info?.data?.title?.romaji}</h1>
            </div>
            {info && <div className="">
                <AnimeInfo info={info} animeId={animeId} />
            </div>}
            <div className="py-10 px-3">
                <DiscussionEmbed shortname="mangekyoreader" fullUrl={`https://mangekyoreader.netlify.app/anime/${animeId}/watch/${episodeId}`} identifier={episodeId} title={episodeId} />
            </div>
        </>
    )

}

export default Watch