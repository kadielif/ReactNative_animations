

import * as React from 'react';
import {StyleSheet,View} from 'react-native';
import Windmill from './src/components/Windmill';
import FlowerAndWay from './src/components/FlowerAndWay';
import Car from './src/components/Car';


function App(){
  return(
    <View style={styles.container}>
      <Windmill style={{left:190,top:45}}/>
      <Windmill style={{left:-40,top:43}}/>
      <Car style={{top:300}}/>
      <FlowerAndWay style={{top:20}} />
    </View>
  );
};

const styles=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#7ebdb4',


    
  },

});


export default App;
