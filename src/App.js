import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import SignUp from './auth/Signup';
import Login from './auth/Login';


function App() {
  return (
   <Router>

    <div>
      <Routes>
        <Route path="/" element={<SignUp/>} />
        <Route path="/login" element={<Login/>} />

       
      </Routes>
    </div>
   </Router>
  );
}

export default App;
