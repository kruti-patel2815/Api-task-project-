let jwt = require('jsonwebtoken')
let USER = require('../model/user')
exports.AuthTest = async(req, res, next) => {
    try {
        const token = req.headers.authorization
        // console.log(token);

        if (!token) throw new Error('Attach token')

        const tVerify = jwt.verify(token, 'surat')
        // console.log('====================================');
        console.log(tVerify);
        // console.log('====================================');
        if(!tVerify) throw new Error('Invalid token')

        const userVerify = await USER.findById(tVerify.id)
        console.log('====================================');
        console.log(userVerify);
        console.log('====================================');

        if(!userVerify) throw new Error('Invalid USER')

        next()


    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: error.message
        })
    }
}