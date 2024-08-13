import React, { useState, useEffect } from 'react';
import { getAllEvents } from '../services/EventsAPI';
import '../css/Event.css';

const Events = () => {
    const [events, setEvents] = useState([]);
    const [filteredEvents, setFilteredEvents] = useState([]);
    const [selectedLocation, setSelectedLocation] = useState('');

    useEffect(() => {
        (async () => {
            try {
                const eventsData = await getAllEvents();
                setEvents(eventsData);
                setFilteredEvents(eventsData);  // Initially show all events
            } catch (error) {
                console.error('Failed to fetch events:', error);
            }
        })();
    }, []);

    const handleLocationChange = (e) => {
        const location = e.target.value;
        setSelectedLocation(location);
        if (location === '') {
            setFilteredEvents(events);
        } else {
            const filtered = events.filter(event => event.location_name === location);
            setFilteredEvents(filtered);
        }
    };

    const handleResetFilter = () => {
        setSelectedLocation('');
        setFilteredEvents(events);
    };

    return (
        <div className="events-page">
            <h1>Upcoming Events</h1>
            <div className="filter-container">
                <select value={selectedLocation} onChange={handleLocationChange}>
                    <option value="">See events at . . .</option>
                    {Array.from(new Set(events.map(event => event.location_name))).map(location => (
                        <option key={location} value={location}>{location}</option>
                    ))}
                </select>
                <button onClick={handleResetFilter}>Show All Events</button>
            </div>
            <ul className="events-list">
                {filteredEvents.map((event) => {
                    const formattedDate = new Date(event.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                    });
                    return (
                        <li key={event.id} className="event-item">
                            <h2>{event.name}</h2>
                            <p>{event.description}</p>
                            <p><strong>Date:</strong> {formattedDate}</p>
                            <p><strong>Time:</strong> {event.time}</p>
                            <p><strong>Location:</strong> {event.location_name}, {event.location_address}</p>
                            <p><strong>Organizer:</strong> {event.organizer}</p>
                            <p><strong>Category:</strong> {event.category}</p>
                            <a href={event.url} target="_blank" rel="noopener noreferrer">More Details</a>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default Events;
