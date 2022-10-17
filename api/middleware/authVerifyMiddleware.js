const jwt = require('jsonwebtoken');
const createError = require('../controllers/errorController');
const User = require("../model/userModel");

const authVerify = async (req,res,nex)=>{
    try{
        let barar_token = req.headers.authorization;
    
        if(!barar_token){
            nex(createError(401,"unauthorized"))
        }
        let token = ''
        if(barar_token){
            token = req.headers.authorization.split(' ')[1];

             let verify_token = jwt.verify(token,process.env.JWT_SECRET);
 
             if(!verify_token){
                nex(createError(401,"invalid token"));
             }
             if(verify_token){ 
                const {email} = verify_token
                req.user = await User.findOne({email : email})
                nex()
             }
            
    
    
        }
    }catch(error){
        nex(error)
    }

}

module.exports = authVerify