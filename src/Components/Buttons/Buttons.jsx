import React, { useState } from 'react';
import './Buttons.css';
import PropTypes from 'prop-types';

export const Button = (props) => {
  return (
    <button className="DefaultButton">
      <img src={props.icon} />
      {props.text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

const ToggableButton = () => {
  const buttonIds = ['Tokens', 'NFTs'];
  const [activeId, setActiveId] = useState(buttonIds[0]);

  const handleButtonClick = (id) => {
    setActiveId(id);
  };
  return (
    <div className="ToggableButton">
      {buttonIds.map((id) => (
        <button
          key={id}
          id={id}
          className={id === activeId ? 'active' : ''}
          onClick={() => handleButtonClick(id)}
        >
          {id}
        </button>
      ))}
    </div>
  );
};

export const LargeButton = (props) => {
  return <button className="LargeButton">{props.text}</button>;
};

LargeButton.propTypes = {
  text: PropTypes.string.isRequired,
};

export const GoogleButton = (props) => {
  return (
    <button className="GoogleButton">
      <img src={props.Icon} />
      {props.text}
    </button>
  );
};
GoogleButton.propTypes = {
  text: PropTypes.string.isRequired,
  Icon: PropTypes.string.isRequired,
};
export const DefaultButton = (props) => {
  return <button className="DefaultBtn">{props.text}</button>;
};
export const DefaultBtn = (props) => {
  return <button className="Default">{props.text}</button>;
};
DefaultButton.propTypes = {
  text: PropTypes.string.isRequired,
};
DefaultBtn.propTypes = {
  text: PropTypes.string.isRequired,
};
export default ToggableButton;
