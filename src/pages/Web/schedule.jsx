import React, { useState } from 'react';

const schedule = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState('');
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const times = ["8:00pm", "8:30pm", "9:00pm", "9:30pm", "10:00pm"];

  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

  const handleTimeSelect = (time) => {
    setSelectedTime(time);
  };

  const handleDateSelect = (day) => {
    setSelectedDate(new Date(currentYear, currentMonth, day));
    setSelectedTime('');
  };

  const goToNextMonth = () => {
    setCurrentMonth((prev) => (prev === 11 ? 0 : prev + 1));
    if (currentMonth === 11) setCurrentYear((prev) => prev + 1);
  };

  const goToPrevMonth = () => {
    setCurrentMonth((prev) => (prev === 0 ? 11 : prev - 1));
    if (currentMonth === 0) setCurrentYear((prev) => prev - 1);
  };

  const renderCalendarDays = () => {
    const daysArray = Array.from({ length: daysInMonth }, (_, i) => i + 1);
    return daysArray.map((day) => (
      <button
        key={day}
        onClick={() => handleDateSelect(day)}
        style={{
          width: '40px',
          height: '40px',
          margin: '5px',
          backgroundColor: selectedDate?.getDate() === day && selectedDate?.getMonth() === currentMonth ? '#4A90E2' : '#fff',
          color: selectedDate?.getDate() === day && selectedDate?.getMonth() === currentMonth ? '#fff' : '#333',
          border: '1px solid #ccc',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        {day}
      </button>
    ));
  };

  return (
    <div style={{ display: 'flex', fontFamily: 'Arial, sans-serif', padding: '20px' }}>
      {/* Left Panel */}
      <div style={{ width: '30%', padding: '20px', borderRight: '1px solid #ccc' }}>
        <div style={{ textAlign: 'center', marginBottom: '20px' }}>
          <img src="path/to/logo.png" alt="Swank Events Logo" style={{ height: '50px' }} />
        </div>
        <h2>Kristin Healy of Swank Events</h2>
        <h3>Consultation</h3>
        <p>🕒 30 min</p>
      </div>

      {/* Right Panel */}
      <div style={{ width: '70%', padding: '20px' }}>
        <h2>Select a Date & Time</h2>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ width: '300px', textAlign: 'center' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
              <button onClick={goToPrevMonth}>&lt;</button>
              <p>{new Date(currentYear, currentMonth).toLocaleString('default', { month: 'long' })} {currentYear}</p>
              <button onClick={goToNextMonth}>&gt;</button>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
              {renderCalendarDays()}
            </div>
          </div>
          <div style={{ marginLeft: '20px', width: '150px' }}>
            <p><strong>{selectedDate ? selectedDate.toDateString() : "Select a date"}</strong></p>
            {times.map((time) => (
              <button
                key={time}
                onClick={() => handleTimeSelect(time)}
                style={{
                  display: 'block',
                  width: '100%',
                  padding: '10px',
                  margin: '5px 0',
                  backgroundColor: selectedTime === time ? '#4A90E2' : '#fff',
                  color: selectedTime === time ? '#fff' : '#333',
                  border: '1px solid #ccc',
                  borderRadius: '5px',
                  cursor: 'pointer',
                }}
              >
                {time}
              </button>
            ))}
            <button
              style={{
                marginTop: '10px',
                backgroundColor: '#4A90E2',
                color: '#fff',
                padding: '10px',
                width: '100%',
                borderRadius: '5px',
                cursor: 'pointer',
                border: 'none',
              }}
            >
              Next
            </button>
          </div>
        </div>
        <p style={{ marginTop: '20px' }}>Time zone: India Standard Time (IST)</p>
      </div>
    </div>
  );
};

export default schedule;
