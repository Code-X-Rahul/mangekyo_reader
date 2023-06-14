import { META } from '@consumet/extensions';
import { useParams } from 'react-router-dom';
import Card from '../components/Card';
import { useQuery } from 'react-query';
import LoadingPage from '../components/LoadingPage';
import axios from 'axios';
import Error from '../components/Error';

const SearchPage = () => {
    const { query } = useParams();

    const fetchAnime = async (param) => {
        const url = `https://api.consumet.org/meta/anilist/${param}`;
        const { data } = await axios.get(url, { params: { page: 1 } });
        const results = data;
        return results
    }
    const seachQuery = useQuery({
        queryKey: ['search', query],
        queryFn: () => fetchAnime(query)
    })


    if (seachQuery.isLoading) return (<LoadingPage />)
    if (seachQuery.isError) return (<Error />)

    return (
        <div className='grid grid-cols-2 gap-3 p-2 py-4 bg-zinc-800 md:grid-cols-4 lg:grid-cols-6'>
            {seachQuery.data.results.map((manga) => <Card key={manga?.id} {...manga} />)}
        </div>
    )
}

export default SearchPage
