import { useLocation } from 'react-router-dom'

function HomePage() {
    const location = useLocation(); // current path location
    // checks if child route active
    const childRouteActive = ['/chat/', '/about/', '/contact/'].some((route) => route === location.pathname);
    
    if (childRouteActive) {
        return;
    }

    return (
        <div>
            THIS IS THE HOMEPAge
        </div>
    );
}

export default HomePage