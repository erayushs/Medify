import { Box } from "@mui/material";
import { useState } from "react";
import { startOfDay } from "date-fns";
import TimeSlotPick from "./TimeSlotPick/TimeSlotPick";
import DaySelect from "./DaySelect/DaySelect";

const Calendar = ({ availableSlots, details, handleBooking }) => {
  const [selectedDate, setSelectedDate] = useState(startOfDay(new Date()));

  const totalSlots =
    availableSlots.morning.length +
    availableSlots.afternoon.length +
    availableSlots.evening.length;

  return (
    <Box>
      <DaySelect
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
        totalSlots={totalSlots}
      />
      <TimeSlotPick
        availableSlots={availableSlots}
        selectedDate={selectedDate}
        details={details}
        handleBooking={handleBooking}
      />
    </Box>
  );
};

export default Calendar;
