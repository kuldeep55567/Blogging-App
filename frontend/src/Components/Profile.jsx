import React, { useState, useEffect } from 'react';
import ProfileSection from './Myblogs';
import CreateBlog from './Createblog';
const Profile = () => {
const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      console.log('User is not logged in or token is missing.');
      return;
    }
    fetch('http://blogging-load-balancer-989706543.ap-south-1.elb.amazonaws.com:4500/myblogs', {
      headers: {
        Authorization: token,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setBlogs(data);
      })
      .catch((error) => {
        console.error('Error fetching blogs:', error);
      });
  }, []);

  return (
    <div>
      <ProfileSection blogs={blogs} setBlogs={setBlogs}/>
      <CreateBlog setBlogs={setBlogs} />
    </div>
  );
};

export default Profile;