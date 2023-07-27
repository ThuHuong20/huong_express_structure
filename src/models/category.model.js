import { stat } from "@babel/core/lib/gensync-utils/fs";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

module.exports = {
    create: async function (newCategory) {
        // console.log("🚀 ~ file: category.model.js:6 ~ newCategory:", newCategory)
        try {
            const category = await prisma.categories.create({
                data: newCategory
            })
            return {
                status: true,
                message: "them danh muc thanh cong",
                data: category
            }
            // console.log('category', category);
        } catch (err) {
            //console.log("err", err);
            if (err.meta?.target == "categories_title_key") {
                return {
                    status: false,
                    message: "danh muc da ton tai"
                }
            }
            return {
                status: false,
                message: "loi khong xac dinh",
            }
        }

    },
    readMany: async function (status = undefined) {
        // console.log("🚀 ~ file: category.model.js:6 ~ newCategory:", newCategory)
        try {
            let categories = await prisma.categories.findMany({
                where:
                    status == undefined ? {} : { status },
            })
            return {
                status: true,
                message: status == undefined ? "lay danh sach danh muc thanh cong" : `Lay danh muc ${status ? "dang hoat dong" : "da tung hoat dong"} thanh cong!`,
                data: categories
            }
        } catch (err) {
            return {
                status: false,
                message: "loi khong xac dinh",
            }
        }

    },
    update: async function (categoryId, categoryEditData) {

        try {
            const categoryEdited = await prisma.categories.update({
                where: {
                    id: categoryId,
                },
                data: categoryEditData
            })
            return {
                status: true,
                message: "update danh muc thanh cong",
                data: categoryEdited
            }

        } catch (err) {
            return {
                status: false,
                message: "loi khong xac dinh",
            }
        }

    },
}