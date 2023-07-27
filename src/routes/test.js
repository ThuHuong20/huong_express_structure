import express from 'express';
const router = express.Router();

import categoryModel from '../models/category.model'

// router.post('/post', async (req, res) => {
//     // console.log('da vao!', req.body);
//   //  let result = await categoryModel.create(req.body)
//     // console.log("🚀 ~ file: test.js:9 ~ router.post ~ result:", result)


// })
// router.use('/post', async (req, res) => {
//     // console.log('da vao!', req.body);
//     let result = await categoryModel.readMany(true)
//     console.log("🚀 ~ file: test.js:9 ~ router.post ~ result:", result)


// })
// router.use('/post', async (req, res) => {
//     // console.log('da vao!', req.body);
//     let result = await categoryModel.update(1, { status: true, title: "hoa mini" })
//     console.log("🚀 ~ file: test.js:9 ~ router.post ~ result:", result)


// })
router.use('/', async (req, res) => {
    // console.log('da vao!', req.body);
    let result = await categoryModel.update(1, { deleted: true })
    console.log("🚀 ~ file: test.js:9 ~ router.post ~ result:", result)


})


module.exports = router;