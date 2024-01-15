import { useState, useEffect } from 'react'
import imageService from './services/images'
import loginService from './services/login'
import userService from './services/user'
import ImageList from './components/ImageList'
import ImageUploader from './components/ImageUploader'
import Login from './components/Login'
import Togglable from './components/Togglable'




function App() {
  const [images, setImages] = useState([])
  const [user, setUser] = useState(null)

  useEffect(() => {
    if (!user) return
    imageService.getAll().then(initialImages => {
      setImages(initialImages)
    })
  }, [user]
  )

  const handleLoad = (image) => {
    const formData = new FormData()
    formData.append('img', image)
    imageService.create(formData).then(returnedImage => {
      setImages(images.concat(returnedImage))
    })
  }

  const handleLogin = (username, password) => {
    loginService.login({ username, password }).then(user => {
      imageService.setToken(user.token)
      setUser(user)
    })
  }

  const handleNewUser = (username, password) => {
    userService.create({ username, password })

  }



  return (
    <>
      <h1>Anime Art Galery</h1>
      <Login
        handleSubmit={handleLogin}
        buttonLabel={'Login'}
      />
      <Togglable buttonLabel='Create new user'>
        <Login
          handleSubmit={handleNewUser}
          buttonLabel={'Create new user'}
        />
      </Togglable>
      {user === null ? null : <>
        <ImageList images={images} />
        <ImageUploader handleLoad={handleLoad} />
      </>}
    </>
  )

}

export default App
