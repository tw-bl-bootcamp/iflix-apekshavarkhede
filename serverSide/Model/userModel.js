const mongoose = require('mongoose');
const Schema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, 'email required']
    },
    password: {
        type: String,
        required: [true, 'password required'],
        length: {
            min: 7
        }
    },
})
const user = mongoose.model('users', Schema)
class user_model {
    login(data, callback) {
        console.log("in models");
        user.findOne({
            "email": data.email,
            "password": data.password
        }, (err, result) => {
            if (err) {
                return callback(err);
            }
            if (result == null) {
                return callback(err)
            }
            if (result != null) {
                console.log("result==", result);
                return callback(null, result)
            }
        })
    }
}
var usermodel = new user_model();
module.exports = usermodel;