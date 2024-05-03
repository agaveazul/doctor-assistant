import { useState } from "react";

const TimePicker = () => {
  const [time, setTime] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTime(event.target.value);
  };

  return (
    <div className="flex flex-col items-center p-4">
      <input
        type="time"
        id="time-picker"
        name="time-picker"
        className="mb-4 form-input w-48 px-4 py-2 border rounded-md shadow-sm text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 rounded-lg border border-gray-900/25 px-6 py-10"
        value={time}
        onChange={handleChange}
        min="00:00"
        max="23:59"
        required
      />
    </div>
  );
};

export default TimePicker;
