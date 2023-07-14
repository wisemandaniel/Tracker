import React, {  } from 'react'
import { View, Text, StyleSheet, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { vw, vh } from 'react-native-expo-viewport-units';
import { MaterialIcons } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/FontAwesome';

const First = () => {
    const navigation = useNavigation()

  return (
    <SafeAreaView style={ styles.container }>
        <View style={{
          justifyContent: 'space-between', 
          width: vw(99.9), 
          marginLeft: 'auto',
          marginRight: 'auto',
          flexDirection: 'row', 
          height: vh(20), 
          zIndex: 1,
          backgroundColor: '#000080', 
          borderTopLeftRadius: 25,
          borderTopRightRadius: 25,
          borderBottomLeftRadius: 10,
          borderBottomRightRadius: 10,
          elevation: 50,
          }}>
          <View style={{padding: vh(3)}}>
             <Image source = {require('../../assets/xenun.jpeg')} style={{width: 40, height: 40, borderRadius: 100}}/>
             <Text style={{color: '#ccc', marginTop: vh(1), fontWeight: 900, fontSize: 12}}>Good morning and stay safe</Text>
             <Text style={{color: '#fff', marginTop: vh(1), fontWeight: 700, fontSize: 18}}>Hi Xenun, Welcome back!</Text>
          </View>
          <View style = {{padding: vh(3)}}>
            <MaterialIcons name="notifications-none" size={28} color="white" />
            <MaterialIcons name="fiber-manual-record" size={10} color="red" style={{position: 'absolute', top: vh(3), left: vw(11)}} />
          </View>
        </View>
        <View style={{backgroundColor: '#ccc1', flex: 1, marginTop: -vh(2), width: vw(99.9), marginLeft: 'auto', marginRight: 'auto'}}>
          <TouchableOpacity onPress={() => navigation.navigate('MyLocations')} style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: vw(63), paddingLeft: vh(3), marginTop: vh(5)}}>
            <View style={{padding: vh(1), backgroundColor: '#75b0fe', borderRadius: 5}}>
              <MaterialIcons name="location-on" size={20} color="#000080" />
            </View>
            <Text style={{fontSize: 18, color: '#000', fontWeight: 500}}>Current Location</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('RecentLocations')} style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: vw(65), paddingLeft: vh(3), marginTop: vh(5)}}>
            <View style={{padding: vh(1), backgroundColor: '#75b0fe', borderRadius: 5}}>
              <MaterialIcons name="history" size={20} color="#000080" />
            </View>
            <Text style={{fontSize: 18, color: '#000', fontWeight: 500}}>Recent Locations</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('Notifications')} style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: vw(53), paddingLeft: vh(3), marginTop: vh(5)}}>
            <View style={{padding: vh(1), backgroundColor: '#75b0fe', borderRadius: 5}}>
              <MaterialIcons name="notifications-none" size={20} color="#000080" />
            </View>
            <Text style={{fontSize: 18, color: '#000', fontWeight: 500}}>Notifications</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('MyLocations')} style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: vw(32), paddingLeft: vh(3), marginTop: vh(5)}}>
            <View style={{padding: vh(1), backgroundColor: '#75b0fe', borderRadius: 5}}>
              <MaterialIcons name="help-outline" size={20} color="#000080" />
            </View>
            <Text style={{fontSize: 18, color: '#000', fontWeight: 500}}>Help</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('MyLocations')} style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: vw(41), paddingLeft: vh(3), marginTop: vh(5)}}>
            <View style={{padding: vh(1), backgroundColor: '#75b0fe', borderRadius: 5}}>
              <MaterialIcons name="settings" size={20} color="#000080" />
            </View>
            <Text style={{fontSize: 18, color: '#000', fontWeight: 500}}>Settings</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('Login')} style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: vw(38), paddingLeft: vh(3), marginTop: vh(23)}}>
            <View style={{padding: vh(1), backgroundColor: '#75b0fe', borderRadius: 5}}>
            <Icon name="sign-out" size={20} color="#000080" />
            </View>
            <Text style={{fontSize: 18, color: '#000', fontWeight: 500}}>Logout</Text>
          </TouchableOpacity>
        </View>
   </SafeAreaView>
  )
}

const styles = StyleSheet.create(
    {
        container: {
          backgroundColor: '#fff', 
          flex: 1,
          paddingTop: vw(10)
        },
        
    }
)

export default First
