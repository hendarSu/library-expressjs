const express = require("express");
const authController = require("../controllers/authController");
const auth = express.Router();

auth.get("/login", authController.index);
auth.post('/login', authController.login);
auth.get("/logout", authController.logout);

module.exports = auth;