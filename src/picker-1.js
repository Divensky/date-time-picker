import React from 'react';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker/DateTimePicker';
import { useState } from 'react';
import { TextField } from '@mui/material'; // added this

function MyComponent1() {
  const [value, setValue] = useState(null);

  const handleClear = () => {
    setValue(null); // Set value to null to clear selection
  };

  return (
    <div>
      <DateTimePicker
        label="Select Date and Time"
        value={value}
        onChange={setValue}
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

export default MyComponent1; // added this
