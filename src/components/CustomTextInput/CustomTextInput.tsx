import React from 'react';
import { Text, TextInput,View,TouchableOpacity} from 'react-native';
import styles from './CustomTextInput-styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
const CustomTextInput = ({value,onChangeText,placeholder,iconName,clearBtnShown,onPressClear})=>{
    return(
        <View style={styles.container}>
            <TextInput style={styles.input} value={value} onChangeText={onChangeText} placeholder={placeholder}/>
            {
                clearBtnShown &&  
            <TouchableOpacity style={styles.clearContainer} onPress={onPressClear}>
                <Icon name={iconName} size={25}/>
            </TouchableOpacity>
            }
        </View>
    )
}

export default CustomTextInput;