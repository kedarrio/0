// react
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// styles
import './App.css'

// pages
import HomePage from './pages/Home';
import DesignPage from './pages/Design';
import AatmabodhPage from './pages/Aatmabodh';

// components
import NavBar from './components/Navbar'

// 404
function NonExistentPage () {
    return (
		<section className="nothing">
			<h1>
				Nothing Here :)
			</h1>

		</section>
    )
}


export default function App() {
	return (
		<Router>
			<div className="App">
				<NavBar />
				<Routes>
					<Route exact path="https://zero-fhav.onrender.com/" Component={HomePage} />
					<Route path='https://zero-fhav.onrender.com/design' Component={DesignPage} />
					<Route path='https://zero-fhav.onrender.com/design/aatmabodh' Component={AatmabodhPage} />
					<Route path='https://zero-fhav.onrender.com/*' Component={NonExistentPage}/>
				</Routes>
			</div>
		</Router>
	);
}
