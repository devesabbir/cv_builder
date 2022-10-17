const mongoose = require("mongoose");

const userScheama = mongoose.Schema(
 {
    email : {
        type : String,
        unique : true
    },
    firstName : {
        type : String
    },
    lastName : {
        type : String
    },
    mobile : {
        type : String
    },
    password : {
        type : String
    },
    photo : {
        type : String,
        default : "https://res.cloudinary.com/dtcoomque/image/upload/v1663317145/vz7iz88hfniwxejirvjw.png"
    },
    profile : {
        type : String
    },
    createdDate : {
        type : Date,default:Date.now()
    }
 
},{
   timestamps: true
}
);


module.exports = mongoose.model('User',userScheama)