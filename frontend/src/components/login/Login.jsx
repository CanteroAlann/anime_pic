import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css'
import { useDispatch } from 'react-redux'
import { loginUser } from '../../reducers/userReducer'




const Login = ({ buttonLabel }) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    //This function is called when the form is submitted and it's responsability
    //is to dispatch the loginUser action with the username and password as arguments
    const handleClick = async (event) => {
        event.preventDefault()
        const usernameToSend = username
        const passwordToSend = password
        dispatch(loginUser(usernameToSend, passwordToSend))
        setUsername('')
        setPassword('')
        navigate('/images')

    }

    return (
        <div className='login'>
            <form onSubmit={handleClick}>
                <div>
                    username
                    <input
                        type="text"
                        value={username}
                        name="Username"
                        onChange={({ target }) => setUsername(target.value)}
                    />
                </div>
                <div>
                    password
                    <input
                        type="password"
                        value={password}
                        name="Password"
                        onChange={({ target }) => setPassword(target.value)}
                    />
                </div>
                <button className="rounded-lg bg-red-400 shadow" type="submit">{buttonLabel}</button>
            </form>
        </div>
    )
}

export default Login
