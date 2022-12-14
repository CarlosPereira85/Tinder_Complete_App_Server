import userModel from "../models/users.js";
import  jwt  from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { validationResult } from "express-validator";
import { v4 as uuidv4 } from 'uuid';
import { loginUser } from "./loginController.js";

export const createUser = async (req, res) => {
  const {email, password } = req.body;


  try {
    const errors = validationResult(req);
  
    if (!errors.isEmpty()) {
      return res.status(422).json({
        errors: errors.array().map((err) => err.msg),
      });
    }
    //Check if user already exisists
    let existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ msg: "User Already Exists!" });
    }
   const userId = uuidv4();
   console.log();

    //Create a new user
    const user = new userModel({
      userId,
      password,
      email,
    });

    console.log(user);

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt); //$sdkjakj23123jk123g12g

    await user.save();

   

    //Create a payload with user ID and may be firstName
    const payload = {
      user: {
        id: user._id,
        name: user.name,
        msg: "Hello",
      },
    };

    jwt.sign(payload, "randomString", { expiresIn: "1h" }, (err, token) => {
      if (err) throw err;
      res.status(200).json({ token, userId });
    });
  } catch (error) {
    res.status(500).send(error);
  }
}
