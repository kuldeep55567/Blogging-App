import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Search from './Search';

const PostList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await fetch('http://blogging-load-balancer-989706543.ap-south-1.elb.amazonaws.com:4500/posts');
      const data = await response.json();
      setPosts(data);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };
  const formatDateTime = (dateTimeString) => {
    const options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
    };
    return new Date(dateTimeString).toLocaleString(undefined, options);
  };
  const handleSearch = async (searchQuery) => {
    try {
      if (searchQuery) {
        const response = await fetch(`http://blogging-load-balancer-989706543.ap-south-1.elb.amazonaws.com:4500/posts?search=${encodeURIComponent(searchQuery)}`);
        const data = await response.json();
        setPosts(data);
      } else {
        fetchPosts(); 
      }
    } catch (error) {
      console.error('Error fetching filtered posts:', error);
    }
  };

  return (
    <div id='container'>
      <Search onSearch={handleSearch} />
      <ul id='homepage'>
        {posts.map((post) => (
          <h3 key={post.id}>
            <h2>{post.title}</h2>
            <p>Date - {formatDateTime(post.createdAt)}</p>
            <Link to={`/post/${post.id}`}>Read More</Link>
            <p id='names' className='naming'>By : {post.userName}</p>
          </h3>
        ))}
      </ul>
    </div>
  );
};
export default PostList;
