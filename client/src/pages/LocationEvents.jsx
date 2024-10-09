import React, { useState, useEffect } from 'react';
import Event from '../components/Event';
import '../css/LocationEvents.css';
import { getAllEvents } from '../services/EventsAPI'; // Assuming this fetches all events

const LocationEvents = ({ locationId, locationName }) => {
    const [location, setLocation] = useState({});
    const [events, setEvents] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Fetch all events
                const eventsData = await getAllEvents();

                // Filter events for the specific locationId
                const filteredEvents = eventsData.filter(event => event.location_id === locationId);

                console.log('Events Data:', eventsData);
                console.log('Filtered Events:', filteredEvents);


                setEvents(filteredEvents);  // Set events for this location

                // Fetch and set location information based on first event's data (if any)
                if (filteredEvents.length > 0) {
                    const eventLocation = {
                        name: locationName,
                        address: filteredEvents[0].location_address,
                        city: filteredEvents[0].location_city,
                        state: filteredEvents[0].location_state,
                        zip: filteredEvents[0].location_zip,
                        image: filteredEvents[0].image, // Assuming there's an image property
                    };
                    setLocation(eventLocation);
                }
            } catch (error) {
                console.error('Error fetching events:', error);
            }
        };

        fetchData();
    }, [locationId, locationName]);

    return (
        <div className='location-events'>
            <header>
                <div className='location-image'>
                    {location.image && <img src={location.image} alt={location.name} />}
                </div>

                <div className='location-info'>
                    <h2>{location.name}</h2>
                    <p>{location.address}, {location.city}, {location.state} {location.zip}</p>
                </div>
            </header>

            <main>
                {events && events.length > 0 ? (
                    events.map((event) => {
                        console.log('Event Data:', event);  // Add this to confirm event properties
                        return (
                            <div key={event.id} className="event-item">
                                <h3>{event.name || 'No Title Available'}</h3>  {/* Make sure you're using `name` */}
                                <p>Date: {new Date(event.date).toLocaleDateString('en-US', {
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric'
                                })}</p>
                                <p>Time: {event.time}</p>
                                <p>Location: {event.location_address}, {event.location_city || ''}, {event.location_state || ''} {event.location_zip || ''}</p>
                                <p>Category: {event.category}</p>
                                <p>Description: {event.description}</p>
                                <p>Organizer: {event.organizer}</p>
                                <a href={event.url} target="_blank" rel="noopener noreferrer">More Details</a>
                            </div>
                        );
                    })
                ) : (
                    <h2>
                        <i className="fa-regular fa-calendar-xmark fa-shake"></i> {'No events scheduled at this location yet!'}
                    </h2>
                )}
            </main>

        </div>
    );
};

export default LocationEvents;
