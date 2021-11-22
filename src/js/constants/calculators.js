export const FORMULA_INPUTS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, '.'];
export const FORMULA_SYMBOLS = ['/', '*', '-', '+'];

export const BUTTON_CALCULATOR_INPUT = [
  ['CE', 'AC'],
  [7, 8, 9, '/'],
  [4, 5, 6, '*'],
  [1, 2, 3, '-'],
  [0, '.', '=', '+'],
];

export const THEME_BUTTONS = {
  LIGHT: {
    value: 'LIGHT',
    label: 'Light mode',
    classNameInput: 'bg-gray-100 text-black',
    classNameEqual: 'bg-blue-700 text-white',
  },
  DARK: {
    value: 'DARK',
    label: 'Dark mode',
    classNameInput: 'bg-gray-800 text-white',
    classNameEqual: 'bg-blue-700 text-white',
  },
};
