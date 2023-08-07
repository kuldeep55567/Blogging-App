import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Login from './Components/Login';
import Signup from './Components/Signup';
import PostList from './Components/Homepage';
import BlogDetails from './Components/BlogDetails';
import Profile from './Components/Profile';
import About from './Components/About';
import ContactPage from './Components/Contact';
import Footer from './Components/Footer'
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<PostList />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<About/>} />
        <Route path="/post/:postId" element={<BlogDetails />} />
      </Routes>
      {/* <Footer/> */}
    </BrowserRouter>
  );
}

export default App;
