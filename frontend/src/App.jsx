import { useState, useEffect } from 'react'
import imageService from './services/images'


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
      {images.map(image =>
        <img key={image.id} src={`src/images/${image.filename}`} width={100} height={100} />
      )}
    </>
  )

}

export default App
