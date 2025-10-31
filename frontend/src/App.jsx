import { Navbar } from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/(auth)/Login";
import Profile from "./pages/(auth)/Profile";
import Create from './pages/Create';
import Register from './pages/(auth)/Register';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/create" element={<Create />} />
        <Route path="/register" element={<Register />} />

      </Routes>
    </Router>
  );
}



export default App
