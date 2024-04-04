import React from 'react';
import { useState } from 'react';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker/DateTimePicker';
import { TextField } from '@mui/material';

function MyComponent() {
  const [value, setValue] = useState(null);

  const handleDateChange = (newValue) => {
    if (!newValue) {
      // Check if newValue is null
      setValue(null); // Clear selection if null
    } else {
      setValue(newValue); // Update selection otherwise
    }
  };

  const handleClear = () => {
    setValue(null); // Set value to null to clear selection
  };

  return (
    <div>
      <DateTimePicker
        label="Select Date and Time"
        value={value}
        onChange={handleDateChange}
        renderInput={(params) => <TextField {...params} />}
      />
      <button onClick={handleClear}>Clear Selection</button>
      <div>
        Selected Date and Time:{' '}
        {value != null
          ? value.toString()
          : value === undefined
          ? 'Undefined'
          : 'None'}
      </div>
    </div>
  );
}

export default MyComponent;
