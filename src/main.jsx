import { render } from 'preact'
import { App } from './app.jsx'
import { DataPovider } from './Components/Dataprovider/Dataprovider.jsx'
import { initialState, reducer } from './Pages/Utilities/Reducer.js';


render(
  <DataPovider reducer={reducer} initialState={initialState}>
    <App />
  </DataPovider>,
  document.getElementById("app")
);
