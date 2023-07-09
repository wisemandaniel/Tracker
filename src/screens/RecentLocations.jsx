import React, {  } from 'react'
import { View, Text, StyleSheet, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { vw, vh } from 'react-native-expo-viewport-units';
import { MaterialIcons } from '@expo/vector-icons';


const RecentLocations = () => {
    const navigation = useNavigation()

  return (
    <SafeAreaView style={ styles.container }>
      <View style={{backgroundColor: '#000080', width: vw(100), marginLeft: 'auto', marginRight: 'auto', height: vh(15)}}> 
            <Text style={{color: '#fff', textAlign: 'center', marginTop: vh(5), fontSize: 18}}>Recent Locations</Text>
      </View>
      <View style={{marginTop: vh(5), marginLeft: 'auto', marginRight: 'auto'}}>
        <View style={{backgroundColor: 'gray', width: vw(90), padding: 10, borderRadius: 10, justifyContent: 'center', marginTop: vh(3)}}>
            <Text style={{color: '#fff'}}>Univeristy of Buea</Text>
            <Text style={{color: '#fff'}}>Monday 14 April 2023, 1:00 PM</Text>
        </View>
        <View style={{backgroundColor: 'gray', width: vw(90), padding: 5, borderRadius: 10, justifyContent: 'center', marginTop: vh(3)}}>
            <Text style={{color: '#fff'}}>Univeristy of Buea</Text>
            <Text style={{color: '#fff'}}>Monday 14 April 2023, 1:00 PM</Text>
        </View>
      </View>
   </SafeAreaView>
  )
}

const styles = StyleSheet.create(
    {
        container: {
        //   backgroundColor: '#000080', 
          flex: 1,
        //   paddingLeft: vh(3),
          paddingTop: vw(10)
        },
        
    }
)

export default RecentLocations
