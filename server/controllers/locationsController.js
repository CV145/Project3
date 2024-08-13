import { pool } from '../config/database.js';

// Function to get all locations
export const getAllLocations = async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM locations');
        res.json(result.rows);
    } catch (err) {
        console.error('Error fetching locations:', err);
        res.status(500).send('Server error');
    }
};
