import React, { useState, useEffect } from 'react'
import { View, Button, Text, SafeAreaView, StyleSheet, Image, ActivityIndicator, TouchableOpacity } from 'react-native'
import Colors from '../constants/colors'
import CustomTextInput from './CustomTextInput'
import PrimaryButton from './PrimaryButton'
import * as ImagePicker from 'expo-image-picker';
import { StackActions, useNavigation } from '@react-navigation/native'
import { vh } from 'react-native-expo-viewport-units'
import CustomModal from './CustomModal'
import SecondaryButton from './SecondaryButton'
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Profile = () => {
    const navigation = useNavigation()

  
    const [query_id, setQueryId] = useState('')
    const [token, setToken] = useState('')

    const getUser = async () => {
      // Retrieve the string from async storage
      try {
        const jsonString = await AsyncStorage.getItem('userData');
  
        // Parse the string back into an object
        const User = JSON.parse(jsonString);
        console.log(User);
        setToken(User.access_token);
        setQueryId(User.query_id);
        console.log('QUERY_ID: ', User.query_id);
        console.log('TOKEN: ', User.access_token);
      } catch (error) {
        console.log(error);
      }
    }
  
    useEffect(() =>{
       getUser()
    }, [])

    const [errors, setErrors] = React.useState({});
    const [inputs, setInputs] = React.useState({username: ''});
    const [message, setMessage] = useState([])
    const [visibleModal, setVisibleModal] = React.useState(false);
    const [loading, setLoading] = useState(false);

    const [image, setImage] = useState(null);
    const [imageObj, setImageObj] = useState({});

    const handleOnchange = (text, input) => {
        setInputs(prevState => ({...prevState, [input]: text}));
      };
      const handleError = (error, input) => {
        setErrors(prevState => ({...prevState, [input]: error}));
      };


    // define a function to render the button text based on loading state
    const getButtonText = () => {
      return loading ? <ActivityIndicator size="large" color={Colors.primary} /> : <Text>Continue</Text>
    };

    const pickImage = async() => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

        if (!result.canceled) {
          setImage(result.assets[0].uri);
          setImageObj(result.assets[0])
      }
    }

    const saveData = async (key, value) => {
      try {
        await AsyncStorage.setItem(key, value);
      } catch (error) {
        console.log(error);
      }
    };

    const getImg = async (key) => {
      try {
        const value = await AsyncStorage.getItem(key);
        if (value !== null) {
          console.log(value);
        }
      } catch (error) {
        console.log(error);
      }
    };

    const sendXmlHttpRequest = (data) => {
      setLoading(true)
      const xhr = new XMLHttpRequest();
    
      return new Promise((resolve, reject) => {
        xhr.onreadystatechange = e => {
          if (xhr.readyState !== 4) {
            return;
          }
          console.log(xhr.status)
          if (xhr.status === 201) {
            setLoading(false)
            saveData('userImage', JSON.parse(xhr.responseText).image)
            saveUsername(JSON.parse(xhr.responseText).image)
            console.log(JSON.parse(xhr.responseText).image);
            getImg('user_image')
          } else {
            setLoading(false)
            reject("Request Failed");
            // console.log(xhr.responseText);
            // setMessage(JSON.parse(xhr.responseText).detail)
            // setVisibleModal(true)
          }
        };
        xhr.open("POST", `https://iholda-api-twwdb.ondigitalocean.app/api/users/userprofiles/${query_id}/images/`);
        xhr.setRequestHeader("Authorization", "Bearer " + token);
        xhr.setRequestHeader("Agent-Signature", "mobile/iB+44");
        xhr.setRequestHeader("Cookie", "csrftoken=C25cVg5RqjvkSvNS3LcHJ0ifl0gVk82m;sessionid=skrvmfekmj6homyvlzpx5nj9k75hdhbl");
        xhr.send(data);
      });
    }

  const uploadImage = async () => {
    const formdata = new FormData();
    formdata.append("image", {
      uri: image,
      name: image,
      type: 'image/jpeg',  // <-  Did you miss that one?
  });

    const response = await sendXmlHttpRequest(formdata);

  }
  
  const saveUsername = async (InvImageUrl) => {
    setLoading(true)

    const url = `https://iholda-api-twwdb.ondigitalocean.app/api/users/${query_id}/`;
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Agent-Signature", "mobile/iB+44");
    myHeaders.append("Cookie", "csrftoken=C25cVg5RqjvkSvNS3LcHJ0ifl0gVk82m;sessionid=skrvmfekmj6homyvlzpx5nj9k75hdhbl");
    var raw = JSON.stringify({
    "username": inputs.username
    });

    var requestOptions = {
    method: 'PUT',
    headers: myHeaders,
    body: raw,redirect: 'follow'
    };

    try {
      const response = await fetch(url, requestOptions);
      if (response.ok) {
        setLoading(false)
        // If successful, navigate to profile sceen
        navigation.navigate('CreateUnlockPin', {inviteeImg: InvImageUrl});
      } else {
        setLoading(false)
        // If registration is not successful, display error message
        const data = await response.json();
        throw new Error(data.detail);
      }
    } catch (error) {
        console.log(error.message);
        setMessage(error.message)
        setVisibleModal(true)
    }

  }

  return (
    <SafeAreaView style={{ backgroundColor: Colors.primary, flex: 1 }}>
      <View style={styles.container}>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button title="Pick an image from camera roll" onPress={pickImage} />
      
    </View>
         <View style={{justifyContent: 'center', alignItems: 'center', ...styles.subContainer}}>
            <Text style={{marginBottom: 20, textAlign: 'center', fontSize: 25, fontWeight: 'bold', color: Colors.white}}>Profile picture</Text>
            <TouchableOpacity onPress={pickImage}>
                {!image && <Image style={{ width: 150, height: 150}} source={require('../../assets/profile.png')}  />}
                {image && <Image source={{ uri: image }} style={{ width: 150, height: 150, borderRadius: 100, borderWidth: 6, borderColor: Colors.secondary }} />}
            </TouchableOpacity>
         </View>

         <View >
            <Text style={{textAlign: 'center', color: Colors.white, fontSize: 25, marginBottom: -10, marginTop: 65}}>Username</Text>
            <CustomTextInput
            onChangeText={text => handleOnchange(text, 'username')}
            onFocus={() => handleError(null, 'text')}
            placeholder="bayuga"
            error={errors.text}
            text
          />
         </View>

         <View style={{marginTop: 100}}>
            <PrimaryButton 
             title={getButtonText()}
             bgColor={Colors.black} 
             borderRadius={10}
             onPress={uploadImage}
            //  onPress={saveUsername}
            //  onPress={() => navigation.navigate('CreateUnlockPin')} 
         />
         </View>
      </View>
      <CustomModal visible={visibleModal}>
        <Text style={{fontSize: 22, textAlign: 'center'}}>
          {message}
        </Text>
        <View style={{display: 'flex', flexDirection: 'row', marginTop: vh(7), justifyContent: 'flex-end'}}>
          <SecondaryButton 
            title={'Close'} 
            bgColor={Colors.white}
            onPress={() => {
              setVisibleModal(false);
            }}
          />
        </View>
    </CustomModal>
   </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        width: '80%',
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    subContainer: {
       marginTop: 30,
       marginLeft: 'auto',
       marginRight: 'auto'
    }
})

export default Profile
