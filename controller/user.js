const USER = require('../model/user');
let bcrypt = require('bcrypt')
let jwt = require('jsonwebtoken')
exports.pageview = async (req, res) => {
    try {
        const data = await USER.find()
        res.status(200).json({
            status: 'Success',
            message: 'Data found',
            data: data
        })
    } catch (error) {
        res.status(404).json({
            status: 'Fail',
            message: error.message
        })
    }
};


exports.createData = async (req, res) => {
    try {

        const data = req.body
        data.profile = req.file.filename
        data.password = await bcrypt.hash(data.password, 10)
        const user = await USER.create(data)
        console.log("====", user);
        res.status(201).json({
            status: 'Success',
            message: 'Data create success',
            data: user
        })
    } catch (error) {
        res.status(404).json({
            status: 'Fail',
            message: error.message
        })
    }


};


exports.deleteData = async (req, res) => {
    try {
        const deleteId = req.params.id

        const deleteUser = await USER.findByIdAndDelete(deleteId)

        res.status(200).json({
            status: 'Success',
            message: 'Data delete success',
            data: deleteUser
        })

    } catch (error) {
        res.status(404).json({
            status: 'Fail',
            message: error.message
        })
    }
};


exports.editData = async (req, res) => {
    try {
        const editId = req.params.id

        const editUser = await USER.findByIdAndUpdate(editId, req.body, { new: true })
        res.status(200).json({
            status: 'Success',
            message: 'Data update success',
            data: editUser
        })
    } catch (error) {
        res.status(404).json({
            status: 'Fail',
            message: error.message
        })
    }
};


exports.login = async(req , res) => {
    try {
        const data = req.body
        const emailVerify = await USER.findOne({ email: data.email })
        if (!emailVerify) throw new Error("Invalid email")

        const passVerify = await bcrypt.compare(data.password, emailVerify.password)

        if (!passVerify) throw new Error("Invalid Password")

        const token = jwt.sign({id : emailVerify._id} , 'surat')

            res.status(200).json({
                status: 'Success',
                message: 'login Success',
                data: emailVerify,
                token
            })
    } catch (error) {
        res.status(404).json({
            status: 'Fail',
            message: error.message
        })
    }
}