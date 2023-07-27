import userModel from '../models/user.model';

module.exports = {
    getUsers: async function (req, res) {
        /* Get User By Id */
        if (req.query.userId) {
            if (JSON.parse(req.query.detail)) {
                let result = await userModel.getUserDetailById(req.query.userId);
                if (result.status) {
                    return res.status(200).json(
                        {
                            message: result.message,
                            data: result.data
                        }
                    )
                } else {
                    return res.status(500).json({
                        message: result.message,
                    })
                }
            } else {
                let result = await userModel.getUserById(req.query.userId);
                if (result.status) {
                    return res.status(200).json(
                        {
                            message: result.message,
                            data: result.data
                        }
                    )
                } else {
                    return res.status(500).json({
                        message: result.message,
                    })
                }
            }
        }

        /* Get Users */
        let result = await userModel.getUsers();
        if (result.status) {
            return res.status(200).json(
                {
                    message: result.message,
                    data: result.data
                }
            )
        } else {
            return res.status(500).json({
                message: result.message,
            })
        }
    },
    createUser: async function (req, res) {

        let result = await userModel.createUser(req.body);
        if (result.status) {
            return res.status(200).json(
                {
                    message: result.message,
                    data: result.data
                }
            )
        } else {
            return res.status(500).json({
                message: result.message,
            })
        }
    },
    deleteUserById: async function (req, res) {
        let result = await userModel.deleteUser(req.params.userId)
        if (result.status) {
            return res.status(200).json(
                {
                    message: result.message,
                    data: result.data
                }
            )
        } else {
            return res.status(500).json({
                message: result.message,
            })
        }
    },
    updateUserById: async function (req, res) {
        let result = await userModel.updateUserById(req.params.userId, req.body)
        if (result.status) {
            return res.status(200).json(
                {
                    message: result.message,
                    data: result.data
                }
            )
        } else {
            return res.status(500).json({
                message: result.message,
            })
        }
    },
    updateFieldUserById: async function (req, res) {
        let result = await userModel.updateFieldUserById(req.params.userId, req.body)
        if (result.status) {
            return res.status(200).json(
                {
                    message: result.message,
                    data: result.data
                }
            )
        } else {
            return res.status(500).json({
                message: result.message,
            })
        }
    }
}