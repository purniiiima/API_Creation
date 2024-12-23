# **Text Storage API**

A simple Node.js and Express application that provides an API for storing and retrieving text.

## **Features**

- **POST `/text`**: Save a plain text string to the server.
- **GET `/text`**: Retrieve the stored text from the server.

## **Requirements**
- **Node.js** (v14 or higher)
- **npm** (v6 or higher)

## **Installation**

1. Clone the repository:
   ```bash
   git clone <https://github.com/purniiiima/API_Creation.git>
   ```  

2. Navigate to the project directory:
   ```bash
   cd <APIII>
   ```

3. Install the dependencies:
   ```bash
   npm install
   ```

## **Usage**

### **Start the Server**

1. Run the server:
   ```bash
   node app.js
   ```

2. The server will start at <http://localhost:3000>

## **API Endpoints**

1. Save Text

- **URL**: /text
- **Method**: POST
- **Headers**:
    - Content-Type: text/plain
- **Body**:
    - Provide plain text in the request body.
- **Response**:
    - 201 Created on successful storage of text.
    - 400 Bad Request if the request body is empty.

2. Retrieve Text

- **URL**: /text
- **Method**: GET
- **Response**:
    - 200 OK with the stored text.
    - 404 Not Found if no text is stored.

## **Example Requests**

### **Save Text**
    ```bash
    curl -X POST -H "Content-Type: text/plain" -d "Hello, World!" http://localhost:3000/text
    ```

### **Retrieve Text**
    ```bash 
    curl -X GET http://localhost:3000/text
    ```

## **Project Structure**

    ```bash
    project-directory/
    ├── app.js         # Main application file
    ├── package.json   # Project metadata and dependencies
    └── .gitignore     # Ignored files for version control
    ```

## **Technologies Used**

- **Node.js**: JavaScript runtime for building the server.
- **Express**: Web framework for defining routes and handling requests.
- **body-parser**: Middleware for parsing plain text request bodies.

## **Contributing**

Contributions are welcome! Feel free to fork the repository and submit a pull request.

