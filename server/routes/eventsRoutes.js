import express from 'express';
import { getAllEvents, getEventById } from '../controllers/eventsController.js'; // Import your events controller

const router = express.Router();

// Define route to get all events
router.get('/events', getAllEvents);

// Define route to get a single event by ID
router.get('/events/:id', getEventById);

export default router;
