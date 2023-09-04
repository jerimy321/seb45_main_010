import { useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from 'react-datepicker';
import { Button } from '@material-tailwind/react';
import { ko } from 'date-fns/locale';

export type TimeSlot = {
  start: Date;
  end: Date;
};

function generateTimeSlots(startDate: string): TimeSlot[] {
  const startHour = 17; // 5 PM
  const endHour = 23; // 11 PM
  const timeSlotsPerDay: TimeSlot[] = [];

  for (let hour = startHour; hour < endHour; hour++) {
    const start = new Date(startDate);
    start.setHours(hour, 0, 0);
    const end = new Date(startDate);
    end.setHours(hour + 1, 0, 0);

    timeSlotsPerDay.push({ start, end });
  }

  return timeSlotsPerDay;
}

function formatDate(date: Date): string {
  return date.toISOString().split('T')[0];
}

function generateAvailableTimeSlots(): Record<string, TimeSlot[]> {
  const availableTimeSlots: Record<string, TimeSlot[]> = {};

  const startDate = new Date();
  startDate.setHours(0, 0, 0, 0);
  const endDate = new Date();
  endDate.setMonth(endDate.getMonth() + 1);

  for (let date = new Date(startDate); date <= endDate; date.setDate(date.getDate() + 1)) {
    const formattedDate = formatDate(date);
    availableTimeSlots[formattedDate] = generateTimeSlots(formattedDate);
  }

  return availableTimeSlots;
}

const availableTimeSlots = generateAvailableTimeSlots();

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [timeSlots, setTimeSlots] = useState<TimeSlot[]>([]);
  const [selectedTimeSlots, setSelcetedTimeSlots] = useState<TimeSlot[]>([]);

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);

    if (date) {
      const formattedDate = formatDate(date);
      setTimeSlots(availableTimeSlots[formattedDate] || []);
    } else {
      setTimeSlots([]);
    }
  };
  const handleTimeSlotClick = (timeSlot: TimeSlot): void => {
    setSelcetedTimeSlots((prevSlots) => [...prevSlots, timeSlot]);
  };

  return (
    <div className="container flex flex-col items-center justify-center gap-5">
      <DatePicker
        className="flex items-center justify-between p-2 text-center text-sm font-bold text-black bg-mint-4 rounded-xl w-[230px] border-mint-2"
        placeholderText="날짜 선택"
        selected={selectedDate}
        onChange={handleDateChange}
        minDate={today}
        dateFormat="yyyy/MM/dd"
        locale={ko}
      />

      {timeSlots.length > 0 && (
        <div className="mt-5">
          <span>선택 가능한 시간 목록</span>
          {timeSlots.map((slot: TimeSlot, index: number) => (
            <Button
              className="list-disc list-inside mb-5 flex items-center justify-between p-2 text-sm font-bold text-black bg-mint-2 rounded-xl w-[230px] border-mint-2"
              size="sm"
              key={index}
              onClick={() => handleTimeSlotClick(slot)}
            >
              <span className="flex-1 text-center">
                {slot.start.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} -
                {slot.end.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </span>
            </Button>
          ))}
          <span>선택한 시간 목록</span>
          {selectedTimeSlots.map((slot: TimeSlot, index: number) => (
            <Button
              className="list-disc list-inside mb-5 flex items-center justify-between p-2 text-sm font-bold text-white bg-blue-1 rounded-xl w-[230px] border-green"
              size="sm"
              key={index}
            >
              <span className="flex-1 text-center">
                {slot.start.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} -
                {slot.end.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </span>
            </Button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Calendar;
