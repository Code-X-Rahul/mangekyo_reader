import { MANGA } from '@consumet/extensions';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Card from '../components/Card';

const SearchPage = () => {
    const { query } = useParams();
    const [mangaData, setMangaData] = useState();

    useEffect(() => {
        const main = async () => {
            try {
                const mangadex = new MANGA.MangaHere();
                const results = await mangadex.search(query);
                // Print the results
                console.log(results);
                setMangaData(results);
            } catch (error) {
                console.error(error);
            }
        };
        main();
    }, [query])

    return (
        <div className='grid grid-cols-2 gap-3 p-2 bg-zinc-800'>
            {mangaData && mangaData.results.map((manga) => <Card key={manga?.id} {...manga}/>)}
        </div>
    )
}

export default SearchPage
