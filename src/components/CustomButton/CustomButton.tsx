import React from 'react';
import {Text,TouchableWithoutFeedback,TouchableOpacity,View} from 'react-native';

import styles from './CustomButton-styles'
const CustomButton = ({title,onPress})=>{
    return(        
        <TouchableOpacity style={styles.container} onPress={onPress}>
       
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>        
        
    )
}

export default CustomButton;