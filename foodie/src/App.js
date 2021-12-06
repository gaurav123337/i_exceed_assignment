import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import Entry from "pages/Entry";
import Header from "components/Header";
import ShowProducts from "./pages/ShowProducts";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <Routes>
          <Route path="/" element={<Entry />} />
          <Route path="/home" element={<ShowProducts />} />
        </Routes>
      </div>
    </Router>

  );
}

export default App;
