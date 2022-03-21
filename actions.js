const { request } = require('express');
const express = require('express');
const router = express.Router();
let user=[];

router.get('/greeting',(req,res) => {
    return res.status(200).json({
        message:'Welcome to my api'
    });
})
router.get('/dd',(req,res) => {
    return res.status(200).json({
        Result:100*100
    });
})
router.post('/register',(req,res) => {
    //const user_email = req.body.email;
   // const user_password=req.body.password;
   const {email,password} = req.body;

   user.push({email:email , password:password});
    return res.status(200).json({
        message: user
    });
})


module.exports = router;// هي اهم نقطة في بناء الموقع ولا يجب نسيها