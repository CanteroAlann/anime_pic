import { useState } from "react";
import { useDispatch } from "react-redux";
import { uploadImage } from "../../reducers/imagesReducer";
import './imageUploader.css'
//this component is used to upload an image to the server and then display it on the canvas
const ImageUploader = () => {
    const dispatch = useDispatch()
    const [selectedFile, setSelectedFile] = useState(null)

    const handleFileChange = (e) => {
        setSelectedFile(e.target.files[0])

    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append('img', selectedFile)
        console.log('selectedFile', selectedFile)
        console.log('formData', formData)
        dispatch(uploadImage(formData))
    }


    return (
        <div>
            <h2>Upload image</h2>
            <form className="form-uploader" onSubmit={handleSubmit}>
                <input type="file" className="choose-file-input" onChange={handleFileChange} />
                <button type="submit">load image</button>
            </form>
        </div>
    )
}

export default ImageUploader
