/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './TraineePage.css'; // Make sure to create and import this CSS file for styling

const TraineePage = () => {
    const [trainees, setTrainees] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:4000/api/trainee/get')
            .then(response => {
                if (response.data.success && Array.isArray(response.data.trainees)) {
                    setTrainees(response.data.trainees);
                } else {
                    console.error('Expected array but got:', response.data);
                }
            })
            .catch(error => console.error('Error fetching trainees:', error));
    }, []);

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return date.toLocaleDateString(undefined, options);
    };

    return (
        <div>
            <h1 className='font-bold mb-2 text-xl' >All Trainees</h1>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Date of Birth</th>
                    </tr>
                </thead>
                <tbody>
                    {Array.isArray(trainees) ? (
                        trainees.map(trainee => (
                            <tr key={trainee._id}>
                                <td>{trainee.name}</td>
                                <td>{trainee.email}</td>
                                <td>{trainee.phone}</td>
                                <td>{formatDate(trainee.dateOfBirth)}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="4">No data available</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default TraineePage;
