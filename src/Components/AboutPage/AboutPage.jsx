import { useEffect } from 'react';
import andyPic from '../../assets/andy.jpg';
import joshPic from '../../assets/josh.jpg';
import ammarPic from '../../assets/ammar.jpg';
import yuktiPic from '../../assets/yukti.jpg';
import './AboutPage.css';

function AboutPage() {
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1 
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        } else {
          entry.target.classList.remove('show');
        }
      });
    }, observerOptions);

    const profiles = document.querySelectorAll('.profile');
    profiles.forEach(profile => {
      observer.observe(profile);
    });

    return () => {
      profiles.forEach(profile => observer.unobserve(profile));
    };
  }, []);

  return (
    <div className='about-page-element'>
      <div className="about-page">
        <h1 className="page-title">About Page</h1>

        <p className="site-description">
        Welcome to <strong>PlanetPal</strong>, your dedicated partner in revolutionizing waste management and recycling 
        practices. Our website is designed to simplify the complexities of recycling and promote sustainable 
        waste management. At <strong>PlanetPal</strong>, we are passionate about making recycling accessible and straightforward 
        for everyone. Our innovative platform provides practical tools, step-by-step guides, and educational 
        resources to help you sort, recycle, and reduce waste efficiently. We believe that small changes in 
        how we manage our waste can lead to significant environmental benefits. Our goal is to support individuals 
        and communities in making informed decisions that contribute to a cleaner, healthier planet. Join us as we 
        work together to transform waste management and foster a culture of sustainability.
        </p>

        <h2 className="creators-title">Creators</h2>
        
        <div className="floating-object"></div> {/* Add this line for the floating object */}


        <div className="profile">
          <img src={andyPic} className="profile-pic"/>
          <div className="profile-info">
            <span className="name">Andy Pak</span>
            <p>I am a programmer who is good at using Ruby, React and JavaScript. I love developing front-end, creating interfaces that are smooth to interact with for users. What makes me happy is being thorough when coding so that all projects I get involved in become perfect.</p>
          </div>
        </div>

        <div className="profile reverse">
          <img src={joshPic} alt="Josh" className="profile-pic"/>
          <div className="profile-info">
            <span className="name">Josh Xue</span>
            <p>I know Python well and also have a background in HTML, CSS as well as JavaScript. My interest lies in combining front end development with back end functionality which gives complete solutions which are appealing to look at and technically sound too. I like my job where these technologies merge together.
            </p>
          </div>
        </div>

        <div className="profile">
          <img src={ammarPic} alt="Ammar" className="profile-pic"/>
          <div className="profile-info">
            <span className="name">Ammar Kashif</span>
            <p>I am a committed programmer who is always ready to tackle issues related to Java, Python, JavaScript , HTML and CSS. I am working on my skills in Python with the goal of striking a balance between that language and software development. My intent for self-development and learning backed by technical competence pushes me to give my best in every project that I do.</p>
          </div>
        </div>

        <div className="profile reverse">
          <img src={yuktiPic} alt="Yukti" className="profile-pic"/>
          <div className="profile-info">
            <div className="name">Yukti</div>
            <p>
            I am a seasoned developer proficient in both backend and frontend languages. Coding thrills me; it gives me an adrenaline rush when solving difficult problems leading to my nickname “an extreme coder”. All through the project, my focus is on delivering high quality solutions by applying my broad range of skills.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
