import {
  APPLY_STYLE,
  CHANGE_STYLES,
  CHANGE_TEXT,
  CHANGE_TITLE,
  TABLE_RESIZE,
} from './types';

export function tableResizeAC(data) {
  return {
    type: TABLE_RESIZE,
    data,
  };
}

export function changeTextAC(data) {
  return {
    type: CHANGE_TEXT,
    data,
  };
}

export function changeStylesAC(data) {
  return {
    type: CHANGE_STYLES,
    data,
  };
}

export function applyStyleAC(data) {
  return {
    type: APPLY_STYLE,
    data,
  };
}

export function changeTitleAC(data) {
  return {
    type: CHANGE_TITLE,
    data,
  };
}
