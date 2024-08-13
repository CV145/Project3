import express from 'express';
import { getAllLocations } from '../controllers/locationsController.js'; // Import your locations controller

const router = express.Router();

// Define route to get all locations
router.get('/locations', getAllLocations);

export default router;
