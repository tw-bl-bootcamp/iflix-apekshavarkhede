const userservice = require('../Services/services')
exports.loginCtrl = (req, res) => {
    const responseResult = {}
    req.checkBody('email').isEmail()
    req.checkBody('password').isLength({
        min: 7
    })
    var errors = req.validationErrors()
    if (errors) {
        responseResult.err = errors;
        responseResult.status = false;
        res.status(400).send(responseResult)
    } else {
        userservice.loginService(req.body, (err, result) => {
            if (err) {
                responseResult.err = err;
                responseResult.status = false;
                res.status(400).send(responseResult)
            } else {
                responseResult.data = result;
                responseResult.status = true;
                res.status(200).send(responseResult)
            }
        })
    }
}