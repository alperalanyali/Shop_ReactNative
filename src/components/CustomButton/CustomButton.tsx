import React from 'react';
import {Text,TouchableWithoutFeedback,TouchableOpacity,View, ActivityIndicator} from 'react-native';

import styles from './CustomButton-styles'
const CustomButton = ({title,onPress,loading})=>{
    return(        
        <TouchableOpacity style={styles.container} onPress={onPress} disabled={loading}>
       {
            loading ? <ActivityIndicator color="white" /> :   <Text style={styles.text}>{title}</Text>
       }
          
        </TouchableOpacity>        
        
    )
}

export default CustomButton;