import React, { useState } from 'react';
import '../Css/Blog.css';
import Modal from './Modal';
const CreateBlog = ({ setBlogs }) => {
  const [formData, setFormData] = useState({
    title: '',
    content: '',
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const closeModal = () => {
    setIsModalOpen(false);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    if (!token) {
      console.log('User is not logged in or token is missing.');
      return;
    }
    try {
      const response = await fetch('http://blogging-load-balancer-989706543.ap-south-1.elb.amazonaws.com:4500/create-blog', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: token,
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (response.ok) {
        console.log(data.message);
        setBlogs((prevBlogs) => [...prevBlogs, data.post]);
        setFormData({ title: '', content: '' });
      } else {
        setModalMessage('Log in first');
        setIsModalOpen(true);
      }
    } catch (error) {
      console.error('Error creating blog post:', error);
      setModalMessage(error.message);
      setIsModalOpen(true);
    }
  };

  return (
    <div className="create-blog-form" id='hero'>
      <h2>Create a New Blog Post</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="content">Content</label>
          <textarea
            id="content"
            name="content"
            value={formData.content}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className='publish'>Publish</button>
      </form>
      <Modal isOpen={isModalOpen} onClose={closeModal} message={modalMessage} />
    </div>
  );
};
export default CreateBlog;
