import { FORMULA_SYMBOLS } from '../constants/calculators';

/* eslint-disable no-eval */
export const calculateFormula = (formulaArray = []) => {
  if (FORMULA_SYMBOLS.includes(formulaArray[formulaArray.length - 1])) {
    return '';
  }
  const result = eval(formulaArray.join(''));
  return isFinite(result) ? result : '';
};

export const formatInputFormula = (inputFormulaBefore) => {
  let inputFormulaStringBefore = inputFormulaBefore.join('');
  if (!isNaN(inputFormulaStringBefore)) {
    inputFormulaStringBefore = parseFloat(inputFormulaStringBefore);
  }
  const formulaArray = inputFormulaStringBefore.toString().split('');
  return formulaArray.filter((item, index) => {
    if (
      (index === 0 && isNaN(item)) ||
      (parseInt(item, 10) === 0 &&
        FORMULA_SYMBOLS.includes(formulaArray[index - 1]) &&
        formulaArray[index + 1]) ||
      (FORMULA_SYMBOLS.includes(item) &&
        FORMULA_SYMBOLS.includes(formulaArray[index + 1]))
    ) {
      return false;
    }
    return true;
  });
};
