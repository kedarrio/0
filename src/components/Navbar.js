import hyperLink from "./Hyperlink";
import Logo from '../media/logo.png'


export default function NavBar() {
    return (
        <nav className="top">
            <img src={Logo} alt="logo" />
            <ul className="nav-list">
                <li className="nav-item">{hyperLink('Home', '/')}</li>
                <li className="nav-item">{hyperLink('Get in touch?', 'mailto: kedarmulay1@gmail.com')}</li>
            </ul>
        </nav>
    );
};
