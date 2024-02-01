
//this component is used to display the images in the gallery
const ImageList = ({ images }) => {
    const imagesToShow = images.images
    return (
        imagesToShow.map(image =>
            <img key={image.id} src={`src/images/${image.filename}`} width={100} height={100} />
        )
    )
}

export default ImageList