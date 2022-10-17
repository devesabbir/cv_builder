const mongoose = require("mongoose");

const cbScheama = mongoose.Schema(
{
    title : {
        type : String
    },
    description : {
        type : String
    },
    status : {
        type : String
    },
    email : {
        type : String
    },
    mobile : {
        type : String
    },
},{
    versionKey : false
}
);


module.exports = mongoose.model('CB',cbScheama)