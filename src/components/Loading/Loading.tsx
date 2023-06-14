import React  from 'react';
import Lottie from 'lottie-react-native';
import { ActivityIndicator, View } from 'react-native/types';

const Loading = ()=>{
    return (
        <View style={{justifyContent:'center',alignItems:'center'}}>
            <ActivityIndicator size="large"/>
        </View>
    )
}
export default Loading;