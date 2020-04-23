import * as React from 'react';
import {StyleSheet,Animated,View,Image,Easing} from 'react-native';



export default class Windmill extends React.Component{
    state={
        animation: new Animated.Value(0)
    };
    componentDidMount(){
        this.startAnimation()
    }
    startAnimation = () => {
       Animated.loop(
            Animated
            .timing(this.state.animation,{
                duration:1000,
                toValue:1,
                easing:Easing.linear
            })
       ).start()
       
    };
    render(){
        const interpolation=this.state.animation.interpolate({
            inputRange:[0,1],
            outputRange:['0deg','-360deg']
        });
        const animatedStyles={
            transform:[{
              rotate:interpolation
            }]
        };
        return(
            <View style={styles.container}>
                <Animated.Image
                    style={[styles.tire,animatedStyles]}
                    source={require('../../assests/tire.png')} 
                />
                

            </View>
        );
    }
}

const styles=StyleSheet.create({
    tire:{
        width:50,
        height:50
    }
    


});