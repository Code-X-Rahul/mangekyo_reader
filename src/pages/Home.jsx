import { useEffect, useState } from 'react'
import { useAuth } from '../UserContext'
import { META } from '@consumet/extensions'
import Slider from '../components/Slider'
import Card from '../components/Card'


const Home = () => {
  const user = useAuth()
  const [trendingAnime, setTrendingAnime] = useState()
  const [popularAnime, setPopularAnime] = useState()
  const [recentAnime, setRecentAnime] = useState()
  const [airingS, setAiringS] = useState()
  const [pageNo, setPageNo] = useState({
    trendingPage: 1,
    popularPage: 1,
    recentPage: 1,
    topPage: 1
  })


  useEffect(() => {
    const fetch = async () => {
      const getManga = new META.Anilist();
      const results = await getManga.fetchTrendingAnime(pageNo.trendingPage);
      setTrendingAnime(results)
    }
    return () => {
      fetch()
    }
  }, [pageNo.trendingPage])
  useEffect(() => {
    const fetch = async () => {
      const getManga = new META.Anilist();
      const results = await getManga.fetchPopularAnime(pageNo.popularPage);
      setPopularAnime(results)
    }
    return () => {
      fetch()
    }
  }, [pageNo.popularPage])
  useEffect(() => {
    const fetch = async () => {
      const getManga = new META.Anilist();
      const results = await getManga.fetchRecentEpisodes(pageNo.recentPage);
      setRecentAnime(results)
    }
    return () => {
      fetch()
    }
  }, [pageNo.recentPage])

  useEffect(() => {
    const fetch = async () => {
      const getManga = new META.Anilist();
      const results = await getManga.fetchAiringSchedule(pageNo.recentPage);
      console.log(results)
      setAiringS(results)
    }
    return () => {
      fetch()
    }
  }, [pageNo.recentPage])


  if (!trendingAnime) return (<h1>Loading...</h1>)
  return (
    <>
      <section className='bg-zinc-800 scroll-smooth'>
        <Slider type={trendingAnime} heading='Trending Anime' />
        <Slider type={popularAnime} heading='Popular Anime' />
        {/* <Slider type={recentAnime} heading='Recent Episodes' /> */}
        <div className='flex justify-start items-center flex-col'>
          <h1 className='text-3xl text-yellow-500 px-4 py-2 '>
            Recent Episodes
          </h1>
          <div className='grid gap-2 grid-cols-2 px-4 py-2 bg-zinc-800 h-auto'>
            {recentAnime && recentAnime?.results.map((anime) => <Card key={anime?.id} height="full" width="100%" {...anime} />)}
          </div>
        </div>
      </section>
    </>
  )
}

export default Home