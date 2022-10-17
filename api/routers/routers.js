const express = require('express');
const { userRegistration, userLogin, updateProfile, delteTask, updateTaskStatus, selectTaskStatus, countStatus, createCb, isLoggedIn } = require('../controllers/userController');
const authVerify = require('../middleware/authVerifyMiddleware');
const multer = require('multer');
const path = require('path')

const router = express.Router();

// multer configer
const storage = multer.diskStorage({
    filename : (req,file,cb)=>{
    cb(null, Date.now() +'_'+ file.originalname)
    },
    destination: (req,file,cb)=>{
        cb(null,path.join(__dirname,'../uploads/photo/'))
    }
})


const upload = multer({
    storage
}).single('photo') 


router.get('/me', isLoggedIn)

router.post('/registration', upload, userRegistration)
router.post('/login',upload,userLogin)
router.patch('/updateProfile',authVerify,upload, updateProfile);




/* router.post('/createTask',authVerify, createCb)
router.get('/countStatus',authVerify, countStatus)
router.delete('/delteTask/:id',authVerify, delteTask)
router.patch('/updateTaskStatus/:id/:status',authVerify, updateTaskStatus)
router.get('/slectTaskStatus/:status',authVerify, selectTaskStatus) */

//router.get('/server',createUser)

module.exports = router