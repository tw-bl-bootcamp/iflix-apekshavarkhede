const userModel = require('../Model/userModel');
class userService {
    loginService(data, callback) {
        userModel.login(data, (err, result) => {
            if (err) {
                return callback(err)
            } else {
                return callback(null, result);
            }
        })
    }
}
module.exports = new userService

















/****
 * 
 * 
 * const userModel=require('../app/model/usermodels');
  class userService{
    loginService(data,callback)
    {    
   try
       {    
        userModel.login(data,(err,result)=>{
            if(err){
                console.log(err);
                callback(err);
            }
            else{
                return callback(null,result);
            }
    
        })
    }
catch(err)
{
    console.log(err)
}
    }
 */