import express from 'express';
import ctrl from '../controllers/students.controller';

const router = express.Router();

router.route('./students').get(ctrl.list);

export default router;
