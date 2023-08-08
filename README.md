# MarkHub - Online Blogging Application

MarkHub is an online blogging application where users can read and create blogs on various topics. It provides a platform for users to share their thoughts and insights with the community. The application is built using a modern tech stack including React, Node.js, Express, MySQL, AWS EC2, and RDS.

## Features

1. **User Authentication:** Only logged-in users have the ability to create and publish their own blogs.

2. **JWT Authentication:** User authentication is handled using JSON Web Tokens (JWT) for secure and stateless communication.

3. **Commenting System:** Users can engage in discussions by commenting on blog posts.

4. **Search Functionality:** Users can easily search for their favorite topics or specific blog posts.

## Tech Stack

- React: A popular JavaScript library for building user interfaces.
- Node.js: A runtime environment for executing server-side JavaScript code.
- Express: A minimal and flexible Node.js web application framework.
- MySQL: A relational database management system for storing blog data.
- AWS EC2: Elastic Compute Cloud provides scalable computing capacity in the AWS cloud.
- AWS RDS: Relational Database Service offers managed database solutions.
- JSON Web Tokens (JWT): A compact, URL-safe means of representing claims between two parties.
- Sequelize: An ORM (Object-Relational Mapping) for Node.js and MySQL.

## Routes

### User Routes

- `POST /signup`: Register a new user.
- `POST /login`: Log in an existing user.

### Blog Post Routes

- `GET /posts/:id?`: Retrieve all blog posts or a specific post by ID. Supports searching by query parameter.
- `GET /post/:postId/comments`: Get all comments for a specific blog post.
- `POST /create-blog`: Create a new blog post. Requires user authentication.
- `POST /post/:postId/comment`: Add a comment to a specific blog post. Requires user authentication.
- `POST /post/:postId/like`: Like a specific blog post. Requires user authentication.

### User-Specific Routes

- `GET /myblogs`: Retrieve all blog posts created by the logged-in user. Requires user authentication.

## Getting Started

1. Clone the repository: `git clone <repository_url>`
2. Install dependencies: `npm install`
3. Set up your MySQL database and update the connection configuration in `config/config.js`.
4. Start the server: `npm start`
5. Access the application in your web browser at `http://localhost:3000`

## Contributors

- [Your Name](https://github.com/yourusername)

## License

This project is licensed under the [MIT License](LICENSE).

---

Feel free to contribute to this project by submitting issues or pull requests. Happy blogging with MarkHub!
