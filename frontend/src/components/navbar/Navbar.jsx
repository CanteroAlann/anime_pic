import {
    BrowserRouter as Router,
    Routes, Route, Link
} from 'react-router-dom'

import Home from '../home/Home'
import Images from '../Images'
import Profile from '../Profile'
import Login from '../login/Login'
import './navbar.css'

const Navbar = ({ user, handleLogin, handleLogout }) => {

    const handleClick = () => {
        handleLogout(null)
        localStorage.clear()
    }



    return (

        <Router>
            <div className='navbar'>
                <Link to='/'>home</Link>
                {user === null ? <Link to='/login'>login</Link> : null}
                <Link to='/images'>images</Link>
                {user === null ? null : <Link to='/profile'>profile</Link>}
                {user != null ? <button onClick={handleClick}>logout</button> : null}
            </div>

            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/images' element={<Images />} />
                <Route path='/login' element={<Login handleSubmit={handleLogin} buttonLabel={"login"} />} />
                <Route path='/profile' element={<Profile />} />
            </Routes>
        </Router>
    )
}

export default Navbar