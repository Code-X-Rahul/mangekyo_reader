import { META } from '@consumet/extensions';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Card from '../components/Card';

const SearchPage = () => {
    const { query } = useParams();
    const [animeData, setAnimeData] = useState();

    useEffect(() => {
        const main = async () => {
            try {
                const AnimeList = new META.Anilist();
                const results = await AnimeList.search(query);
                // Print the results
                console.log(results);
                setAnimeData(results);
            } catch (error) {
                console.error(error);
            }
        };
        return () => {
            main();
        }
    }, [query])

    return (
        <div className='grid grid-cols-2 gap-3 p-2 py-4 bg-zinc-800'>
            {animeData && animeData.results.map((manga) => <Card key={manga?.id} {...manga} />)}
        </div>
    )
}

export default SearchPage
