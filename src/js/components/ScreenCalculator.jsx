import React from 'react';
import { Input } from 'antd';

const ScreenCalculator = ({ inputCalculator = [], outputCalculator = '' }) => {
  const inputCalculatorString = inputCalculator?.join('') || '0';
  return (
    <div className="screen-calculator rounded-xl">
      <Input
        className="screen-input input-calculator bg-white rounded-t"
        bordered={false}
        readOnly
        value={inputCalculatorString}
      />
      <Input
        className="screen-input output-calculator bg-white rounded-b"
        bordered={false}
        readOnly
        value={outputCalculator}
      />
    </div>
  );
};

export default ScreenCalculator;
