import react, {createContext, useReducer} from 'react'
import { initialState, reducer } from '../../Pages/Utilities/Reducer'

export const DataContext = createContext()

export const DataPovider = ({children, reducer, initialState}) => {
    return (
       <DataContext.Provider value={useReducer(reducer, initialState)}>
       {children}
       </DataContext.Provider>
    )
}

