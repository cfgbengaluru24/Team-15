/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EventsPage = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        handleGetAllEvents();
    }, []);

    const handleAddEvent = async () => {
        try {
            const response = await axios.post(
                'http://localhost:4000/api/event/add',
                { eventName: 'New Event', city: 'New City' }, // Example event data
                {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            );
            toast.success('Event added successfully!');
            handleGetAllEvents(); // Refresh events list
        } catch (error) {
            handleRequestError(error, 'Failed to add event');
        }
    };

    const handleGetAllEvents = async () => {
        try {
            const response = await axios.get('http://localhost:4000/api/event/', {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            console.log(response.data); // Debugging
            setEvents(response.data || []); // Ensure events is an array
            toast.info('Fetched all events');
        } catch (error) {
            handleRequestError(error, 'Failed to fetch events');
        }
    };

    const handleDeleteEvent = async (id) => {
        try {
            await axios.delete(`http://localhost:4000/api/event/${id}`, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            toast.success('Event deleted successfully!');
            handleGetAllEvents(); // Refresh events list
        } catch (error) {
            handleRequestError(error, 'Failed to delete event');
        }
    };

    const handleRequestError = (error, defaultMessage) => {
        if (error.response) {
            // Server responded with a status other than 200 range
            console.error('Error response:', error.response.data);
            toast.error(`${defaultMessage}: ${error.response.data.message || error.response.data.error || 'Unknown error'}`);
        } else if (error.request) {
            // Request was made but no response received
            console.error('Error request:', error.request);
            toast.error(`${defaultMessage}: No response from server`);
        } else {
            // Something else caused the error
            console.error('Error message:', error.message);
            toast.error(`${defaultMessage}: ${error.message}`);
        }
    };

    return (
        <div>
            
            <button onClick={handleAddEvent} style={{ backgroundColor: 'green' , padding: '5px', borderRadius: '10px ', marginRight: '8px'}}>Add Event</button>
            <button onClick={handleGetAllEvents} style={{ backgroundColor: 'yellow' , padding: '5px', borderRadius: '10px '}}>Get All Events</button>
            
            <ToastContainer />
            
            <div style={{ marginTop: '20px' }}>
                <h2 className='font-bold text-xl'>Event List</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>City</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {events.length > 0 ? (
                            events.map(event => (
                                <tr key={event._id}>
                                    <td>{event.eventName}</td>
                                    <td>{event.city}</td>
                                    <td>
                                        <button onClick={() => handleDeleteEvent(event._id)} style={{ backgroundColor: 'red', padding: '5px', borderRadius: '10px ' }}>Delete</button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="3">No events available</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default EventsPage;
