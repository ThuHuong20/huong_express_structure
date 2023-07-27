import productModel from "../models/product.model";
module.exports = {
    getProducts: function (req, res) {
        try {
            let result = productModel.getProducts();
            if (result.status) {
                return res.status(200).json(
                    {
                        message: result.message,
                        data: result.data
                    }
                )
            } else {
                res.status(500).json({
                    message: result.message,
                })
            }

        } catch (err) {
            res.status(500).json({
                message: "Lỗi không xác định!",
            })
        }
    },

}