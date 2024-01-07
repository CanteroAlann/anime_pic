
const ImageList = ({ images }) => {
    return (
        images.map(image =>
            <img key={image.id} src={`src/images/${image.filename}`} width={100} height={100} />
        )
    )
}

export default ImageList