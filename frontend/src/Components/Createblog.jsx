import React, { useState } from 'react';
import '../Css/Blog.css';

const CreateBlog = ({setBlogs}) => {
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    if (!token) {
      console.log('User is not logged in or token is missing.');
      return;
    }
    try {
      const response = await fetch('http://localhost:4500/create-blog', {
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
        console.error(data.message);
      }
    } catch (error) {
      console.error('Error creating blog post:', error);
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
    </div>
  );
};
export default CreateBlog;
