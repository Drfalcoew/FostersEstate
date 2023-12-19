import Homepage from './mainpage/home/Homepage';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Schedule from './schedule/Schedule';
import Header from './header/Header';
import Contact from './mainpage/contact/Contact';
import Success from './success/Success';
import { SchedulePropsData } from './Types';
import AboutUs from './about/AboutUs';

function App() {

  const [appointmentData, setAppointmentData] = React.useState<null | SchedulePropsData>(null);

  const handleAppointmentScheduled = (data: SchedulePropsData) => {
    setAppointmentData(data);
  };

  return (
    <Router>
      <div className='app-container'>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/schedule" element={<Schedule onAppointmentScheduled={handleAppointmentScheduled} />} />
          <Route path="/about" element={<AboutUs /> } />
          {appointmentData ? (
            <Route
              path="/success"
              element={<Success fullName={appointmentData.fullName} orderNumber={appointmentData.orderNumber} email={appointmentData.email} />}
            />
          ) : (
            <Route path="/success" element={<Navigate to="/schedule" />} />
          )}
        </Routes>
        <Contact />
        </div>
    </Router>
  );
}

export default App;
