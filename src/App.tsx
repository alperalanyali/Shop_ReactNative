import React from 'react';
import {Text,View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Products from './pages/Products/Products';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import Login from './pages/Login/Login'

const Stack = createNativeStackNavigator();
const App = ()=>{
  return(
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen name="Login" component={Login} options={{headerShown:false}}/>
        <Stack.Screen name="Products" component={Products} options={{
          title:"Dükkan",
          headerStyle:{backgroundColor:'#90caf9'},
          headerTintColor:'#ffff',
          headerBackVisible:false

        }}/>
        <Stack.Screen name="ProductDetail" component={ProductDetail}  options={{
          title:"Detay",
          headerStyle:{backgroundColor:'#90caf9'},
          headerTintColor:'#ffff'

        }}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;