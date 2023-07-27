import categoryModel from '../models/category.model';

module.exports = {
    create: async function (req, res) {
        console.log("da vao controller create category", req.body);
        try {
            let result = await categoryModel.create(req.body)
            if (result.status) {
                return res.status(200).json({
                    message: result.message,
                    data: result.data
                })
            }
            return res.status(500).json({
                message: result.message
            })
        } catch (err) {
            return res.status(500).json({
                message: 'loi khong xac dinh'
            })
        }
    },
    readMany: async function (req, res) {
        // console.log("🚀 ~ file: category.model.js:6 ~ newCategory:", newCategory)
        console.log("da vao contronller readme", req.query.status);

        try {
            let result = await categoryModel.readMany(req.query.status)
            if (result.status) {
                return res.status(200).json({
                    message: result.message,
                    data: result.data
                })
            }
            return res.status(500).json({
                message: result.message
            })
        } catch (err) {
            return res.status(500).json({
                message: 'loi khong xac dinh'
            })
        }

    },
    update: async function (req, res) {
        // console.log("categoryId", req.params.categoryId);
        // console.log("req.body", req.body);
        try {
            let result = await categoryModel.update(req.params.categoryId, req.body)
            if (result.status) {
                return res.status(200).json({
                    message: result.message,
                    data: result.data
                })
            }
            return res.status(500).json({
                message: result.message
            })
        } catch (err) {
            console.log("🚀 ~ file: category.contronller.js:60 ~ err:", err)
            return res.status(500).json({
                message: 'loi khong xac dinh 1'
            })
        }
    },

}