import { useContext, useEffect } from 'react';
import './app.css'
import './index.css'
import Routing from './Routing';
import { DataContext } from './Components/Dataprovider/Dataprovider';
import { auth } from './Pages/Utilities/firebase';
import { Type } from './Pages/Utilities/action.type';

export function App() {
  const [{user}, dispatch] = useContext(DataContext);
  useEffect(()=>{
    auth.onAuthStateChanged((authUser)=>{
      if(authUser){
        dispatch({
          type:Type.SET_USER,
          user: authUser
        })

      }else{
        dispatch({
          type: Type.SET_USER,
          user: null
        })

      }
    })
   
  },[])

  return  <Routing/>;
}
