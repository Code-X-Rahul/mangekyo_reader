import { META } from '@consumet/extensions';
import { useParams } from 'react-router-dom';
import Card from '../components/Card';
import { useQuery } from 'react-query';

const SearchPage = () => {
    const { query } = useParams();

    const fetchAnime = async (param) => {
        const AnimeList = new META.Anilist();
        const results = await AnimeList.search(param);
        return results
    }
    const seachQuery = useQuery({
        queryKey: ['search', query],
        queryFn: () => fetchAnime(query)
    })


    if (seachQuery.isLoading) return (<h1>Loading....</h1>)
    if (seachQuery.isError) return (<h1>Error loading data!!!</h1>)

    return (
        <div className='grid grid-cols-2 gap-3 p-2 py-4 bg-zinc-800'>
            {seachQuery.data.results.map((manga) => <Card key={manga?.id} {...manga} />)}
        </div>
    )
}

export default SearchPage
