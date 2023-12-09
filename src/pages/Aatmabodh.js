// styles
import '../styles/aatmabodh.css'

// components
import hyperLink from '../components/Hyperlink'

// media
import aatmabodhPresentation from '../media/aatmabodh-presentation.png'

export default function AatmabodhPage() {
    return (
        <section className="aatmabodh">
            {hyperLink('< Go back to design projects.', '/0/design')}
            <img src={aatmabodhPresentation} alt="" />

            <div className="up">{hyperLink('scroll up ↑', '#')}</div>
        </section>
    )
};