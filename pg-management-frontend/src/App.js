import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import UserHome from './pages/UserHome';
import AdminHome from './pages/AdminHome';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/user/home" element={<UserHome />} />
        <Route path="/admin/home" element={<AdminHome />} />
      </Routes>
    </Router>
  );
}

export default App;
