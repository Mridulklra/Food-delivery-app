<<<<<<< HEAD
// import Login from './screens/login';
import './App.css';
import Login from './screens/Login';
import Home from './screens/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
=======
import Login from './screens/login';
import './App.css';
import Home from './screens/home';
>>>>>>> 7d8b5ec7cb1876f4f397f687e978f20ab2b0b9bf
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
<<<<<<< HEAD
    <>
   <Router>
    <Routes>
    <Route  exact path="/" element={<Home/>}/>
    <Route exact path="/login" element={<Login/>}/>
    </Routes>
   </Router>
    </>
    
=======
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
      </Routes>
    </Router>
>>>>>>> 7d8b5ec7cb1876f4f397f687e978f20ab2b0b9bf
  );
}

export default App;
