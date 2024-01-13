const {Users}= require('../../db');

const loginUser= async(data)=>{
    const {email, password}= data;

    const user= await Users.findOne({
        where:{email, password}
    });

    if(user.isBanned){
        throw new Error('Usuario Baneado');
    } else if(user.isThirdPartyAuth){
        const userGoogle= await Users.findOne({
            where:{email}
        })
        if(userGoogle){
            return userGoogle;
        }
    }

    return user;
}

module.exports= loginUser;