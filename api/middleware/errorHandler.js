const errorHandler = (error,req,res,next)=>{
    
    const errorstatus = error.status || 500;
    const errormessage = error.message || 'unknown error';

   return res.status(errorstatus).json({
        message : errormessage,
        status : errorstatus,
        stack : error.stack
    })

}

module.exports = errorHandler