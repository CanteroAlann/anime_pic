
import './home.css'
import ImageList from '../imageList/ImageList'
import { useState, useEffect } from 'react'


const background_images = [{
    id: 1,
    filename: 'first_image.jpg'
},
{
    id: 2,
    filename: 'second_image.jpg'
},
{
    id: 3,
    filename: 'third_image.jpg'
},
{
    id: 4,
    filename: 'fourth_image.jpg'
}
]

const Home = () => {
    const [images, setImages] = useState([])

    useEffect(() => {
        setImages(background_images)
    }, [])

    return (
        <>
            <h1 className="title home-position">Anime Art Galery</h1>
            <ImageList images={images} />
        </>
    )
}

export default Home