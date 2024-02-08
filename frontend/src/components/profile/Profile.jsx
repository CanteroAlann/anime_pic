import { useSelector } from 'react-redux'
import ImageList from '../imageList/ImageList'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getImages } from '../../reducers/imagesReducer'
import ImageUploader from '../imageUploader/ImageUploader'
import Togglable from '../togglable/Togglable'
import './profile.css'


const Profile = () => {
    const dispatch = useDispatch()
    const userObject = useSelector(state => state.user)
    const images = useSelector(state => state.images.images)

    useEffect(() => {
        dispatch(getImages())
    }, [dispatch]
    )
    if (userObject.user === null) {
        return (
            <h1>loading...</h1>
        )
    }
    const username = userObject.user.username

    return (
        <div id='profile'>
            <h1>welcome {username} </h1>
            <ImageList images={images} />
            <Togglable buttonLabel='add image'>
                <ImageUploader />
            </Togglable>
        </div>

    )
}
export default Profile  