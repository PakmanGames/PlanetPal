import { useLocation } from 'react-router-dom'
import landfillDumping from '../../assets/landfill-dumping.jpeg'
import terraHacksNotRecycling from '../../assets/terrahacks-not-recycling.jpg'
import landfillCompact from '../../assets/landfill-compact.jpeg'
import volunteerSortRecycling from '../../assets/volunteer-sort-recycling.jpg'
import './HomePage.css'

function HomePage() {
    const location = useLocation(); // current path location
    // checks if child route active
    const childRouteActive = ['/chat/', '/about/', '/contact/'].some((route) => route === location.pathname);
    
    if (childRouteActive) {
        return;
    }

    return (
        <div id="home">
            <div className="homepage">
                <div className="overlay"></div>
                <div className='content'>
                    <h1>Every day, tons of waste are generated, filling our landfills, polluting our oceans, and
                        harming our wildlife. The problem of waste management is not just about the environment
                        – it is about our health, our communities, and our future. The mountains of trash we create
                        are a testament to our throwaway culture, and it is time to rethink how we produce, consume,
                        and dispose of waste. Our project is dedicated to finding innovative solutions to manage
                        waste sustainably, reduce our environmental footprint, and protect the world we live in. Join
                        us in making a difference, one piece of waste at a time.</h1>
                </div>
            </div>
            <div className="hm-img">
                <a href="#!">
                    <img src={landfillDumping}
                    alt="Project"/>
                </a>
                <a href="#!">
                    <img src={terraHacksNotRecycling}
                    alt="Project"/>
                </a>
                <a href="#!">
                    <img src={landfillCompact} 
                    alt="Project"/>
                </a>
                <a href="#!">
                    <img src={volunteerSortRecycling}
                    alt="Project"/>
                </a>
            </div>
        </div>
        
    );
}

export default HomePage