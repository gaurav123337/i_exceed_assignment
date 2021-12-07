import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import { Provider } from "react-redux";
import store from "reducers/store";

import Entry from "pages/Entry";
import Header from "components/Header";
import ShowProducts from "./pages/ShowProducts";
import MyCart from "pages/MyCart";

function App() {

  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<Entry />} />
            <Route exact path="/home" element={<ShowProducts />} />
            <Route exact path="/myCart" element={<MyCart />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
