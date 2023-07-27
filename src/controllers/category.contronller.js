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
    }

}