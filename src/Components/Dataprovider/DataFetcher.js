import { createContext, useReducer } from "react";
import { initialState, secondReducer } from "../../Pages/Utilities/SecondReducer";

export const DataContext = createContext();
export const DataTaker = ({Children, secondReducer, initialState}) => {
    return (
        <DataContext.Provider value={useReducer(secondReducer,initialState)}>
            {Children}
        </DataContext.Provider>
    )
}