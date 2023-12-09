// styles
import '../styles/home.css'

// components
import ProjectsCard from '../components/Projectscard';

// media
import vibeCat from '../media/vibe-cat.gif';
import design from '../media/design.png';
import mountain from '../media/mountain.gif'


export default function HomePage() {
    return (
        <section className="home">
            <div className="pilot">
                <div className="first">
                    <article className='info'>
                        <h3>Heyy there!</h3>
                        <p>I'm an entrepreneur and freelancer from Hyderabad, India.</p>
                    </article>
                    <img className='vibe-cat' src={vibeCat} alt="vibeCat" />
                </div>
                <div className="second">
                    <article className='info'>
                        <h4>Design.</h4>
                        <p>- User Interfaces.</p>
                        <p>- User Experiences.</p>

                        <h4>Development.</h4>
                        <p>- Python.</p>
                        <p>- HTML/CSS + JavaScript ( REACT ).</p>

                        <h4>Software.</h4>
                        <p>- Figma.</p>
                        <p>- Adobe Premier Pro.</p>
                        <p>- Adone Photoshop.</p>
                    </article>
                </div>
            </div>
            <div className="name">
                <span>KEDARr.</span>
            </div>
            <div className="projects">
                <h1>Projects.</h1>
                <div className="container">
                    {ProjectsCard('Design.', '/0/design', design)}
                    {ProjectsCard('Python.', '/0/python', mountain)}
                </div>
            </div>
        </section>
    )
};
