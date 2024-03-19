import { Image, StyleSheet, Text, View, KeyboardAvoidingView } from 'react-native'
import React from 'react'
import { Card, TextInput, Checkbox, Button } from 'react-native-paper';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const SignupContent = () => {
  
    const [text, setText] = React.useState('');
    const [checked, setChecked] = React.useState(false);

  return (
    <KeyboardAvoidingView behavior='padding' >
      <Card style = {styles.container}>
    <Card.Content>
        <View style = {{margin: 20}} >
          <View style = {{marginBottom: 10}}>
            <View style = {{ marginBottom: 10}}>
              <Text style = {{fontSize: 20, opacity: 0.7}} >Create Account</Text>
            </View>
            <Text style = {{fontSize: 12, opacity: 0.6}} >Please sign-up to create your account</Text>
           </View>
            <View style = {{marginBottom: 30, marginTop: 10}}>
                <TextInput style = {{backgroundColor: 'white',}}
                theme={{ colors: { primary: '#0066ff'}}}
                label  ="Name"
                right={<TextInput.Icon icon="account" />}
                />
            </View>
            <View style = {{marginBottom: 30}}>
                <TextInput style = {{backgroundColor: 'white',}}
                theme={{ colors: { primary: '#0066ff'}}}
                label  ="Email"
                right={<TextInput.Icon icon="gmail" />}
                />
            </View>
            <View style = {{marginBottom: 20,}}>
            <TextInput style = {{backgroundColor: 'white',}}
              theme={{ colors: { primary: '#0066ff'}}}
              label="Password"
              secureTextEntry
              right={<TextInput.Icon icon="eye" />}
            />
            </View>
            <View style = {{display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: 20}} >
            <Checkbox
            theme={{colors: {primary: '#0066ff'}}}
              status={checked ? 'checked' : 'unchecked'}
              onPress={() => {
                setChecked(!checked);
              }}
            />
            <View style = {{display:'flex', flexDirection: 'row', gap: 4}}>
                <Text>I agree to the</Text>
                <Text style = {{color:'#0066ff'}} >Term & Conditions</Text>
            </View>
            </View>
            <Button style={{borderRadius: 5}} theme = {{colors: {outline: '#0066ff', primary: '#0066ff'}}} mode="contained" onPress={() => console.log('Pressed')}>Sign up </Button>
            <View style = {{display: 'flex', flexDirection: 'row', marginTop: 40, justifyContent: 'center', justifyContent: 'space-evenly'}}>
                <Image
                    source={require('../images/facebook.png')}
                    style = {{
                      height: 30,
                      width: 30,
                    }}
                />
                <Image
                    source={require('../images/twitterx.png')}
                    style = {{
                      height: 30,
                      width: 30,
                    }}
                />
                <Image
                    source={require('../images/instagram.png')}
                    style = {{
                      height: 30,
                      width: 30,
                    }}
                />
            </View>
        </View>
         
    </Card.Content>
  </Card>
    <View style = {{height: 100}}/>
    </KeyboardAvoidingView>
  )
}

export default SignupContent

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'white',
        height: hp(70),
        marginBottom: 10,
    },
})