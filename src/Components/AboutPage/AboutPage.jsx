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
    <>
      <div className="about-page">
        <h1 className="page-title">About Page</h1>

        <p className="site-description">
        Welcome to <strong>GreenGuide</strong>, your dedicated partner in revolutionizing waste management and recycling 
        practices. Our website is designed to simplify the complexities of recycling and promote sustainable 
        waste management. At WasteWise, we are passionate about making recycling accessible and straightforward 
        for everyone. Our innovative platform provides practical tools, step-by-step guides, and educational 
        resources to help you sort, recycle, and reduce waste efficiently. We believe that small changes in 
        how we manage our waste can lead to significant environmental benefits. Our goal is to support individuals 
        and communities in making informed decisions that contribute to a cleaner, healthier planet. Join us as we 
        work together to transform waste management and foster a culture of sustainability.
        </p>

        <h2 className="creators-title">Creators</h2>

        <div className="profile">
          <img src={andyPic} className="profile-pic"/>
          <div className="profile-info">
            <name>Andy</name>
            <p>Andy Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
              dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit 
              anim id est laborum..</p>
          </div>
        </div>

        <div className="profile reverse">
          <img src={joshPic} alt="Josh" className="profile-pic"/>
          <div className="profile-info">
            <name>Josh</name>
            <p>Josh Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque 
              laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto 
              beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut 
              odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. 
              Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, 
              sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat 
              voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.</p>
          </div>
        </div>

        <div className="profile">
          <img src={ammarPic} alt="Ammar" className="profile-pic"/>
          <div className="profile-info">
            <name>Ammar</name>
            <p>Ammar At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium 
              voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati 
              cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est 
              laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero 
              tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime 
              placeat facere possimus.</p>
          </div>
        </div>

        <div className="profile reverse">
          <img src={yuktiPic} alt="Yukti" className="profile-pic"/>
          <div className="profile-info">
            <name>Yukti</name>
            <p>Yukti Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam libero tempore, cum soluta 
              nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, 
              omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis 
              debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non 
              recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores 
              alias consequatur aut perferendis doloribus asperiores repellat.</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutPage;
