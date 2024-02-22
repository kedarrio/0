// react
import { HashRouter as Router, Route, Routes } from 'react-router-dom';

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
					<Route exact path="/" Component={HomePage} />
					<Route path='/design' Component={DesignPage} />
					<Route path='/design/aatmabodh' Component={AatmabodhPage} />
					<Route path='/*' Component={NonExistentPage}/>
				</Routes>
				<div className='a'>A&lt;3</div>
			</div>
		</Router>
	);
}
