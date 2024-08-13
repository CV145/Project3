import React, { useState, useEffect } from 'react';
import { getAllLocations } from '../services/LocationsAPI';  // Named import
import unitygrid from '../assets/unitygrid.jpg';
import '../css/Locations.css';

const Locations = () => {
    const [locations, setLocations] = useState([]);
    const [venueNames, setVenueNames] = useState({ venue1: '', venue2: '', venue3: '', venue4: '' });

    useEffect(() => {
        (async () => {
            try {
                const locationsData = await getAllLocations();  // Using the named function
                setLocations(locationsData);

                if (locationsData.length >= 4) {
                    setVenueNames({
                        venue1: locationsData[0].name,
                        venue2: locationsData[1].name,
                        venue3: locationsData[2].name,
                        venue4: locationsData[3].name
                    });
                }

                setListeners();
            }
            catch (error) {
                console.error('Failed to fetch locations:', error);
            }
        })();
    }, []);

    const setListeners = () => {
        const polygons = document.querySelectorAll('polygon');

        polygons.forEach(element => {
            element.addEventListener('mouseover', (event) => {
                const buttonElement = document.getElementById(`${event.target.id}button`);
                buttonElement.style.opacity = 1;
            });

            element.addEventListener('mouseleave', (event) => {
                const buttonElement = document.getElementById(`${event.target.id}button`);
                buttonElement.style.opacity = 0;
            });
        });
    };

    return (
        <div className='available-locations'>
            <div id='venue1button' className='venue1-button-overlay'>
                <button>{venueNames.venue1}</button>
            </div>

            <div id='venue2button' className='venue2-button-overlay'>
                <button>{venueNames.venue2}</button>
            </div>

            <div id='venue3button' className='venue3-button-overlay'>
                <button>{venueNames.venue3}</button>
            </div>

            <div id='venue4button' className='venue4-button-overlay'>
                <button>{venueNames.venue4}</button>
            </div>
        </div>
    );
};

export default Locations;
