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

### API Endpoints work so far

- **Create Product**
    - **URL:** `/api/products`
    - **Method:** `POST`
    - **Body:**
        ```json
        {
            "name": "Product Name",
            "price": 100,
            "image": "image_url"
        }
        ```
    - **Response:**
        ```json
        {
            "success": true,
            "data": {
                "_id": "product_id",
                "name": "Product Name",
                "price": 100,
                "image": "image_url",
                "createdAt": "timestamp",
                "updatedAt": "timestamp"
            }
        }
        ```

## Built With

- [Express](https://expressjs.com/) - Web framework for Node.js
- [Mongoose](https://mongoosejs.com/) - MongoDB object modeling for Node.js
- [dotenv](https://www.npmjs.com/package/dotenv) - Loads environment variables from a [.env](http://_vscodecontentref_/4) file

## License

This project is licensed under the ISC License.
