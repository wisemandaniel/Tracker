import React, {  } from 'react'
import { View, Text, StyleSheet, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { vw, vh } from 'react-native-expo-viewport-units';
import { MaterialIcons } from '@expo/vector-icons';


const First = () => {
    const navigation = useNavigation()

  return (
    <SafeAreaView style={ styles.container }>
      <View> 
        <View style={{justifyContent: 'space-between', alignItems: 'center', width: vw(65), padding: vw(2), flexDirection: 'row', paddingTop: vh(2)}}>
          <Image source = {require('../../assets/dan.png')} style={{width: 50, height: 50, borderRadius: 100}} />
          <View>
            <Text style={{color: '#fff'}}>Fombut Junior</Text>
            <Text style={{color: '#fff'}}>fombut@gmail.com</Text>
          </View>
        </View>
      </View>
      <View>
        <TouchableOpacity onPress={() => navigation.navigate('MyLocations')} style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: vw(58), paddingLeft: vh(3), marginTop: vh(5)}}>
          <MaterialIcons name="location-on" size={24} color="white" />
          <Text style={{fontSize: 18, color: '#fff'}}>Current Location</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('RecentLocations')} style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: vw(60), paddingLeft: vh(3), marginTop: vh(5)}}>
          <MaterialIcons name="location-on" size={24} color="white" />
          <Text style={{fontSize: 18, color: '#fff'}}>Recent Locations</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: vw(37), paddingLeft: vh(3), marginTop: vh(5)}}>
          <MaterialIcons name="location-on" size={24} color="white" />
          <Text style={{fontSize: 18, color: '#fff'}}>Settings</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: vw(28), paddingLeft: vh(3), marginTop: vh(5)}}>
          <MaterialIcons name="location-on" size={24} color="white" />
          <Text style={{fontSize: 18, color: '#fff'}}>Help</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: vw(36), paddingLeft: vh(3), marginTop: vh(5)}}>
          <MaterialIcons name="location-on" size={24} color="white" />
          <Text style={{fontSize: 18, color: '#fff'}}>Support</Text>
        </TouchableOpacity>


        <TouchableOpacity style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: vw(36), paddingLeft: vh(3), marginTop: vh(35)}}>
          <MaterialIcons name="location-on" size={24} color="white" />
          <Text style={{fontSize: 18, color: '#fff'}}>Logout</Text>
        </TouchableOpacity>
      </View>
   </SafeAreaView>
  )
}

const styles = StyleSheet.create(
    {
        container: {
          backgroundColor: '#000080', 
          flex: 1,
          paddingLeft: vh(3),
          paddingTop: vw(10)
        },
        
    }
)

export default First
