import React, { useState, useEffect } from 'react';
import { getAllEvents } from '../services/EventsAPI';
import '../css/Event.css';

const Events = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                const eventsData = await getAllEvents();
                console.log(eventsData);  // Log the data to ensure it includes location_name and address
                setEvents(eventsData);
            } catch (error) {
                console.error('Failed to fetch events:', error);
            }
        })();
    }, []);

    return (
        <div className="events-page">
            <h1>Upcoming Events</h1>
            <ul className="events-list">
                {events.map((event) => {
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
