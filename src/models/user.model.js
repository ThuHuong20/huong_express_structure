


import { mySQL } from '../databases/mySQL'

module.exports = {
    getUsers: function () {
        return new Promise((resolve, reject) => {
            let queryString =
                `
          SELECT users.*
          FROM users;
        `
            mySQL.query(queryString, (err, result) => {
                if (err) {
                    return resolve(
                        {
                            status: false,
                            message: "loi trong qua trinh truy van!"
                        }
                    )
                }
                return resolve(
                    {
                        status: true,
                        message: "get users thanh cong",
                        data: result
                    }
                )
                console.log('result', result);
            })


            /*  resolve(
                {
                    status: true,
                    message: "khong loi cu phap",
                    data: users
                }
            ) */
        }).catch(err => {
            //console.log('Promise gap loi cu phap', err)
            return {
                status: false,
                message: "loi ko xac dinh"
            }
        })

    },
    getUserById: function (userId) {
        return new Promise((resolve, reject) => {
            let queryString =
                `
          SELECT users.*
          FROM users
          WHERE users.id = ${userId}
        `
            mySQL.query(queryString, (err, result) => {
                if (err) {
                    return resolve(
                        {
                            status: false,
                            message: "loi trong qua trinh truy van!"
                        }
                    )
                }
                return resolve(
                    {
                        status: true,
                        message: "get users thanh cong",
                        data: result
                    }
                )
                console.log('result', result);
            })


            /*  resolve(
                {
                    status: true,
                    message: "khong loi cu phap",
                    data: users
                }
            ) */
        }).catch(err => {
            //console.log('Promise gap loi cu phap', err)
            return {
                status: false,
                message: "loi ko xac dinh"
            }
        })

    },
    getUserDetailById: function (userId) {
        return new Promise((resolve, reject) => {
            let queryString =
                `
          SELECT users.*, user_address.id as addressId, user_address.name as addressName, user_address.provinceld, user_address.wardld 
          FROM users 
          LEFT JOIN user_address on users.id = user_address.userId 
          WHERE users.id=${userId};
        `
            mySQL.query(queryString, (err, result) => {
                if (err) {
                    return resolve(
                        {
                            status: false,
                            message: "loi trong qua trinh truy van!"
                        }
                    )
                }
                //  console.log("result", result);

                let user;
                for (let i in result) {
                    if (!user) {
                        user = {
                            id: result[i].id,
                            name: result[i].name,
                            email: result[i].email,
                            address:
                                result[i].addressId
                                    ?
                                    [
                                        {
                                            id: result[i].addressId,
                                            name: result[i].addressName,
                                            provinceId: result[i].provinceId,
                                            wardId: result[i].wardId,
                                        }
                                    ]
                                    : [],
                        }
                        continue;
                    }
                    user.address.push(
                        {
                            id: result[i].addressId,
                            name: result[i].addressName,
                            provinceId: result[i].provinceId,
                            wardId: result[i].wardId,
                        }
                    )
                }
                if (!user) {
                    return resolve(
                        {
                            status: false,
                            message: "id khong ton tai"
                        }
                    )
                }
                return resolve(
                    {
                        status: true,
                        message: "get users thanh cong",
                        data: user
                    }
                )
                console.log('result', result);
            })
        }).catch(err => {
            //console.log('Promise gap loi cu phap', err)
            return {
                status: false,
                message: "loi ko xac dinh"
            }
        })

    },
    createUser: function (newUser) {
        return new Promise((resolve, reject) => {
            //     let queryString =
            //         `
            //   INSERT INTO users (id,name,email)
            //   VALUE (NULL,"${newUser.name}","${newUser.email}")
            //    
            // `
            let queryString = 'INSERT INTO users SET ?'
            mySQL.query(queryString, newUser, async (err, result) => {
                if (err) {
                    console.log('loi truy van', err);
                    return resolve(
                        {
                            status: false,
                            message: "loi trong qua trinh truy van!"
                        }
                    )
                }
                let insertData = await this.getUsersById(result.insertId)
                return resolve(
                    {
                        status: true,
                        message: "insert user thanh cong",
                        data: insertData.status ? insertData.data : {}
                    }
                )
                console.log('result', result);
            })

        }).catch(err => {
            //console.log('Promise gap loi cu phap', err)
            return {
                status: false,
                message: "loi ko xac dinh"
            }
        })

    },
    deleteUser: function (userId) {
        return new Promise((resolve, reject) => {
            let queryString =
                `
            DELETE
            FROM users
            WHERE users.id=${userId}
            `
            mySQL.query(queryString, (err, result) => {
                if (err) {
                    return resolve(
                        {
                            status: false,
                            message: "ER_ROW_IS_REFERENCED_2" ? "User dang dinh khoa ngoai" : "loi trong qua trinh truy van"
                        }
                    )
                }
                return resolve({
                    status: true,
                    message: "delete user thanh cong!",
                    data: result
                })
            })
        }).catch(err => {
            return {
                status: false,
                message: "loi ko xac dinh"
            }
        })
    },
    updateUserById: function (userId, updateData) {
        return new Promise((resolve, reject) => {
            let queryString =
                `
             UPDATE users
                SET name="${updateData.name}", email="${updateData.email}"
                WHERE users.id=${userId};
            `
            mySQL.query(queryString, (err, result) => {
                if (err) {
                    return resolve(
                        {
                            status: false,
                            message: "loi khong xac dinh!"
                        }
                    )
                }
                return resolve({
                    status: true,
                    message: "Truy vấn thành công!"
                })
            })
        }).catch(err => {
            return {
                status: false,
                message: "loi ko xac dinh"
            }
        })
    },
    updateFieldUserById: function (userId, patchData) {
        return new Promise((resolve, reject) => {
            let patchString = ``;
            for (let i in patchData) {
                patchString += `${i}="${patchData[i]}",`
            }
            let queryString =
                `
             UPDATE users
                SET ${patchString.substring(0, patchString.length - 1)}
                WHERE users.id=${userId};
            `
            mySQL.query(queryString, (err, result) => {
                if (err) {
                    return resolve(
                        {
                            status: false,
                            message: "loi khong xac dinh!"
                        }
                    )
                }
                return resolve({
                    status: true,
                    message: "Truy vấn thành công!"
                })
            })
        }).catch(err => {
            return {
                status: false,
                message: "loi ko xac dinh"
            }
        })
    },

}