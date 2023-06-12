import React from "react";
import {Text,View,Image,ScrollView} from 'react-native';
import styles from './ProductDetail-style'
import useFetch from "../../hooks/useFetch/useFetch";
import { API_URL } from "../../../config";
const ProductDetail = ({route})=>{
    const {id} = route.params
    
    console.log(API_URL+'/products/'+id)
    const {error,data,loading} = useFetch(API_URL+"/products/"+id)
    console.log(data);
    return(
        <ScrollView>
            <View style={styles.container}>
                <Image style={styles.image} source={{uri:data.image}}/>
                <Text style={styles.name}>{data.title}</Text>
                <Text style={styles.detail}>{data.description}</Text>
                <Text style={styles.price}>{data.price} TL</Text>
            </View>
        </ScrollView>
    )
}

export default ProductDetail;