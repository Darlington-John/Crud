import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Inputs.css';

export const Input = (props) => {
  const [inputValue, setInputValue] = useState('');
  const [inputVisible, setInputVisible] = useState(false); // State to toggle input visibility

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const toggleInputVisibility = () => {
    setInputVisible((prevState) => !prevState); // Toggle input visibility state
  };

  return (
    <div className="InputContainer">
      {/* Actual password input with type="password" */}
      <input
        type={inputVisible ? 'text' : 'password'}
        placeholder={props.placeholder}
        value={inputValue}
        onChange={handleInputChange}
        className="Input"
      />

      <img
        className="InputIcon"
        src={props.inputIcon}
        alt="Input Icon"
        onClick={toggleInputVisibility}
      />
    </div>
  );
};
Input.propTypes = {
  placeholder: PropTypes.string.isRequired,
  inputIcon: PropTypes.string,
};

export const VisibleInput = (props) => {
  return (
    <div className="InputContainer">
      <input placeholder={props.placeholder} className="Input" />

      <img className="InputIcon" src={props.inputIcon} />
    </div>
  );
};
export const DefaultInput = (props) => {
  return (
    <div className="DefaultInputContainer">
      <input placeholder={props.placeholder} className="DefaultInput" />
    </div>
  );
};
DefaultInput.propTypes = {
  placeholder: PropTypes.string.isRequired,
};

VisibleInput.propTypes = {
  placeholder: PropTypes.string.isRequired,
  inputIcon: PropTypes.string,
};
