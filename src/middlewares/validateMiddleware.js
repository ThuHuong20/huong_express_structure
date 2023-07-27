module.exports = {
    getUserValidate: (req, res, next) => {
        if (req.query.userId) {
            if (isNaN(Number(req.query.userId)) || req.query.userId <= 0) {
                return res.status(500).json(
                    {
                        message: "User Id phai la so nguyen duwong!"
                    }
                )
            }
            try {
                if (typeof JSON.parse(req.query.detail) != "boolean") {
                    return res.status(500).json(
                        {
                            message: "Detail phai la true hoawc false"
                        }
                    )
                }
            }
            catch (err) {
                return res.status(500).json({
                    message: 'Detail phai la true hoawc false'
                })
            }
        }
        next();
    }
}