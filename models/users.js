import mongoose from "mongoose";




const UsersSchema = new mongoose.Schema({
   
    
    userId: {
        type: String,
        required: true,
        unique: true
    },
    first_name: {
       type: String,
       trim: true,
       lowercase: true
    },
    dob_day: {
       type: Number
    },
    dob_month: {
       type: Number
    },
    dob_year: {
       type: Number,
    },
    show_gender: {
      type: Boolean
    },
    gender_identity: {
        type: String
    },
    gender_interest: {
        type: String,
    },
    url: {
        type: String,
    },
    about: {
        type: String
    },
    email: {
       type: String,
       
       
    },
    password: {
        type: String,
    
    },
    matches: [{
        match: {
            type: String
        }
    }]
    }, {
    timestamps: true
    })

const usersModel = mongoose.model("User", UsersSchema);

export default usersModel;