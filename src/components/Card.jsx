import React from 'react'
import axios from 'axios';
const Card = ({ image, headerForImage, title }) => {

    const getImg = async (url, referer) => {
       const res = await axios.get(url, {
            headers: {  
                'Referer': referer,
            },
            responseType: 'arraybuffer'
        });
        let d = Buffer.from(res.data).toString('base64');
        return`data:image/png;base64, ${d}`;

        // const base64 = Buffer.from(res.data, 'binary').toString('base64');
        // return `data:${res.headers['content-type'].toLowerCase()};base64,${base64}`;
    }
    let data = getImg(image, headerForImage.Referer)
    console.log(data);
    return (
        <div className='w-[100%] bg-teal-100 rounded-lg hover:scale-105 transition-all ease-in'>

            <img className='w-[100%] aspect-square object-cover rounded-md' alt={title} />
            <h1 className='text-center '>{title}</h1>
        </div>
    )
}

export default Card