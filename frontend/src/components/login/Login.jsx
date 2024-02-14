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

    const handleForgetPassword = () => {
        console.log('forgot password')
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
                        <p id='forget-pass-p' onClick={handleForgetPassword}>forget password?</p>
                    </div>

                    <input
                        type="password"
                        value={password}
                        name="Password"
                        id='password-input'
                        onChange={({ target }) => setPassword(target.value)}
                    />
                </div>
                <button
                    id="submit-button"
                    type="submit">
                    {buttonLabel}
                </button>
            </form>
            <div id='container-to-create-user'>
                <p>Don't have an account?
                    <span id='create-user-p' onClick={() => navigate('/signup')}>Create one</span>
                </p>

            </div>
        </div>
    )
}

export default Login
