import { useState } from 'react';



const Login = ({ handleSubmit, buttonLabel }) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleClick = async (event) => {
        event.preventDefault()
        const usernameToSend = username
        const passwordToSend = password
        handleSubmit(usernameToSend, passwordToSend)
        setUsername('')
        setPassword('')

    }

    return (
        <div>
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
