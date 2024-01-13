import { useState } from 'react';



const Login = ({ setUsername, setPassword, handleLogin }) => {
    const [usernme, setUsernme] = useState('')
    const [pass, setPass] = useState('')

    const handleClick = async (event) => {
        event.preventDefault()
        setUsername(usernme)
        setPassword(pass)
        handleLogin()
    }

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleClick}>
                <div>
                    username
                    <input
                        type="text"
                        value={usernme}
                        name="Username"
                        onChange={({ target }) => setUsernme(target.value)}
                    />
                </div>
                <div>
                    password
                    <input
                        type="password"
                        value={pass}
                        name="Password"
                        onChange={({ target }) => setPass(target.value)}
                    />
                </div>
                <button type="submit">login</button>
            </form>
        </div>
    )
}

export default Login
