// What is MongoDB?
// MongoDB is a NoSQL database that stores data in a flexible, JSON-like format called BSON (Binary JSON). Unlike traditional relational databases, MongoDB allows for a more dynamic schema, meaning you can store documents with different structures in the same collection. This flexibility makes it suitable for applications where the data structure may evolve over time.

// Key Features of MongoDB:
// Document-Oriented: Data is stored in documents (similar to JSON), which can have nested structures.

// Scalability: MongoDB supports horizontal scaling through sharding, allowing it to handle large amounts of data.

// High Availability: It provides replication features to ensure data availability and redundancy.

// Flexible Schema: You can easily change the structure of documents without affecting existing data.

// What is Mongoose?
// Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js. It provides a schema-based solution to model your application data, making it easier to work with MongoDB in a structured way. Mongoose allows you to define schemas for your data, which can enforce data validation, type checking, and relationships between documents.

// Key Features of Mongoose:

// Schemas: Define the structure of documents in a collection.

// Validation: Enforce rules on data before saving it to the database.

// Middleware: Support for pre and post hooks for various operations (e.g., save, remove).

// Query Building: Provides a powerful query API to interact with the database.

// How to Connect MongoDB and Mongoose
// Step 1: Install MongoDB
// Download and Install MongoDB: You can download MongoDB from the official website.
// Start MongoDB: After installation, start the MongoDB server using the command:

// mongod
// Step 2: Set Up a Node.js Project
// Create a New Directory:


// Verify
// Copy code
// mkdir myapp
// cd myapp
// Initialize a Node.js Project:




// npm init -y
// Install Mongoose:


// Verify
// Copy code
// npm install mongoose
// Step 3: Connect to MongoDB Using Mongoose
// Create a Connection: In your project directory, create a file named app.js and add the following code to connect to MongoDB:

// javascript

// const mongoose = require('mongoose');

// // Replace 'mydatabase' with your database name
// const uri = 'mongodb://localhost:27017/mydatabase';

// mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => {
//     console.log('MongoDB connected successfully');
//   })
//   .catch(err => {
//     console.error('MongoDB connection error:', err);
//   });
// Run the Application:

// bash

// Verify
// Copy code
// node app.js
// If the connection is successful, you should see the message "MongoDB connected successfully".

// Step 4: Define a Mongoose Schema and Model
// Create a Schema: Add the following code to app.js to define a schema for a User :

// javascript

// Verify
// Copy code
// const userSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   email: { type: String, required: true, unique: true },
//   age: { type: Number, min: 0 }
// });

// const User = mongoose.model('User ', userSchema);
// Create and Save a Document: You can now create a new user and save it to the database:

// javascript

// Verify
// Copy code
// const newUser  = new User({
//   name: 'John Doe',
//   email: 'john@example.com',
//   age: 30
// });

// newUser .save()
//   .then(() => {
//     console.log('User  saved successfully');
//   })
//   .catch(err => {
//     console.error('Error saving user:', err);
//   });
// Step 5: Querying the Database
// You can also query the database using Mongoose. For example, to find all users:

// javascript

// Verify
// Copy code
// User .find()
//   .then(users => {
//     console.log('All Users:', users);
//   })
//   .catch(err => {
//     console.error('Error fetching users:', err);
//   });
// Summary
// MongoDB is a NoSQL database that stores data in a flexible, document-oriented format.
// Mongoose is an ODM library that provides a schema-based solution to model your data and