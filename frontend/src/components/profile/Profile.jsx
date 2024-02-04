import { useSelector } from 'react-redux'
import ImageList from '../imageList/ImageList'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getImages } from '../../reducers/imagesReducer'


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
    const user = userObject.user.username
    console.log('images', images)

    return (
        <div>
            <h1>welcome {user} </h1>
            <ImageList images={images} />

        </div>

    )
}
export default Profile  