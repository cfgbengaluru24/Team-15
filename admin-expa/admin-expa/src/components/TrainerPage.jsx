/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './TrainerPage.css'; // Make sure to create and import this CSS file for styling

const TrainerPage = () => {
    const [trainers, setTrainers] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:4000/api/trainer/top-ten')
            .then(response => {
                if (response.data.success && Array.isArray(response.data.trainers)) {
                    setTrainers(response.data.trainers);
                } else {
                    console.error('Expected array but got:', response.data);
                }
            })
            .catch(error => console.error('Error fetching trainers:', error));
    }, []);

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return date.toLocaleDateString(undefined, options);
    };

    const handleAction = (id, action) => {
        if (action === 'Accepted') {
            window.location.href = 'https://www.makemytrip.com/flights/';
        }
        setTrainers(trainers.map(trainer => 
            trainer._id === id ? { ...trainer, action } : trainer
        ));
    };

    return (
        <div>
            <h1 className='font-bold text-lg'>Top Trainers</h1>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Date of Birth</th>
                        <th>Average Rating</th>
                        <th>Mode of Transport</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {Array.isArray(trainers) ? (
                        trainers.map(trainer => (
                            <tr key={trainer._id} className={trainer.action === 'Accepted' ? 'accepted' : ''}>
                                <td>{trainer.name}</td>
                                <td>{trainer.email}</td>
                                <td>{trainer.phone}</td>
                                <td>{formatDate(trainer.dateOfBirth)}</td>
                                <td>{trainer.averageRating}</td>
                                <td>{trainer.modeOfTransport}</td>
                                <td>
                                    <div className="dropdown">
                                        <button 
                                            className={`dropbtn ${trainer.action}`}
                                        >
                                            {trainer.action ? trainer.action : "Action"}
                                        </button>
                                        <div className="dropdown-content">
                                            <a href="#" onClick={() => handleAction(trainer._id, 'Accepted')}>Accept</a>
                                            <a href="#" onClick={() => handleAction(trainer._id, 'Denied')}>Deny</a>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="7">No data available</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default TrainerPage;
