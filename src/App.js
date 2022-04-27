import logo from "./logo.svg";
import "antd/dist/antd.css";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";

import "./App.css";
import Layout from "./components/Layout";

function App() {
	return (
		<div className="App">
			<Router>
				<Layout>
					<Routes>
						<Route path="/" element={<Dashboard />} />
					</Routes>
				</Layout>
			</Router>
		</div>
	);
}

export default App;
