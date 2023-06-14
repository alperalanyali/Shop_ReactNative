import React, { useState } from 'react'
import { Text, SafeAreaView, View, Image, Alert } from 'react-native';
import CustomTextInput from '../../components/CustomTextInput/CustomTextInput';
import styles from './Login-styles'
import CustomButton from '../../components/CustomButton/CustomButton';
import { Formik } from 'formik';
import usePost from '../../hooks/usePost';
import { API_URL } from '../../../config';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch, useSelector } from 'react-redux';

import {setUser} from '../../context/reducer';
import  {RootState} from '../../context/store'


const Login = ({navigation}) => {  
    const {data,loading,error,post} = usePost()
   
    const dispatch = useDispatch();

    const handleLogin = (values) => {
        post(API_URL+"/auth/login",values);
    
        console.log(data);
        if(data){            
            dispatch(setUser(user));   
            // navigation.navigate("Products")
                     
        }
    }
    
    
    if(error){
        Alert.alert(`Dükkan`,"Kullanıcı bulunamadı");       
    }
    return (
       <Formik 
        initialValues={{
            username:"",
            password:""
        }}
        onSubmit={(formValues)=> handleLogin(formValues)}
       >

        {
            ({handleSubmit,handleChange,values})=>(
                <View style={styles.container}>
                    <CustomTextInput placeholder='Eposta adresinizi giriniz' value={values.username} onChangeText={handleChange("username")} clearBtnShown={true} iconName={"account"}/>
                    <CustomTextInput placeholder='Şifrenizi giriniz' value={values.password} onChangeText={handleChange("password")} clearBtnShown={true} iconName={"key"}/>
                    
                    <CustomButton title="Giriş" onPress={handleSubmit} loading={loading}/>                        
                </View>
            )
        }
       </Formik>
         
    )
}

export default Login;

const user = {   
        "id": 1,
        "email": "john@gmail.com",
        "username": "johnd",
        "password": "m38rmF$",
        "phone": "1-570-236-7033",        
}


