import React, { useEffect, useState } from 'react';
import {Text,View,SafeAreaView,FlatList,ActivityIndicator} from 'react-native';
import styles from './Products-style';
import {API_URL} from '../../../config'
import ProductCard from '../../components/ProductCard/ProductCard';
import useFetch from '../../hooks/useFetch/useFetch';
import Loading from '../../components/Loading/Loading';
const Products = ({navigation})=>{
    
    const {error,loading,data} = useFetch(API_URL+"/products");
    
    const handleProductSelect = (id)=>{
        
        navigation.navigate('ProductDetail',{id})
    }
    const renderProduct = ({item}) => <ProductCard product={item} onSelect={()=>handleProductSelect(item.id)}/>
    if(loading){
        return  <ActivityIndicator size='large'/>
    }
    if(error){
        return <Text>{error}</Text>
    }
    return(                     
             <FlatList
                data={data}
                renderItem={renderProduct}
                />
    );
}

export default Products;