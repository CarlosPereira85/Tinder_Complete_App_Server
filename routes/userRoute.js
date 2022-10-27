import express from "express";
import { body } from "express-validator";
import { createUser} from "../user-controller/signupController.js";
import auth from "../middleware/auth.js";
import { loginUser, } from "../user-controller/loginController.js";
import{ updateUser } from "../user-controller/usersController.js";
import { getUser } from "../user-controller/usersController.js";
import {genderUsers} from "../user-controller/genderUsers.js";



const router = express.Router();


router.post("/signup", [
    
    body("password", "Password is required and length min 4 chars.")
      .isLength({ min: 4 })
      .custom((val, { req }) => {
        if (val !== req.body.confirm_password) {
          throw new Error("Password don't match!");
        } else {
          return val;
        }
      }),
  ], createUser
  
  );

  router.post("/login", loginUser);
  router.put("/user/:id", updateUser);
  router.get("/user/:id", getUser);

  router.get("/gendered-users",genderUsers); 







export default router;