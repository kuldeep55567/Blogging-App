import React, { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import Modal from './Modal';
const Login = ({setIsLoggedIn}) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const navigate = useNavigate()
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://3.108.252.117:4500/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        setModalMessage('Login Successfull');
        setIsModalOpen(true);
        localStorage.setItem('token', data.token);
        setIsLoggedIn(true);
        navigate('/profile');
      } else {
        console.error(data.message);
      }
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
        <Modal isOpen={isModalOpen} onClose={closeModal} message={modalMessage} />
      <p>Don't have an Account ? <span><Link to="/signup">Signup</Link></span></p>
    </div>
  );
};
export default Login;
