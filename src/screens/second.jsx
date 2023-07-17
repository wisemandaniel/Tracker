import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { vw, vh } from 'react-native-expo-viewport-units';
import MapView, { Marker, Polyline } from 'react-native-maps';
import { MaterialIcons } from '@expo/vector-icons';
import 'react-native-url-polyfill/auto'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://pwirgzqojwpbexfpmwwo.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB3aXJnenFvandwYmV4ZnBtd3dvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODk1NTg0MzMsImV4cCI6MjAwNTEzNDQzM30.C-hpo5sIicLg1hfHlehIBW-O8tkRRiB7nTUlWiXQtvI'

const supabase = createClient(supabaseUrl, supabaseKey)

const MyLocations = () => {
    const navigation = useNavigation()
    const currentLocation = { latitude: 4.146818, longitude: 9.286417 };
    const [lat, setLat] = useState(0)
    const [long, setLong] = useState(0)
    const [speed, setSpeed] = useState(0)

    useEffect(() => {
       getData()
    })

    const getData = async () => {
      let { data: track, error } = await supabase
      .from('track')
      .select('*')

      const location = track[track.length - 1]
      setLat(location.latitude)
      setLong(location.longitude)
      setSpeed(location.speed)
      console.log(error);
    }

  return (
    <SafeAreaView style={ styles.container }>
      <View>
        <MapView
          initialRegion={{
            latitude: 4.146818,
            longitude: 9.286417,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        style={styles.map} >
          <Marker coordinate={currentLocation} />
        </MapView>
        <View style={{
          height: vh(50),
          backgroundColor: '#fff',
          marginTop: -vh(5),
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          elevation: 25
        }}>
           <View style={{marginLeft: 'auto', marginRight: 'auto', marginTop: vh(5)}}>
             <Image source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6XW05OhvH3N9IngBkol3IwQ9aoNq_odn2iidOHMtuthnn2lRNR5Iw_DlY2L_ciCJFpY4&usqp=CAU'}} style={{width: vw(90), height: vh(25), borderRadius: 15}} />
           </View>
           <Text style={{marginLeft: vw(5), marginTop: vh(1), fontSize: 20, color: '#000080', fontWeight: 700}}>UB Junction</Text>
           <Text style={{marginLeft: vw(5), marginTop: vh(1), fontSize: 20, color: '#000080', fontWeight: 700}}>Speed: {speed}kmph</Text>

           <TouchableOpacity onPress={() => navigation.navigate('Direction')} style={{marginLeft: vw(5), backgroundColor: '#000080', width: vw(90), height: vh(5), marginTop: vh(3), borderRadius: 20, alignItems: 'center', justifyContent: 'center'}}>
            <View style={{justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row', width: vw(30)}}>
              <MaterialIcons name="send" size={22} color="white" />
              <Text style={{color: '#fff'}}>Directions</Text>
            </View>
           </TouchableOpacity>
        </View>
    </View>
   </SafeAreaView>
  )
}

const styles = StyleSheet.create(
    {
      container: {
        backgroundColor: '#ccc', 
        flex: 1,
        // paddingLeft: vh(3),
        // paddingTop: vw(10)
      },
      map: {
        width: '100%',
        height: vh(55),
        marginTop: vh(5)
      },
    }
)

export default MyLocations
