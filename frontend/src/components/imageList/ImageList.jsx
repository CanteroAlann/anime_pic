
import './imageList.css'

//this component is used to display the images in the gallery
const ImageList = ({ images }) => {
    return (
        images.map(image =>
            <div className="image-list" key={image.id}>
                <img className="image-dimentions" src={`src/components/home/static/${image.filename}`} />
            </div>
        )
    )
}

export default ImageList