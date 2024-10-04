// import Login from './screens/login';
import './App.css';
import Login from './screens/Login';
import Home from './screens/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <>
   <Router>
    <Routes>
    <Route  exact path="/" element={<Home/>}/>
    <Route exact path="/login" element={<Login/>}/>
    </Routes>
   </Router>
    </>
    
  );
}

export default App;
