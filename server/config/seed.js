import { pool } from './database.js';

const seedLocations = async () => {
    try {
        await pool.query(`
            INSERT INTO locations (name, address, latitude, longitude, description)
            VALUES 
            ('PDNB Gallery', '150 Manufacturing Street, Suite 203, Dallas, TX 75207', NULL, NULL, 'An art gallery in Dallas.'),
            ('NorthPark Center', '8687 N. Central Expressway, Dallas, TX 75225', NULL, NULL, 'A premier shopping center in Dallas.'),
            ('The Hill Shopping Center', '8041 Walnut Hill Lane, Dallas, TX 75231', NULL, NULL, 'A shopping center featuring local vendors.'),
            ('Hôtel Swexan', '2575 McKinnon St, Dallas, TX 75201', NULL, NULL, 'A luxury hotel in Dallas.'),
            ('Deep Ellum Community Center', '2528 Elm St. Suite A, Dallas, TX 75226', NULL, NULL, 'A community center in the Deep Ellum neighborhood.'),
            ('The Exchange Hall', '211 S Akard St, Dallas, TX 75202', NULL, NULL, 'An event hall located in downtown Dallas.');
        `);

        console.log('Locations seeded successfully!');
    } catch (err) {
        console.error('Error seeding locations:', err);
    }
};

const seedEvents = async () => {
    try {
        await pool.query(`
            INSERT INTO events (name, description, date, time, location_id, category, organizer, price, url)
            VALUES 
            ('Opening Reception for Portraits of Frida by Lucienne Bloch and Nickolas Muray', 'An exhibition of portraits of Frida Kahlo by Lucienne Bloch and Nickolas Muray.', '2024-08-13', '11:00:00', 1, 'Art', 'PDNB Gallery', 0, 'https://www.visitdallas.com/events/opening-reception-for-portraits-of-frida-by-lucienne-bloch-and-nickolas-muray'),
            ('NorthPark AutoShow 2024', 'A showcase of the latest models from various car manufacturers.', '2024-08-13', '09:00:00', 2, 'Auto', 'NorthPark Center', 0, 'https://www.visitdallas.com/events/northpark-autoshow-2024'),
            ('The Boho Market at The Hill', 'An outdoor market featuring local artisans and vendors selling handmade goods.', '2024-08-13', '09:00:00', 3, 'Market', 'The Boho Market', 0, 'https://www.visitdallas.com/events/the-boho-market-at-the-hill'),
            ('Live Jazz at Babou''s', 'Enjoy live jazz music every Thursday evening at Babou''s.', '2024-08-15', '18:00:00', 4, 'Music', 'Babou''s', 0, 'https://www.visitdallas.com/events/live-jazz-at-babous'),
            ('We Are Living History - A Monthly History Collective', 'A monthly gathering focused on discussing and preserving history, held every third Thursday.', '2024-08-15', '18:00:00', 5, 'History', 'Deep Ellum Community Center', 0, 'https://www.visitdallas.com/events/we-are-living-history-a-monthly-history-collective'),
            ('Truly Music Bingo', 'A fun twist on traditional bingo with music themes, held every Thursday night.', '2024-08-15', '19:00:00', 6, 'Entertainment', 'The Exchange Hall', 0, 'https://www.visitdallas.com/events/truly-music-bingo');
        `);

        console.log('Events seeded successfully!');
    } catch (err) {
        console.error('Error seeding events:', err);
    }
};

const seedDatabase = async () => {
    await seedLocations();
    await seedEvents();
    pool.end();  // Close the pool connection after seeding
};

seedDatabase();
