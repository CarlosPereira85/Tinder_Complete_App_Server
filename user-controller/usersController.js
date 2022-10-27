import usersModel from "../models/users.js";



export const createUser = async (req, res) => {
    //code here
    try {
      const user = new usersModel(req.body);
      await user.save();
      res.status(200).json({ profile: user });
    } catch (error) {
      console.log(error.profile);
    }
  };


  // update user
  export const updateUser = async (req, res) => {
    const formData = req.body.formData
    const userId  = req.params.id
    console.log(formData);
    try {
      const user = await usersModel.findOneAndUpdate({userId}, formData, { new: true });
        
      ;
      res.status(200).json({ profile: user });
    } catch (error) {
      console.log(error.profile);
    }
  }

  export const getUser = async (req, res) => {
    const userId = req.params.id
    // console.log(userId)
    try {
      const user = await usersModel.findOne({userId});
      res.status(200).json({ profile: user });
      
    } catch (error) {
      console.log(error.profile);
    }
   
    ;
  }
 