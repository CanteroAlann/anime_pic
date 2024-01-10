import { useState } from "react";


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