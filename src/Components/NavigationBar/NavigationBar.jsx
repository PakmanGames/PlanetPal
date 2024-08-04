import { useState, createContext} from 'react'
import { Outlet, Link } from 'react-router-dom'

import './NavigationBar.css'

export const MessagesList = createContext()

function NavigationBar() {
    const [messages, setMessages] = useState([]);

    return (
        <div>
            <div className="navbar">
                <div className='nav-title'>
                    <img src="/src/assets/PlanetPal.png" alt="company logo" className='logo'/>
                    <p className='title'>PlanetPal</p>
                </div>
                <div className="nav-links">
                    <Link to={`/`}>Home</Link>
                    <Link to={`chat/`}>Chat</Link>
                    <Link to={`about/`}>About</Link>
                    <Link to={`contact/`}>Contact</Link>
                </div>
            </div>
            <MessagesList.Provider value={[messages, setMessages]}>
                    <Outlet />
            </MessagesList.Provider>
        </div>
    );
}

export default NavigationBar