import React from 'react';
import {Text,View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Products from './pages/Products/Products';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import Login from './pages/Login/Login'
import { Provider,useDispatch,useSelector } from 'react-redux';
import { RootState } from './context/store';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { removeUser } from './context/reducer';
const Stack = createNativeStackNavigator();
const App = ()=>{
  const userSession = useSelector((state:RootState) => state.user)
  const dispatch = useDispatch();
  return(    
    <NavigationContainer>
      <Stack.Navigator >
        {          
         !userSession ?  <Stack.Screen name="Login" component={Login} options={{headerShown:false}}/> : 
        <>
         
         <Stack.Screen name="Products" component={Products} options={{
          title:"Dükkan",
          headerStyle:{backgroundColor:'#90caf9'},
          headerTintColor:'#ffff',
          headerBackVisible:false,
          headerRight:()=> <Icon name="logout" size={20} color="white" onPress={()=> {
            dispatch(removeUser())
            console.log("ddd")
          }}/>
          
        
        }}
        />
        <Stack.Screen name="ProductDetail" component={ProductDetail}  options={{
          title:"Detay",
          headerStyle:{backgroundColor:'#90caf9'},
          headerTintColor:'#ffff'}}
          />
          </>
  } 
       
      
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;