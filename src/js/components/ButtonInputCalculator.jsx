import React from 'react';
import { THEME_BUTTONS } from '../constants/calculators';

const ButtonInputCalculator = ({ value, themeMode, onPress }) => {
  const onClick = () => {
    onPress(value);
  };
  return (
    <button
      type="button"
      shape="circle"
      className={`button-input-calculator bg-opacity-80 ${
        value === '='
          ? THEME_BUTTONS[themeMode]?.classNameEqual
          : THEME_BUTTONS[themeMode]?.classNameInput
      } text-lg w-12 h-12 m-2 rounded-full flex items-center justify-center`}
      onClick={onClick}
    >
      {value}
    </button>
  );
};

export default ButtonInputCalculator;
