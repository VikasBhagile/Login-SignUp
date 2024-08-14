import LoginForm from './components/Assets/loginpage/LoginForm';
import './App.css';
import SignUp from './components/Assets/loginpage/SignUp';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Forgetpassword from './components/Assets/loginpage/Forgetpassword';

function App() {
  return (
    <Router>
    <Routes>
    <Route path="/" element={<SignUp />} />
    <Route path="/login" element={<LoginForm />} />
    <Route path="/forgot-password" element={<Forgetpassword />} />
    </Routes>
  </Router>
  );
}

export default App;
