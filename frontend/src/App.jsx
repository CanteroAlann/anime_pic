import { useState, useEffect } from 'react'
import imageService from './services/images'
import loginService from './services/login'
import ImageList from './components/ImageList'
import ImageUploader from './components/ImageUploader'
import Login from './components/Login'
import Togglable from './components/Togglable'
import NewUser from './components/NewUser'



function App() {
  const [images, setImages] = useState([])
  const [user, setUser] = useState(null)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  useEffect(() => {
    if (!user) return
    imageService.getAll().then(initialImages => {
      setImages(initialImages)
    })
  }, [user]
  )

  const handleLoad = (image) => {
    const formData = new FormData()
    imageService.setToken(user.token)
    formData.append('img', image)
    imageService.create(formData).then(returnedImage => {
      setImages(images.concat(returnedImage))
    })
  }

  const handleLogin = () => {
    loginService.login({ username, password }).then(user => {
      setUser(user)
      setUsername('')
      setPassword('')
    })
  }

  const handleNewUser = () => {
    console.log('new user')
  }


  return (
    <>
      <h1>Anime Art Galery</h1>
      <Login
        setUsername={setUsername}
        setPassword={setPassword}
        handleLogin={handleLogin}
      />
      <Togglable buttonLabel='Create new user'>
        <NewUser handleNewUser={handleNewUser} />
      </Togglable>
      {user && <ImageList images={images} />}
      <ImageUploader handleLoad={handleLoad} />
    </>
  )

}

export default App
