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
    },
    readManyValidate: function (req, res, next) {
        try {
            if (req.query.status == undefined) {
                next();
                return;
            }
            let statusQuery = JSON.parse(req.query.status)
            if (typeof statusQuery != "boolean") {
                return res.status(500).json(
                    {
                        message: "status phai laf boolean"
                    }
                )
            }
            req.query.status = statusQuery
            next();
        } catch (err) {
            res.status(500).json(
                {
                    message: "status phai laf boolean"
                }
            )
        }

    },
    updateValidate: function (req, res, next) {

        req.params.categoryId = Number(req.params.categoryId);

        if (isNaN(req.params.categoryId) || req.params.categoryId <= 0) {
            return res.status(500).json(
                {
                    message: "Category Id phải là số nguyên dương!"
                }
            )
        }

        let fieldAccepts = ["title", "status", "avatar"];

        for (let i in req.body) {
            if (fieldAccepts.indexOf(i) == -1) {
                delete req.body[i];
            } else {
                if (i == "title") {
                    if (req.body.title?.length > 15 || req.body.title?.length < 6 || req.body.title == undefined) {
                        return res.status(500).json({
                            message: "Tên danh mục phải từ 6 tới 15 kí tự!"
                        })
                    }
                }

                if (i == "status") {
                    try {
                        let statusBody = JSON.parse(req.body.status)
                        if (typeof statusBody != "boolean") {
                            return res.status(500).json(
                                {
                                    message: "Status phải là boolean!"
                                }
                            )
                        }
                    } catch (err) {
                        return res.status(500).json(
                            {
                                message: "Status phải là boolean!"
                            }
                        )
                    }
                }

                if (i == "avatar") {

                }
            }
        }


        if (JSON.stringify(req.body) === '{}') {
            return res.status(500).json(
                {
                    message: "Dữ liệu cập nhật không đúng format!"
                }
            )
        }


        next();
    },
}