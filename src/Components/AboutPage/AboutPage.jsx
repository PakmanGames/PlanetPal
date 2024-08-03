import andyPic from '../../assets/andy.jpg'
import joshPic from '../../assets/josh.jpg'
import ammarPic from '../../assets/ammar.jpeg'
import yuktiPic from '../../assets/yukti.jpg'

import './AboutPage.css';

function AboutPage() {

  return (
    <>
      <div className="about-page">
        <h1 className="page-title">About Page</h1>
        
        <p className="site-description">
          Hey guys welcome to this goofy ahh website I mean gahdamn
        </p>

        <h2 className="creators-title">Creators</h2>

        <div className="profile">
          <img src={andyPic} className="profile-pic"/>
          <div className="profile-info">
            <name>Andy</name>
            <p>Andy "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
              dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit 
              anim id est laborum.".</p>
          </div>
        </div>
        
        <div className="profile reverse">
          <img src={joshPic} alt="Josh" className="profile-pic"/>
          <div className="profile-info">
            <name>Josh</name>
            <p>Josh "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque 
              laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto 
              beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut 
              odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. 
              Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, 
              sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat 
              voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam."</p>
          </div>
        </div>

        <div className="profile">
          <img src={ammarPic} alt="Ammar" className="profile-pic"/>
          <div className="profile-info">
            <name>Ammar</name>
            <p>Ammar "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium 
              voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati 
              cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est 
              laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero 
              tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime 
              placeat facere possimus."</p>
          </div>
        </div>

        <div className="profile reverse">
          <img src={yuktiPic} alt="Yukti" className="profile-pic"/>
          <div className="profile-info">
            <name>Yukti</name>
            <p>Yukti "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam libero tempore, cum soluta 
              nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, 
              omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis 
              debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non 
              recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores 
              alias consequatur aut perferendis doloribus asperiores repellat."</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutPage;
