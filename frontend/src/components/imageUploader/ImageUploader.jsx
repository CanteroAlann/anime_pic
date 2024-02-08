import { useState } from "react";
import { useDispatch } from "react-redux";
import { uploadImage } from "../../reducers/imagesReducer";
import './imageUploader.css'
//this component is used to upload an image to the server and then display it on the canvas
const ImageUploader = () => {
    const dispatch = useDispatch()
    const [selectedFile, setSelectedFile] = useState(null)
    const [showLoadButton, setShowLoadButton] = useState(false)


    const handleFileChange = (e) => {
        setSelectedFile(e.target.files[0])
        console.log("file choosen")
        setShowLoadButton(true)

    }

    const handleClick = (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append('img', selectedFile)
        dispatch(uploadImage(formData))
    }

    const handleDrop = (e) => {
        e.preventDefault()
        e.stopPropagation()
        setSelectedFile(e.dataTransfer.files[0])
        setShowLoadButton(true)

    }

    const handleDragOver = (e) => {
        e.preventDefault()
        e.stopPropagation()
    }


    return (
        <>
            <div className="drop-area"
                onDrop={handleDrop}
                onDragOver={handleDragOver}>
                <p>Drag and drop image here</p>
                <label htmlFor="file" className="choose-file">or choose file</label>
            </div>
            <div>
                <input type="file" name="file" id="file" className="choose-file-input" hidden onChange={handleFileChange} />
            </div>
            <div>
                {showLoadButton === false ? null
                    : <button type="submit" onClick={handleClick}>load image</button>}
            </div>
        </>

    )
}

export default ImageUploader
