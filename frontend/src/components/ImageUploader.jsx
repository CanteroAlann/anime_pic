import { useState } from "react";


//this component is used to upload an image to the server and then display it on the canvas
const ImageUploader = ({ handleLoad }) => {
    const [selectedFile, setSelectedFile] = useState(null)

    const handleFileChange = (e) => {
        setSelectedFile(e.target.files[0])
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        handleLoad(selectedFile)
    }


    return (
        <form onSubmit={handleSubmit}>
            <input type="file" onChange={handleFileChange} />
            <button type="submit">load image</button>
        </form>
    )
}

export default ImageUploader
