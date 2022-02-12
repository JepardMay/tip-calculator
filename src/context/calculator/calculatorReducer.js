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

const reducer = (state, action) => {
  switch (action.type) {
    case SET_BILL_VALUE:
      return {
        ...state,
        bill: action.payload,
      };
    case SET_NUMBER_OF_PEOPLE_VALUE:
      return {
        ...state,
        numberOfPeople: action.payload,
      };
    case SET_TIP_AMOUNT:
      return {
        ...state,
        tipAmount: action.payload,
      };
    case SET_TOTAL:
      return {
        ...state,
        total: action.payload,
      };
    case SET_SELECTED:
      return {
        ...state,
        selectedTip: action.payload.id,
        tipPercent: action.payload.value,
      };
    case SET_CUSTOM:
      return {
        ...state,
        selectedTip: "custom",
      };
    case SET_CUSTOM_VALUE:
      return {
        ...state,
        tipPercent: action.payload,
        customTip: action.payload,
      };
    case REMOVE_CUSTOM:
      return {
        ...state,
        selectedTip: null,
        tipPercent: '0',
      };
    case INPUT_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case REMOVE_INPUT_ERROR:
      return {
        ...state,
        error: null
      };
    case RESET_FORM:
      return {
        ...state,
        bill: '',
        tipPercent: '',
        selectedTip: null,
        customTip: '',
        numberOfPeople: '',
        tipAmount: '0.00',
        total: '0.00',
        error: null,
      };
    default:
      return state;
  }
};

export default reducer;
