import React,{useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
const ProfileSection = ({ blogs }) => {
  const [commentCounts, setCommentCounts] = useState({});
  useEffect(() => {
    fetch('http://localhost:4500/posts/with-comments')
      .then((response) => response.json())
      .then((data) => {
        const commentCounts = {};
        data.forEach((post) => {
          commentCounts[post.id] = post.commentCount;
        });
        setCommentCounts(commentCounts);
      })
      .catch((error) => {
        console.error('Error fetching comment counts:', error);
      });
  }, []);
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
  return (
    <div className="profile-section">
      <h1>My Recent Blogs</h1>
      {blogs.length > 0 ? (
        <ul>
          {blogs.map((blog) => (
            <div key={blog.id} className='myblog'>
              <h2>{blog.title}</h2>
              <p>Date : {formatDateTime(blog.createdAt)}</p>
              <Link to={`/post/${blog.id}`}>Read More</Link>
            </div>
          ))}
        </ul>
      ) : (
        <p id='not'>No blogs found for the user.</p>
      )}
    </div>
  );
};
export default ProfileSection;
