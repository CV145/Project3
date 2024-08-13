import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000/api'; // Make sure this URL matches your backend server

export const getAllEvents = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/events`);
        console.log(response.data); // Log the data to inspect
        return response.data;
    } catch (error) {
        console.error('Error fetching events:', error);
        throw error;
    }
};

export const getEventById = async (id) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/events/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching event with id ${id}:`, error);
        throw error;
    }
};
