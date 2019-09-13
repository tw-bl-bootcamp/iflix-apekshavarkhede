const userservice = require('../Services/services')
exports.loginCtrl = (req, res) => {
    const responseResult = {}
    req.checkBody('email').isEmail()
    req.checkBody('password').isLength({
        min: 7
    })

    var errors = req.validationErrors()
    if (errors) {
        let result = {
            'status': 422,
            'message': 'Error in validations',
            'data': errors
        }
        res.send(result)
    } else {
        userservice.loginService(req.body, (err, data) => {
            if (err) {
                let result = {
                    'status': 404,
                    'message': 'login data is not correct',
                    'data': error
                }
                response.send(result)
            }
            let result = {
                'status': 200,
                'message': 'login Successful',
                'data': data
            }
            response.send(result)

        })
    }
}



