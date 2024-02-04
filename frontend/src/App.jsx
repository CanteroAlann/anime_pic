import { useEffect } from 'react'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import { useDispatch } from 'react-redux'
import { loadUser } from './reducers/userReducer'





function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    // When the component is mounted, we want to load the user from the local storage
    dispatch(loadUser())

  }, [dispatch])

  //const images = useSelector(state => state.images)
  //const [images, setImages] = useState([])
  // const [user, setUser] = useState(null)
  /*
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
      console.log('logging in with', username, password)
      loginService.login({ username, password }).then(user => {
        imageService.setToken(user.token)
        setUser(user)
      })
    }
  
    const handleNewUser = (username, password) => {
      userService.create({ username, password })
  
    }
    */

  return (
    <>
      <Navbar />
      <Footer />
    </>
  )


  /*
  return (
    <>
      <h1 className='text-3xl'>Anime Art Galery</h1>
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
  */

}

export default App
