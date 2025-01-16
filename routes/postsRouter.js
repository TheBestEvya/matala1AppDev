const express = require("express");
const router = express.Router();
const postController = require("../controller/postsController.js")

router.get("/All",postController.getAllposts)

router.get("/:id", postController.getPost)

router.get("/", postController.getPostBySender)

router.post("/create", postController.createPost)

router.put("/update/:id", postController.updatePost)

router.delete("/delete", postController.deletePost)




module.exports = router;