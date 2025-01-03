// pages/appointment-management.js
import { useState, useEffect } from 'react';
import { addAppointment, getAppointments } from '../lib/api';

const AppointmentManagement = () => {
  const [patientName, setPatientName] = useState('');
  const [patientAge, setPatientAge] = useState('');
  const [appointmentDate, setAppointmentDate] = useState('');
  const [appointments, setAppointments] = useState([]);

  const handleAddAppointment = async () => {
    if (!patientName || !patientAge || !appointmentDate) return;
    const newAppointment = { name: patientName, age: parseInt(patientAge), appointmentDate };
    const addedAppointment = await addAppointment(newAppointment);
    setAppointments((prevAppointments) => [...prevAppointments, addedAppointment]);
    setPatientName('');
    setPatientAge('');
    setAppointmentDate('');
  };

  useEffect(() => {
    const fetchAppointments = async () => {
      const data = await getAppointments();
      setAppointments(data);
    };
    fetchAppointments();
  }, []);

  return (
    <div>
      <h2>Appointment Management</h2>
      <div>
        <input
          type="text"
          placeholder="Patient Name"
          value={patientName}
          onChange={(e) => setPatientName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Patient Age"
          value={patientAge}
          onChange={(e) => setPatientAge(e.target.value)}
        />
        <input
          type="date"
          placeholder="Appointment Date"
          value={appointmentDate}
          onChange={(e) => setAppointmentDate(e.target.value)}
        />
        <button onClick={handleAddAppointment}>Add Appointment</button>
      </div>

      <h3>Scheduled Appointments</h3>
      <ul>
        {appointments.map((appointment, index) => (
          <li key={index}>
            {appointment.name} | {appointment.age} years old | Appointment Date: {appointment.appointmentDate}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AppointmentManagement;
