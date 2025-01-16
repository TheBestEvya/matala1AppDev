const userModel = require("../model/userModel.js")

const getAllUsers = async (req , res)=>{
    try {
        const users = await userModel.find();
        res.status(200).json(users);
      } catch (error) {
        res.status(500).json({ message: "Error fetching users", error: error.message });
      }
}
const getUser = async (req , res)=>{
    try {
        const id = req.params.id
        const user = await userModel.findById(id);
        if (!user) {
          res.status(400).json({ message: "User not found" });
          return;
        }
        res.status(200).json(user);
      } catch (error) {
        res.status(500).json({ message: "Error fetching users", error: error.message });
      }
}
const createUser = async(req,res)=>{
    try {
        const newUser = new userModel(req.body)
        const savedUser = await newUser.save()
        res.status(201).json({ message: "User created successfully", user: savedUser });
      } catch (error) {
        res.status(500).json({ message: "Error creating user", error: error.message });
      }
}

module.exports = {getAllUsers, getUser ,   createUser}

