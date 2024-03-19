import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {Button, Divider} from 'react-native-paper'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import SignupContent from '../components/SignupContent';

const Signup = ( {navigation} ) => {
  return (
    <View style = {styles.container}>
      <View style = {styles.content} >
        <Text>Already have an account?</Text>
        <Button theme = {{colors: {primary: '#0066ff'}}} style = {{borderRadius: 2}} onPress={() => navigation.navigate('Signin')}>Signin</Button>
      </View>
      <View style = {{display:'flex', flexDirection:'row', alignItems:'center', gap: 5, justifyContent: 'center'}}>
        <Divider style = {{opacity: 0.6, width: wp(100)}}/>
        <Text style = {{opacity: 0.6,}}>or</Text>
        <Divider style = {{opacity: 0.6, width: wp(100)}}/>
      </View>
      <View style = {styles.main}>
        <View>
          <SignupContent/>
        </View>
      </View>
    </View>
  )
}

export default Signup

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