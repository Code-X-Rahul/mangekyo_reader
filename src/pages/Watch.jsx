import { useParams } from "react-router-dom"
import { useQuery } from 'react-query';
import { useAnime } from "../context/AnimeContext";
import axios from "axios";
import Player from "../components/Player";

const Watch = () => {
    const { episodeId } = useParams()
    const {aIg} = useAnime();
    console.log(aIg);
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

    if (eInfoQuery.isLoading) return (<h1>Loading....</h1>)
    if (eInfoQuery.isError) return (<h1>Error loading data!!!</h1>)



    return (
        <>
            {eInfoQuery.status === "success" && <Player
                animeStreamInfo={eInfoQuery.data}
                getInstance={(art) => console.info(art)}
            />}
            <div className="p-2">

            </div>
        </>
    )
}

export default Watch