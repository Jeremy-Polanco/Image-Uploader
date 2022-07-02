import express from 'express';
const router = express.Router();

import { uploadImage } from '../controller/uploadsController.js';

router.route('/').post(uploadImage);

export default router;
