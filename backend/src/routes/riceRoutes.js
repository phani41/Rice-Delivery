import express from 'express';
import { getAllRice, getRiceById } from '../controllers/riceController.js';

const router = express.Router();

router.get('/', getAllRice);
router.get('/:id', getRiceById);

export default router;