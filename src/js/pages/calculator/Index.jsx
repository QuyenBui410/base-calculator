/* eslint-disable no-eval */
import React, { useState } from 'react';

import ScreenCalculator from '../../components/ScreenCalculator';
import BackgroundImage from '../../../assets/img/background.jpeg';
import ButtonInputCalculator from '../../components/ButtonInputCalculator';

import {
  FORMULA_SYMBOLS,
  FORMULA_INPUTS,
  BUTTON_CALCULATOR_INPUT,
  THEME_BUTTONS,
} from '../../constants/calculators';
import { calculateFormula, formatInputFormula } from '../../helpers/calculator';
import SettingCalculator from '../../components/SettingCalculator';

const CalculatorPage = () => {
  const [backgroundImage, setBackgroundImage] = useState(BackgroundImage);
  const [themeMode, setThemeMode] = useState(THEME_BUTTONS.LIGHT.value);
  const [inputCalculator, setInputCalculator] = useState([]);
  const [outputCalculator, setOutputCalculator] = useState('');

  const onInputFormula = (key) => {
    let inputCalculatorTemp;
    switch (true) {
      case FORMULA_INPUTS.includes(key):
        inputCalculatorTemp = formatInputFormula([...inputCalculator, key]);
        setInputCalculator(inputCalculatorTemp);
        setOutputCalculator(calculateFormula(inputCalculatorTemp));
        break;
      case FORMULA_SYMBOLS.includes(key):
        setInputCalculator(formatInputFormula([...inputCalculator, key]));
        setOutputCalculator('');
        break;
      case key === '=':
        setInputCalculator([calculateFormula(inputCalculator)]);
        setOutputCalculator('');
        break;
      case key === 'AC':
        setInputCalculator([]);
        setOutputCalculator('');
        break;
      case key === 'CE':
        inputCalculatorTemp = [...inputCalculator];
        inputCalculatorTemp.pop();
        inputCalculatorTemp = formatInputFormula(inputCalculatorTemp);
        setInputCalculator(inputCalculatorTemp);
        setOutputCalculator(calculateFormula(inputCalculatorTemp));
        break;
      default:
        break;
    }
  };

  const changeThemeMode = () => {
    if (themeMode === THEME_BUTTONS.LIGHT.value) {
      setThemeMode(THEME_BUTTONS.DARK.value);
    } else {
      setThemeMode(THEME_BUTTONS.LIGHT.value);
    }
  };

  const changBackground = (file) => {
    const objectURL = window.URL.createObjectURL(file[0]);
    setBackgroundImage(objectURL);
  };

  const removeBackground = () => {
    setBackgroundImage('');
  };

  return (
    <>
      <div className="grid justify-items-center pt-2">
        <div
          className="main-calculator w-72 rounded-md bg-gray-900"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          <div className="flex justify-end mb-3">
            <SettingCalculator
              themeMode={themeMode}
              changeThemeMode={changeThemeMode}
              changBackground={changBackground}
              removeBackground={removeBackground}
            />
          </div>
          <ScreenCalculator
            inputCalculator={inputCalculator}
            outputCalculator={outputCalculator}
          />
          <div className="main-input-calculator">
            {BUTTON_CALCULATOR_INPUT.map((row, index) => (
              <div
                key={index}
                className={`row-input flex ${index > 0 && 'justify-between'}`}
              >
                {row.map((number) => (
                  <ButtonInputCalculator
                    key={number}
                    value={number}
                    onPress={onInputFormula}
                    themeMode={themeMode}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default CalculatorPage;
