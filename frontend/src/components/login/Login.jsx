import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css'



const Login = ({ handleSubmit, buttonLabel }) => {
    const navigate = useNavigate()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleClick = async (event) => {
        event.preventDefault()
        const usernameToSend = username
        const passwordToSend = password
        console.log('username', usernameToSend)
        console.log('password', passwordToSend)
        handleSubmit(usernameToSend, passwordToSend)
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
