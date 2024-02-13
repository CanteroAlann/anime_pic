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

    const handleClick = async (event) => {
        event.preventDefault()
        const usernameToSend = username
        const passwordToSend = password
        dispatch(loginUser(usernameToSend, passwordToSend))
        setUsername('')
        setPassword('')
        navigate('/profile')
    }

    return (
        <div className='login'>
            <form onSubmit={handleClick} id='login-form'>
                <div id='input-container'>
                    username
                    <br />
                    <input
                        type="text"
                        value={username}
                        name="Username"
                        id='username-input'
                        onChange={({ target }) => setUsername(target.value)}
                    />
                </div>
                <div id='input-container'>
                    <div className='flex  flex-row items-center justify-between'>
                        <p>password</p>
                        <p>forget password?</p>
                    </div>

                    <input
                        type="password"
                        value={password}
                        name="Password"
                        id='password-input'
                        onChange={({ target }) => setPassword(target.value)}
                    />
                </div>
                <button className="rounded-lg bg-red-400 shadow"
                    id="submit-button"
                    type="submit">
                    {buttonLabel}
                </button>
            </form>
        </div>
    )
}

export default Login
