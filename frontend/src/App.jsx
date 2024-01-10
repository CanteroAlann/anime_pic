import { useState, useEffect } from 'react'
import imageService from './services/images'
import ImageList from './components/ImageList'
import ImageUploader from './components/ImageUploader'



function App() {
  const [images, setImages] = useState([])

  useEffect(() => {
    imageService.getAll().then(initialImages => {
      setImages(initialImages)
    })
  }, []
  )

  const handleLoad = (image) => {
    const formData = new FormData()
    formData.append('img', image)
    imageService.create(formData).then(returnedImage => {
      setImages(images.concat(returnedImage))
    })
  }


  return (
    <>
      <h1>Anime Art Galery</h1>
      <ImageList images={images} />
      <ImageUploader handleLoad={handleLoad} />
    </>
  )

}

export default App
