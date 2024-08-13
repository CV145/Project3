import { pool } from './database.js';

const createTables = async () => {
    try {
        // Create the locations table
        await pool.query(`
            CREATE TABLE IF NOT EXISTS locations (
                id SERIAL PRIMARY KEY,
                name VARCHAR(255) NOT NULL,
                address VARCHAR(255),
                latitude DECIMAL(9, 6),
                longitude DECIMAL(9, 6),
                description TEXT
            );
        `);

        // Create the events table
        await pool.query(`
            CREATE TABLE IF NOT EXISTS events (
                id SERIAL PRIMARY KEY,
                name VARCHAR(255) NOT NULL,
                description TEXT,
                date DATE,
                time TIME,
                location_id INTEGER REFERENCES locations(id),
                category VARCHAR(255),
                organizer VARCHAR(255),
                price NUMERIC,
                url VARCHAR(255)
            );
        `);

        console.log('Tables created successfully!');
    } catch (err) {
        console.error('Error creating tables:', err);
    } finally {
        // End the pool connection
        await pool.end();
    }
};

// Run the function to create the tables
createTables();
