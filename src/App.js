import React from "react";
import Main from "./component/Main";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "/node_modules/bootstrap/dist/js/bootstrap.min.js";

import Home from "./Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import ClientsView from "./component/client/ClientsView";
import NavBar from "./component/common/NavBar";

import {
	BrowserRouter as Router,
	Routes,
	Route,
} from "react-router-dom";
import AddClient from "./component/client/AddClient";
import EditClient from "./component/client/EditClient";
import ClientProfile from "./component/client/ClientProfile";

function App() {
	return (
	
			<main className="container mt-5">
		
			<Router><Main />
			
			<NavBar />
			
				<Routes>
					<Route 
						exact
						path="/"
						element={<Home />}></Route>
					<Route
						exact
						path="/view-clients"
						element={<ClientsView />}></Route>
					<Route
						exact
						path="/add-clients"
						element={<AddClient />}></Route>
					<Route
						exact
						path="/edit-client/:id"
						element={<EditClient />}></Route>
					<Route
						exact
						path="/client-profile/:id"
						element={<ClientProfile />}></Route>
						
				</Routes>
			</Router>
			
		</main>
	);
}

export default App;