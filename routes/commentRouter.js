const express = require('express');
const router = express.Router();
const commentController = require("../controller/commentController.js")

router.get('/All', commentController.getAllComments);


