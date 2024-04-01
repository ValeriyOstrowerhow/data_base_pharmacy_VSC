import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "/node_modules/bootstrap/dist/js/bootstrap.min.js";
import "./App.css";
import Home from "./Home";
import StudentsView from "./component/client/ClientsView";
import NavBar from "./component/common/NavBar";
import {
	BrowserRouter as Router,
	Routes,
	Route,
} from "react-router-dom";
import AddClient from "./component/student/AddClient";
import EditClient from "./component/student/EditClient";
import ClientPofile from "./component/student/ClientProfile";

function App() {
	return (
		<main className="container mt-5">
			<Router>
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