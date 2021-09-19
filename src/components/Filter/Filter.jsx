import React from 'react';

 const Filter = ({ value, onChange }) => (
  <label>
    <h3>Find contact by Name</h3>
    <input type="text" value={value} onChange={onChange} />
  </label>
);

export default Filter;