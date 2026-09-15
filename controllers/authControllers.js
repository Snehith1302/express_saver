const login=(req,res)=>{
    res.json({
        message:"login"
    })
}

const signup=(req,res)=>{
    res.json({
        message:"Sign up"
    })
}

module.exports={
    login,
    signup
}