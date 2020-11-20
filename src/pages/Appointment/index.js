import React, { useState } from "react";
import Calendar from "react-calendar";
import { AppointmentContainer } from "./AppointmentElement";

const Appointment = () => {
  const [date, setDate] = useState(new Date());
  console.log(date);
  return (
    <>
      <AppointmentContainer>
        <Calendar onChange={setDate} value={date} />
      </AppointmentContainer>
    </>
  );
};

export default Appointment;
