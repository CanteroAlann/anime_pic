
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Login from './Login'
import store from '../../store'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Profile from '../profile/Profile'
import userEvent from '@testing-library/user-event'
import axios from 'axios'



jest.mock('axios')

const DummyHome = () => {
    return (
        <div>
            <h1>home</h1>
        </div>
    )
}


test('renders login component', () => {
    render(
        <Provider store={store}>
            <Router>
                <Login buttonLabel="login" />
            </Router>
        </Provider>
    )
    const username = screen.getByText('username')
    const password = screen.getByText('password')
    const button = screen.getByText('login')
    expect(username).toBeInTheDocument()
    expect(password).toBeInTheDocument()
    expect(button).toBeInTheDocument()

}
)

test('login button works', async () => {
    const response = { data: { username: 'test', token: '1234' } }
    const mockedImages = [{ id: 1, title: 'test', url: 'test.com' }]
    axios.post.mockResolvedValue(response)
    axios.get.mockResolvedValue({ data: mockedImages })

    const { container } = render(
        <Provider store={store}>
            <Router>
                <Login buttonLabel="login" />

                <Routes>
                    <Route path='/profile' element={<Profile />} />
                    <Route path='/' element={<DummyHome />} />
                </Routes>

            </Router>
        </Provider>
    )
    const user = userEvent.setup()
    const button = container.querySelector('#submit-button')
    await user.click(button)
    const profile = await screen.findByText('welcome test')
    expect(profile).toBeInTheDocument()

}
)