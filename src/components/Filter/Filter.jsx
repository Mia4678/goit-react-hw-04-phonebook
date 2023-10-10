import React from 'react';
import { Label, Input } from '../ContactForm/ContactForm.styles';

function Filter({ filter, onFilterChange }) {
  const handleChange = e => {
    const filterValue = e.target.value.toLowerCase();
    onFilterChange(filterValue);
  };

  return (
    <div>
      <Label>
        Filter contacts by name:
        <Input type="text" value={filter} onChange={handleChange} />
      </Label>
    </div>
  );
}

export default Filter;
