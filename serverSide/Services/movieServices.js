const movieModel = require('../Model/movieModel')
class movieServices  {

     movieList(data,callback){
         movieModel.showMovieList(data, (error,result) =>{
               if(error){
                    return callback(error)
               }
                 
               Console.log("result in movieServices" ,result);
               return callback(null,result)
         })
     }
}

let services = new movieServices()
module.exports = services ;


