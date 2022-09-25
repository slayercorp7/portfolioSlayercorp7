import { FC, useReducer, PropsWithChildren } from 'react';
import { UiContext, uiReducer } from './';

export interface UiState {
    isMenuOpen: boolean;
}


const Ui_INITIAL_STATE: UiState = {
    isMenuOpen: false,
}


export const UiProvider:FC<PropsWithChildren> = ({ children }) => {

    const [state, dispatch] = useReducer( uiReducer , Ui_INITIAL_STATE );

    const toggleSideMenu = () => {
        dispatch({type: '[UI] - togglemenu'})
    }

    return (
        <UiContext.Provider value={{
            ...state,

            //methods
            toggleSideMenu
        }}>
            { children }
        </UiContext.Provider>
    )
};