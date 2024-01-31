import {
    BrowserRouter as Router,
    Routes, Route, Link
} from 'react-router-dom'

import Home from '../home/Home'
import Images from '../Images'
import Profile from '../Profile'
import Login from '../Login'
import './navbar.css'

const Navbar = ({ user, handleLogout }) => {


    const handleLogin = () => {
        console.log('login')
    }

    return (

        <Router>
            <div className='navbar'>
                <Link to='/'>home</Link>
                <Link to='/login'>login</Link>
                <Link to='/images'>images</Link>
                <Link to='/profile'>profile</Link>
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