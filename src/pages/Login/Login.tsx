import React, { useState } from 'react'
import { Text, SafeAreaView, View, Image } from 'react-native';
import CustomTextInput from '../../components/CustomTextInput/CustomTextInput';
import styles from './Login-styles'
import CustomButton from '../../components/CustomButton/CustomButton';
import { Formik } from 'formik';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")

    const handleOnEmailChange = (text) => {
        setEmail(text)
    }
    const handleOnPasswordChange = (text) => {
        setPassword(text);
    }
    const handleLogin = (values) => {
            console.log(values)
    }
    return (
       <Formik 
        initialValues={{
            email:"",
            password:""
        }}
        onSubmit={(formValues)=> handleLogin(formValues)}
       >

        {
            ({handleSubmit,handleChange,values})=>(
                <View style={styles.container}>
                    <CustomTextInput placeholder='Eposta adresinizi giriniz' value={values.email} onChangeText={handleChange("email")} clearBtnShown={true} iconName={"account"}/>
                    <CustomTextInput placeholder='Şifrenizi giriniz' value={values.password} onChangeText={handleChange("password")} clearBtnShown={true} iconName={"key"}/>
                    
                    <CustomButton title="Giriş" onPress={handleSubmit}/>                        
                </View>
            )
        }


       </Formik>
     
    )
}

export default Login;