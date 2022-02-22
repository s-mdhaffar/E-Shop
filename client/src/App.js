import Product from './pages/Product';
import Home from './pages/Home';
import ProductList from './pages/ProductList';
import Register from './pages/Register';
import Login from './pages/Login';
import Cart from './pages/Cart';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Pay from './pages/Pay';
import Success from './pages/Success';

const App = () => {
	return (
		// <div>
		// 	<Home/>
		// </div>
		<BrowserRouter>
			<Switch>
				<Route path="/pay">
					<Pay/>
				</Route>
				<Route path="/success">
					<Success/>
				</Route>
			</Switch>
		</BrowserRouter>
	);
};

export default App;
