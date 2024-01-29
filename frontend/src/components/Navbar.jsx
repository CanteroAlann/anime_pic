import {
    BrowserRouter as Router,
    Routes, Route, Link
} from 'react-router-dom'

import Home from './Home'
import Images from './Images'
import Profile from './Profile'
import Login from './Login'

const Navbar = ({ user, handleLogout }) => {
    const padding = {
        paddingRight: 5
    }

    const handleLogin = () => {
        console.log('login')
    }

    return (
        <Router>
            <div className='flex flex-auto'>
                <Link style={padding} to='/'>home</Link>
                <Link style={padding} to='/login'>login</Link>
                <Link style={padding} to='/images'>images</Link>
                <Link style={padding} to='/profile'>your profile</Link>
                <button onClick={handleLogout}>logout</button>
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