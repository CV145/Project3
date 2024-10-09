import { pool } from '../config/database.js';

export const getAllEvents = async (req, res) => {
    try {
        const result = await pool.query(`
            SELECT events.*, locations.name as location_name, locations.address as location_address
            FROM events
            JOIN locations ON events.location_id = locations.id
        `);
        res.json(result.rows);
    } catch (err) {
        console.error('Error fetching events:', err);
        res.status(500).send('Server error');
    }
};

export const getEventById = async (req, res) => {
    try {
        const { id } = req.params; // Extract id from request parameters
        const result = await pool.query(`
            SELECT events.*, locations.name as location_name,
            locations.address as location_address
            FROM events
            JOIN locations ON events.location_id = locations.id
            WHERE events.id = $1
        `, [id]); // Pass the id as a parameter to prevent SQL injection

        if (result.rows.length === 0) {
            return res.status(404).send('Event not found');
        }

        res.json(result.rows[0]); // Send back the specific event
    } catch (err) {
        console.error('Error fetching event by ID:', err);
        res.status(500).send('Server error');
    }
};