import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./Calendar.css"


const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [startTime, setStartTime] = useState("00:00");
  const [endTime, setEndTime] = useState("00:00");

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleStartTimeChange = (event) => {
    setStartTime(event.target.value);
  };

  const handleEndTimeChange = (event) => {
    setEndTime(event.target.value);
  };

  return (
    <div className="date">
      <h2>SELECCIONA LA FECHA</h2>
      <DatePicker
        selected={selectedDate}
        onChange={handleDateChange}
        dateFormat="yyyy/MM/dd"
        customTimeInput={<input type="time" />}
        style={{ width: "200px", fontSize: "30px" }}
        calendarStyle={{ fontSize: "20px" }}
        className="inner"
      />

      <div>
        <h2>Hora de comienzo de la actividad</h2>
        <input
          type="time"
          value={startTime}
          onChange={handleStartTimeChange}
          step="3600"
          style={{ marginBottom: "60px" }}
        />

        <h2>Hora de fin de la actividad</h2>
        <input
          type="time"
          value={endTime}
          onChange={handleEndTimeChange}
          step="3600"
        />
      </div>
    </div>
  );
};

export default Calendar;
