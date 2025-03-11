# MERN-CRUD

A simple CRUD application built with the MERN stack (MongoDB, Express, React, Node.js).


## Getting Started

### Prerequisites

- Node.js
- npm (Node Package Manager)
- MongoDB

### Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/your-username/mern-crud.git
    cd mern-crud
    ```

2. Install backend dependencies:
    ```sh
    cd backend
    npm install
    ```

3. Create a `.env` file in the root directory and add your MongoDB URI:
    ```
    MONGO_URI=your_mongodb_uri
    ```

### Running the Application

1. Start the backend server:
    ```sh
    npm run dev
    ```

2. The server will start at `http://localhost:5000`.

3. Open a new terminal and navigate to the `frontend` directory:
    ```sh
    cd frontend
    ```

4. Install frontend dependencies:
    ```sh
    npm install
    ```

5. Start the frontend server:
    ```sh
    npm start
    ```
    
6. The frontend server will start at `http://localhost:3000`.

## Built With

- [Express](https://expressjs.com/) - Web framework for Node.js
- [Mongoose](https://mongoosejs.com/) - MongoDB object modeling for Node.js
- [dotenv](https://www.npmjs.com/package/dotenv) - Loads environment variables from a [.env](http://_vscodecontentref_/4) file
- [chakra-ui](https://chakra-ui.com/) - Simple, Modular & Accessible UI Components for your React Applications

## License

This project is licensed under the ISC License.
