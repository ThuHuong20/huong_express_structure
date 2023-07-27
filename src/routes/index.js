import express from 'express';
const router = express.Router();

import apiV1 from './v1';
router.use('/v1', apiV1);

import testApi from './test';
router.use('/test', testApi);


module.exports = router;