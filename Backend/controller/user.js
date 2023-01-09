const User=require('../model/user')
const bcrypt=require('bcrypt')
exports.signup=async (req,res)=>{
    console.log(req.body);
    const { username, email,phone,password }=req.body
    const user=await User.findOne({where:{email:email}})
    if(user!==null){
        return res.status(400).json({msg:'User already exists'})
    }
    if(username=='' || email=='' || phone=='' || password==''){
        return res.status(400).json({err:'Something is missing'})
    }
    bcrypt.hash(password,10,async(err,hash)=>{
            if(err){
                console.log(err);
                res.status(400).json({err:'Something Went Wrong'})
            }else{
                await User.create({
                    username:username,
                    email:email,
                    phone:phone,
                    password:hash
                })
                res.status(201).json({sucess:true,msg:'User created successful'})
            }

        })
    
}