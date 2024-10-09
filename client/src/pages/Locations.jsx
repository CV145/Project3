import React from 'react';
import '../css/Locations.css';

const Locations = () => {
    const locations = [
        { name: 'PDNB Gallery', path: '/pdnb-gallery', id: 'circle1' },
        { name: 'NorthPark Center', path: '/northpark-center', id: 'circle2' },
        { name: 'The Hill Shopping Center', path: '/the-hill-shopping-center', id: 'circle3' },
        { name: 'Hôtel Swexan', path: '/hotel-swexan', id: 'circle4' },
        { name: 'Deep Ellum Community Center', path: '/deep-ellum-community-center', id: 'circle5' },
        { name: 'The Exchange Hall', path: '/the-exchange-hall', id: 'circle6' }
    ];

    return (
        <div className="locations-container">
            <div className="locations-list">
                <div></div>
                {locations.map((location, index) => (
                    <div key={index} id={location.id} className='location-item'>
                        <a href={location.path} className="circle">
                            {/* Red circle */}
                        </a>
                        <a href={location.path} className="location-button">
                            {location.name}
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Locations;
