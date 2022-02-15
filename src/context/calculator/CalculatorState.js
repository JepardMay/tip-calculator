import React, { useReducer, useEffect } from 'react';
import CalcatorContext from './calculatorContext';
import calculatorReducer from './calculatorReducer';
import {
  SET_BILL_VALUE,
  SET_NUMBER_OF_PEOPLE_VALUE,
  SET_TIP_AMOUNT,
  SET_TOTAL,
  SET_SELECTED,
  SET_CUSTOM,
  SET_CUSTOM_VALUE,
  REMOVE_CUSTOM,
  INPUT_ERROR,
  REMOVE_INPUT_ERROR,
  RESET_FORM,
} from '../types';

const CalculatorState = props => {
  const initialState = {
    bill: '',
    tipPercent: '',
    selectedTip: null,
    customTip: '',
    numberOfPeople: '',
    tipAmount: '0.00',
    total: '0.00',
    error: null,
  };

  const [state, dispatch] = useReducer(calculatorReducer, initialState);

  useEffect(() => {
    if (Number(state.bill)   > 0 && Number(state.numberOfPeople) > 0 && Number(state.tipPercent) >= 0) {
      calculateTipAmount();
    }
    if (Number(state.bill) > 0 && Number(state.numberOfPeople) > 0) {
      calculateTotal();
    }
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [state.bill, state.tipPercent, state.numberOfPeople]);

  const setInputValue = (value, id) => {
    if (value === '0' || Number(value) <= 0) {
      dispatch({
        type: INPUT_ERROR,
        payload: { [id]: "Can't be zero" },
      });
    } else {
      dispatch({
        type: REMOVE_INPUT_ERROR,
      });
    }
    if (id === "bill" && (Number(value) >= 0 && Number(value) <= 1000000000)) {
      dispatch({
        type: SET_BILL_VALUE,
        payload: value,
      });
    }
    if (id === "numberOfPeople" && (Number(value) >= 0 && Number(value) <= 1000000000)) {
      dispatch({
        type: SET_NUMBER_OF_PEOPLE_VALUE,
        payload: value,
      });
    }
  };

  const calculateTipAmount = () => {
    let tipAmount = ((Number(state.bill) * Number(state.tipPercent) / 100) / Number(state.numberOfPeople)).toFixed(2).toString();

    dispatch({
      type: SET_TIP_AMOUNT,
      payload: tipAmount,
    });
  };

  const calculateTotal = () => {
    let total;

    if (Number(state.tipPercent) > 0) {
      total = ((Number(state.bill) * Number(state.tipPercent) / 100 / Number(state.numberOfPeople)) + (Number(state.bill) / Number(state.numberOfPeople))).toFixed(2).toString();
    } else {
      total = (Number(state.bill) / Number(state.numberOfPeople)).toFixed(2).toString();
    }

    dispatch({
      type: SET_TOTAL,
      payload: total,
    });
  };

  const setSelected = (id, value) => {
    dispatch({
      type: SET_SELECTED,
      payload: { id, value },
    });
  };

  const setCustom = () => {
    dispatch({
      type: SET_CUSTOM,
    });
  };

  const setCustomValue = (value) => {
    if (Number(value) >= 0 && Number(value) <= 999) {
      dispatch({
        type: SET_CUSTOM_VALUE,
        payload: value,
      });
    }
  };

  const removeCustom = () => {
    dispatch({
      type: REMOVE_CUSTOM,
    });
  };

  const resetForm = () => {
    dispatch({
      type: RESET_FORM,
    });
  };

  return (
    <CalcatorContext.Provider
      value={{
        bill: state.bill,
        tipPercent: state.tipPercent,
        selectedTip: state.selectedTip,
        customTip: state.customTip,
        numberOfPeople: state.numberOfPeople,
        tipAmount: state.tipAmount,
        total: state.total,
        error: state.error,
        setInputValue,
        calculateTipAmount,
        calculateTotal,
        setSelected,
        setCustom,
        setCustomValue,
        removeCustom,
        resetForm
      }}
    >
      {props.children}
    </CalcatorContext.Provider>
  )
};

export default CalculatorState;
