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


export default function App() {
	return (
		<Router>
			<div className="App">
				<NavBar />
				<Routes basename="/portfolio">
					<Route exact path="/" Component={HomePage} />
					<Route path='/design' Component={DesignPage} />
					<Route path='/design/aatmabodh' Component={AatmabodhPage} />
				</Routes>
			</div>
		</Router>
	);
}
