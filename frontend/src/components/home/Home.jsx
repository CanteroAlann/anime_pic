
import './home.css'
import ImageList from '../image-list/ImageList'



const Home = (images) => {
    return (
        <>
            <h1 className="title home-position">Anime Art Galery</h1>
            <ImageList images={images} />
        </>
    )
}

export default Home