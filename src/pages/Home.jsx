import { useState } from 'react'
import { useAuth } from '../UserContext'
import Slider from '../components/Slider'
import Card from '../components/Card'
import { useQuery } from 'react-query';
import { useAnime } from '../context/AnimeContext'
import LoadingPage from '../components/LoadingPage';
import Error from '../components/Error';



const Home = () => {
  const user = useAuth()
  const [pageNo, setPageNo] = useState({
    trendingPage: 1,
    popularPage: 1,
    recentPage: 1,
    topPage: 1
  })
  const { fetchPAnime, fetchAnimeS, fetchRAnime, fetchTAnime } = useAnime()

  const trendingQuery = useQuery({
    queryKey: ['trending'],
    queryFn: () => fetchTAnime()
  })

  const recentQuery = useQuery({
    queryKey: ['recent'],
    queryFn: () => fetchRAnime()
  })

  const popularQuery = useQuery({
    queryKey: ['popular'],
    queryFn: () => fetchPAnime()
  })

  const airingQuery = useQuery({
    queryKey: ['airing'],
    queryFn: () => fetchAnimeS()
  })



  if (trendingQuery.isLoading || recentQuery.isLoading || popularQuery.isLoading) return (<LoadingPage />)
  if (trendingQuery.isError) return (<Error />)

  return (
    <>
      <section className='bg-zinc-800'>
        <Slider type={trendingQuery.data?.results} heading='Trending Anime' />
        <Slider type={popularQuery.data?.results} heading='Popular Anime' />
        {/* <Slider type={recentAnime} heading='Recent Episodes' /> */}
        <div className='flex justify-start items-center flex-col'>
          <h1 className='text-3xl text-yellow-500 px-4 py-2 '>
            Recent Episodes
          </h1>
          <div className='grid gap-2 grid-cols-2 px-4 py-2 bg-zinc-800 h-auto md:grid-cols-4 lg:grid-cols-6'>
            {recentQuery.data?.results.map((anime) => <Card key={anime?.id} height="full" width="100%" {...anime} />)}
          </div>
        </div>
      </section>
    </>
  )
}

export default Home