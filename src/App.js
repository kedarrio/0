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


export default function App() {
	return (
		<Router>
			<div className="App">
				<NavBar />
				<Routes>
					<Route exact path="/0" Component={HomePage} />
					<Route path='/0/design' Component={DesignPage} />
					<Route path='/0/design/aatmabodh' Component={AatmabodhPage} />
				</Routes>
			</div>
		</Router>
	);
}
