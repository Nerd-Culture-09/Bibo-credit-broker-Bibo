import { StyleSheet, Text, View, } from 'react-native'
import React from 'react'
import {Button, Divider} from 'react-native-paper'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Maincontent from '../components/Maincontent';

const Signin = ( {navigation, prompAsync} ) => {
  return (
    <View style = {styles.container}>
      <View style = {styles.content} >
        <Text>Don't have an account yet?</Text>
        <Button theme = {{colors: {primary: '#0066ff'}}} style = {{borderRadius: 2}} onPress={() => navigation.navigate('Signup')}>Signup</Button>
      </View>
      <View style = {{display:'flex', flexDirection:'row', alignItems:'center', gap: 5, justifyContent: 'center'}}>
        <Divider style = {{opacity: 0.6, width: wp(100)}}/>
        <Text style = {{opacity: 0.6,}}>or</Text>
        <Divider style = {{opacity: 0.6, width: wp(100)}}/>
      </View>
      <View style = {styles.main}>
        <View >
          <Maincontent prompAsync={prompAsync} style = {{height: hp(100)}}/>
        </View>
      </View>
    </View>
  )
}
 
export default Signin

const styles = StyleSheet.create({
container:{
  marginTop: 50,
},
content:{
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: 20, 
},
main:{
  margin: 20,
  marginTop: 40,
},
  
})