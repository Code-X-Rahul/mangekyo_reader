import Card from '../components/Card'


const Slider = ({ type, heading }) => {
    return (
        <>
            <h1 className='text-3xl text-yellow-500 px-4 py-2 '>
                {heading}
            </h1>
            <div className='flex justify-start items-center'>
                <div className='grid gap-1 grid-flow-col px-1 py-2 bg-zinc-800 h-auto overflow-x-scroll hide-scrollbar'>
                    {type && type.map((anime) => <Card key={anime?.id} height="72" width="10rem" {...anime} />)}
                </div>
            </div>
        </>
    )
}

export default Slider