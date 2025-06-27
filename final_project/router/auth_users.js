const express = require('express');
const jwt = require('jsonwebtoken');
let books = require("./booksdb.js");
const regd_users = express.Router();

let users = [];

const isValid = (username)=>{ //returns boolean
//write code to check is the username is valid
}

const authenticatedUser = (username,password)=>{ //returns boolean
//write code to check if username and password match the one we have in records.
}

//only registered users can login
regd_users.post("/login", (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({ message: "Username and password are required" });
  }
  // Find user
  const user = users.find(user => user.username === username && user.password === password);
  if (!user) {
    return res.status(401).json({ message: "Invalid username or password" });
  }
  // Generate JWT
  const accessToken = jwt.sign({ username }, "fingerprint_customer", { expiresIn: '1h' });
  // Save in session
  req.session.authorization = { accessToken, username };
  return res.status(200).json({ message: "Login successful", accessToken });
});

// Add a book review
regd_users.put("/auth/review/:isbn", (req, res) => {
  const isbn = req.params.isbn;
  const review = req.query.review;
  // Get username from session
  let username;
  if (req.session && req.session.authorization && req.session.authorization.username) {
    username = req.session.authorization.username;
  } else {
    return res.status(403).json({ message: "User not logged in" });
  }
  if (!review) {
    return res.status(400).json({ message: "Review is required" });
  }
  const book = books[isbn];
  if (!book) {
    return res.status(404).json({ message: "Book not found" });
  }
  // Add or modify review
  book.reviews[username] = review;
  return res.status(200).json({ message: "Review added/modified successfully", reviews: book.reviews });
});

regd_users.delete("/auth/review/:isbn", (req, res) => {
  const isbn = req.params.isbn;
  // Get username from session
  let username;
  if (req.session && req.session.authorization && req.session.authorization.username) {
    username = req.session.authorization.username;
  } else {
    return res.status(403).json({ message: "User not logged in" });
  }
  const book = books[isbn];
  if (!book) {
    return res.status(404).json({ message: "Book not found" });
  }
  if (book.reviews[username]) {
    delete book.reviews[username];
    return res.status(200).json({ message: "Review deleted successfully", reviews: book.reviews });
  } else {
    return res.status(404).json({ message: "Review not found for this user" });
  }
});

module.exports.authenticated = regd_users;
module.exports.isValid = isValid;
module.exports.users = users;
