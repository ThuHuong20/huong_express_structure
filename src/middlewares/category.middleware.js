module.exports = {
    createValidate: function (req, res, next) {
        if (req.body == undefined) {
            res.status(500).json({
                message: "vui long truyen danh muc muon them"
            })
        }
        if (req.body?.title?.length > 15 || req.body?.title?.length < 6 || req.body.title == undefined) {
            return res.status(500).json({
                message: 'ten danh muc khong howpj le tuw 6-15 ki tu'
            })

        }
        if (req.body.avatars == undefined) {
            return res.status(500).json({
                message: 'ban phai them hinh dai dien cho danh muc'
            })

        }
        req.body = {
            title: req.body.title,
            avatars: req.body.avatars

        }
        next();
    }
}