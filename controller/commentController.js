const {commentModel} = require("../model/commentModel.js");  // Assuming your model is in the 'model' folder
const {postModel} = require("../model/postModel.js");
const { post } = require("../routes/postsRouter.js");

const getAllComments = async (req, res) => {
    try {
      const comments = await commentModel.find();
      res.status(200).json(comments);
    } catch (error) {
      res.status(400).json({ message: "Error fetching comments", error: error.message });
    }
  };

  module.exports = {getAllComments}