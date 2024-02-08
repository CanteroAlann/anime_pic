import { useState } from 'react'
import './togglable.css'


const Togglable = (props) => {
    const [visible, setVisible] = useState(false)

    const hideWhenVisible = { display: visible ? 'none' : '' }
    const showWhenVisible = { display: visible ? '' : 'none' }

    const toggleVisibility = () => {
        setVisible(!visible)
    }

    return (
        <div className='togglable-container'>
            <div style={hideWhenVisible}>
                <button onClick={toggleVisibility}>{props.buttonLabel}</button>
            </div>
            <div style={showWhenVisible} id='drag-and-drop-container'>
                {props.children}
                <button id='cancel-button' onClick={toggleVisibility}>Cancel</button>
            </div>
        </div>
    )
}

export default Togglable