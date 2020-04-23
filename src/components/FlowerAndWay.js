import * as React from 'react';
import {StyleSheet,View,Image} from 'react-native';


export default function FlowerAndWay(){
    return(
    <View style={styles.container}>
        <Image 
            source={require('../../assests/flowers-and-way.png')}
            style={styles.flowers}
            resizeMode={"contain"}
        />
    </View>
    );

}

const styles=StyleSheet.create({
    container:{
        alignItems:'center',
        zIndex:5
    },
    flowers:{
        width:'80%',
        top:-220,
        
    }
});