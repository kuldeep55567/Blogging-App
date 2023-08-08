# HubSpot - Online Blogging Application

HubSpot is an online blogging application where users can read and create blogs on various topics. We are dedicated to providing a platform where users can engage, learn, and share their knowledge with the global community. We believe in the power of diverse perspectives, and our mission is to empower individuals like you to showcase your expertise, passions, and unique insights through the art of blogging.

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

- `POST http://3.108.252.117:4500/signup`: Register a new user.
- `POST http://3.108.252.117:4500/login`: Log in an existing user.

### Blog Post Routes

- `GET http://3.108.252.117:4500/posts/:id?`: Retrieve all blog posts or specific posts by ID. Supports searching by a query parameter.
- `GET http://3.108.252.117:4500/post/:postId/comments`: Get all comments for a specific blog post.
- `POST http://3.108.252.117:4500/create-blog`: Create a new blog post. Requires user authentication.
- `POST http://3.108.252.117:4500/post/:postId/comment`: Add a comment to a specific blog post. Requires user authentication.
- `POST http://3.108.252.117:4500/post/:postId/like`: Like a specific blog post. Requires user authentication.

### User-Specific Routes

- `GET http://3.108.252.117:4500/myblogs`: Retrieve all blog posts created by the logged-in user. Requires user authentication.

## Getting Started

1. Clone the repository: `git clone <repository_url>`
2. Install dependencies: `npm install`
3. Set up your MySQL database and update the connection configuration in `config/db.js`.
4. Set the .env file
5. Start the server: `npm start
6. Access the application in your web browser at `http://localhost:3000`

```dotenv
DB=<database_name>
USER=<database_user>
PASSWORD=<database_password>
HOST=<database_host>
DIALECT=mysql
PORT=<database_port>
SECRET_KEY=<your_secret_key>

## Contributors

- [Your Name](https://github.com/kuldeep55567)

Feel free to contribute to this project by submitting issues or pull requests. Happy blogging with HubSpot!
