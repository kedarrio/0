// styles
import '../styles/design.css'

// components
import ProjectsCard from '../components/Projectscard'

// media
import Aatmabhod from '../media/aatmabhod.png'

export default function DesignPage() {
    return (
        <section className="design">
            <h1>Design Projects.</h1>
            <div className="container">
                {ProjectsCard('Aatmabhod.', '/design/aatmabodh', Aatmabhod)}
            </div>
        </section>
    )
};