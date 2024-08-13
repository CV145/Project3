import express from 'express';
import { getAllEvents } from '../controllers/eventsController.js'; // Import your events controller

const router = express.Router();

// Define route to get all events
router.get('/events', getAllEvents);

export default router;
