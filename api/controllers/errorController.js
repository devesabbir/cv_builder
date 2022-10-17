
const createError = (status,msg)=>{
    let error = new Error()
    error.status = status
    error.message = msg
    return error
}
module.exports = createError