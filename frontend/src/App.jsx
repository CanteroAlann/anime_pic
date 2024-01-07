import { useState, useEffect } from 'react'
import imageService from './services/images'
import ImageList from './components/ImageList'


function App() {
  const [images, setImages] = useState([])

  useEffect(() => {
    imageService.getAll().then(initialImages => {
      console.log(initialImages)
      setImages(initialImages)
    })
  }, []
  )

  return (
    <>
      <h1>Anime Art Galery</h1>
      <ImageList images={images} />
    </>
  )

}

export default App
