import React, { useState } from 'react';
import { StyleSheet, View, ImageBackground, Text, TouchableOpacity } from 'react-native';
import { Button, Input } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from 'expo-authentication';
import { vw, vh } from 'react-native-expo-viewport-units';
import { MaterialIcons } from '@expo/vector-icons';

const LoginScreen = () => {
  const navigation = useNavigation();
  const [inputs, setInputs] = useState({email: '', password: ''});
  const [email, setEmail] = useState('fombutnubia007@gmail.com');
  const [password, setPassword] = useState('tracker123')
//   const auth = useAuth();


  const handleOnchange = (text, input) => {
    setInputs(prevState => ({...prevState, [input]: text}));
  };

  const login = async () => {
    console.log(inputs);console.log(' ');
    console.log(email, password);
    if (inputs.email === email && inputs.password === password) {
      navigation.navigate('first')
      console.log(inputs);
    } else {
      alert('Email and password combination do not match')
    }
  };

  return (
    <View style={styles.container}>

        <View style={{...styles.overlay, borderRadius: 20, height: vh(48), alignItems: 'center', justifyContent: 'center'}}>
           <MaterialIcons name="location-on" size={75} color="white" />
           <Text style={{fontSize: 28, color: '#fff', fontWeight: 700}}>U~Tracker</Text>
        </View>

        <View style={{width: vw(100), height: vh(45), backgroundColor: '#fff', borderTopLeftRadius: 25, borderTopRightRadius: 25, elevation: 40, marginTop: -vh(5), height: vh(65)}}>
            <View style={{padding: vh(5)}}>
                <Text style={{fontSize: 22, color: '#000080', fontWeight: 600, textAlign: 'center'}}>Welcome</Text>
                <Text style={{marginTop: vh(1), textAlign: 'center'}}>Enter your information below</Text>
            </View>
            <View style={{padding: vh(1)}}>
            <Input
                placeholder="Email"
                onChangeText={text => handleOnchange(text, 'email')}
                value={inputs.email}
            />
            <Input
                placeholder="Password"
                onChangeText={text => handleOnchange(text, 'password')}
                value={inputs.password}
                secureTextEntry
            />
            <TouchableOpacity onPress={login} style={{marginTop: -vh(3.5), marginBottom: vh(3), paddingLeft: vh(1)}}>
                <Text>Forgot password?</Text>
            </TouchableOpacity>    

            </View>
            <TouchableOpacity onPress={login} style={{backgroundColor: '#000080', width: vw(75), padding: 18, alignItems: 'center', justifyContent: 'center', marginLeft: 'auto', marginRight: 'auto', borderRadius: 35, elevation: 25}}>
                <Text style = {{color: '#fff'}}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={{marginTop: vh(1), textAlign: 'center', textDecorationLine: 'underline'}}>Sign up</Text>
            </TouchableOpacity>    
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: vh(5)
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  text: {
    color: 'white',
    fontSize: 32,
    fontWeight: 'bold',
  },
  overlay: {
    backgroundColor: '#000080',
  },
});

export default LoginScreen;