import { useDispatch } from 'react-redux'
import { logoutUser } from '../../reducers/userReducer'
import { useNavigate } from 'react-router-dom'


const Logout = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleClick = () => {
        dispatch(logoutUser())
        navigate('/')
    }

    return (
        <button onClick={handleClick}>logout</button>
    )
}

export default Logout