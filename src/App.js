import logo from "./logo.svg";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Header from './components/pages/Header';
// import Service from './components/pages/Service';
import "./components/css/style.css";
import Main from "./components/pages/Main";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Main/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
