import { UiState } from './';

type UiType = { type: '[UI] - togglemenu' };

export const uiReducer = (state: UiState, action: UiType) : UiState=> {
  switch (action.type) {
    case '[UI] - togglemenu':
      return {
               ...state,
               isMenuOpen: !state.isMenuOpen

              };

    default:
      return state;
  }
};