import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Signin from './screens/Signin';
import Signup from './screens/Signup';
import * as Google from 'expo-auth-session/providers/google';
import * as WebBrowser from 'expo-web-browser';
import {GoogleAuthProvider, onAuthStateChanged, signInWithCredential} from 'firebase/auth';
import { auth } from './Firebase';
import AsyncStorage from '@react-native-async-storage/async-storage';

WebBrowser.maybeCompleteAuthSession();


const Stack = createNativeStackNavigator();

export default function App() {
  const [UserInfo, setUserInfo] = React.useState();
  const [request, response, prompAsync] = Google.useAuthRequest({
    iosClientId:'416136845853-tcfvl2dtl5fg7q0891tm3hd5tue6pra5.apps.googleusercontent.com' ,
    androidClientId:'416136845853-iq5rcu6ght2ldqmksc1kg1omlaqfdfve.apps.googleusercontent.com',
  });
  const SigninComponent = () => {
    return(
      <Signin prompAsync={prompAsync} />
    )
  }
  React.useEffect(() => {
    if(response?.type == 'success'){
      const {id_token} = response.params;
      const credential = GoogleAuthProvider.credential(id_token);
      signInWithCredential(auth, credential);
    }
  }, [response])

  
  return (

    <NavigationContainer>

        <Stack.Navigator screenOptions={{headerShown: false}}>
         <Stack.Screen name='Signin' component={SigninComponent} />
         <Stack.Screen name='Signup' component={Signup}/>
      </Stack.Navigator>

    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
