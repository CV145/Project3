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
