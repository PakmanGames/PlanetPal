import { Outlet, Link } from 'react-router-dom'

import './NavigationBar.css'

function NavigationBar() {

    return (
        <div>
            <div className="navbar">
                <div className='nav-title'>
                    <img src="placeholder" alt="company logo" className='logo'/>
                    <p className='title'>Terrahacks project</p>
                </div>
                <div className="nav-links">
                    <Link to={`/`}>Home</Link>
                    <Link to={`chat/`}>Chat</Link>
                    <Link to={`about/`}>About</Link>
                    <Link to={`contact/`}>Contact</Link>
                </div>
            </div>
            <Outlet />
        </div>
    );
}

export default NavigationBar