import usersModel from "../models/users.js";


export const genderUsers = async (req, res) => {
const gender = req.query.gender

try {
    const query= {gender_identity: {$eq : "man"}}
    const foundUsers = await usersModel.find(query);
  
    res.status(200).json({ foundUsers });


} catch (error) {
    console.log(error);
}
};



  