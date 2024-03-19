import { Image, StyleSheet, Text, View,} from 'react-native'
import React from 'react'
import { Card, TextInput, Checkbox, Button, Divider } from 'react-native-paper';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const Maincontent = ({ promptAsync }) => {

    const [text, setText] = React.useState('');
    const [checked, setChecked] = React.useState(false);

  return (
    <View>
      <Card style = {styles.container}>
    <Card.Content>
        <View style = {{margin: 20}} >
          <View style = {{marginBottom: 10}}>
            <View style = {{display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: 10, gap: 5}}>
              <Text style = {{fontSize: 20, opacity: 0.7}} >Welcome to LH Finance!</Text>
              <Image source = {require('../images/money-box.png')}
                style = {{
                  height: 20,
                  width: 20,
                }}
              
              />
            </View>
            <Text style = {{fontSize: 12, opacity: 0.6}} >Please sign-in to your account to start</Text>
           </View>
            <View style = {{marginBottom: 30, marginTop: 10}}>
                <TextInput style = {{backgroundColor: 'white',}}
                theme={{ colors: { primary: '#0066ff'}}}
                label  ="Name or Email"
                right={<TextInput.Icon icon="shield-account" />}
                />
            </View>
            <View style = {{marginBottom: 10,}}>
            <TextInput style = {{backgroundColor: 'white',}}
              theme={{ colors: { primary: '#0066ff'}}}
              label="Password"
              secureTextEntry
              right={<TextInput.Icon icon="eye" />}
            />
            </View>
            <Text style = {{color: '#0066ff', marginLeft: 195}}>Forgot Password?</Text>
            <View style = {{display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: 20}} >
            <Checkbox
            theme={{colors: {primary: '#0066ff'}}}
              status={checked ? 'checked' : 'unchecked'}
              onPress={() => {
                setChecked(!checked);
              }}
            />
            <Text>Remember me</Text>
            </View>
            <Button style={{borderRadius: 5}} theme = {{colors: {outline: '#0066ff', primary: '#0066ff'}}} mode="outlined" onPress={() => console.log('Pressed')}>Sign in </Button>
            <View style = {{ display: 'flex', flexDirection: 'row', gap: 3, alignItems: 'center', justifyContent: 'center', margin: 10, opacity: 0.5 }}>
              <Divider style = {{width: 40}}/>
              <Text>or</Text>
              <Divider style = {{width: 40}}/>
            </View>
            <Button style={{borderRadius: 5}} icon="google-plus" theme = {{colors: {outline: '#0066ff', primary: '#0066ff'}}} mode="contained" onPress={() => promptAsync}>Continue with Google</Button>
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
     
    </View>
  )
}

export default Maincontent

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'white',
        height: hp(70),
        marginBottom: 10,
    },
})