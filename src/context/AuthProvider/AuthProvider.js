import React,{useEffect,useState} from 'react';

import {store} from '../store'
import { Provider } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import reducer from '../reducer';
const AuthProvider = ({children})=>{
    const [user,setUser] = useState(null);
    const [authLoading,setAuthLoading] = useState(true);

    useEffect(()=>{
        console.log("aaa")
        AsyncStorage.getItem("@USER").then(userSession => {                     
            if(userSession){
                console.log("ddd")
                setUser(JSON.parse(userSession))
            }         
            setAuthLoading(false);
        })
    },[])


    // const store = configureStore(reducer,{user,authLoading});
    return(
        <Provider store={store}>
            {children}
        </Provider>
    )
}

export default AuthProvider