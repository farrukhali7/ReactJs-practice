import React, { useState } from 'react';

const Input = ({ placeholder, func }) => {
  const [val, setVal] = useState('');

  function getInputValWithOnchange(e) {
    setVal(e.target.value);
    func(e.target.value);
  }

  return (
    <input
      type="text"
      className="form-control"
      placeholder={placeholder}
      onChange={getInputValWithOnchange}
      value={val}
    />
  );
};

export default Input;
