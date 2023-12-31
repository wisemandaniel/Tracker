import React, { useState } from 'react'
import { View, Text, StyleSheet, SafeAreaView, Image, TouchableOpacity, FlatList } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { vw, vh } from 'react-native-expo-viewport-units';
import MapView from 'react-native-maps';
import { MaterialIcons } from '@expo/vector-icons';
import { Marker, Polyline } from 'react-native-maps';

const Direction = () => {
    const navigation = useNavigation()
    const [activeLocation, setActiveLocation] = useState(null);
    const [activeMarker, setActiveMarker] = useState(null);

    const markers = [
      { id: 1, title: 'Marker 1', coordinate: { latitude: 4.15477, longitude: 9.29023 } },
      { id: 2, title: 'Marker 2', coordinate: { latitude: 4.13809, longitude: 9.3041 } },
    ];
  
    const handleMarkerPress = (marker) => {
      setActiveMarker(marker);
    };

    const origin = { latitude: 4.15477, longitude: 9.29023 };
    const destination = { latitude: 4.13809, longitude: 9.3041 }

  return (
    <SafeAreaView style={ styles.container }>
      <View>
        <MapView
          initialRegion={{
            latitude: 4.14883,
            longitude: 9.28885,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        style={styles.map} >
          <Marker coordinate={origin} >
          </Marker>
          <Marker coordinate={destination} /> 
          <Polyline coordinates={[origin, destination]} strokeColor="blue" strokeWidth={2} />
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
            <View style={{backgroundColor: '#ccc', padding: 15, borderRadius: 15, width: vw(90)}}>
              <View style={{flexDirection: 'row', justifyContent: 'space-between', width: vw(20), alignItems: 'center'}}>
                <View style={{width: 28, height: 28, borderRadius: 100, backgroundColor: '#000080', alignItems: 'center', justifyContent: 'center'}}>
                  <MaterialIcons name='adjust' size={20} color={'#fff'} />
                </View>
                <Text style={{color: '#000', fontWeight: 600}}>You</Text>
              </View>
              <View>

              </View>
              <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: vw(90)}}>
              <View style={{width: vw(60), height: 1, backgroundColor: 'gray', marginTop: 20, marginBottom: 20}}></View>
              
              <View style={{flexDirection: 'row', justifyContent: 'space-between', width: vw(20), alignItems: 'center'}}>
                <View style={{width: 28, height: 28, borderRadius: 100, backgroundColor: '#000080', alignItems: 'center', justifyContent: 'center'}}>
                  <MaterialIcons name='swap-vert' size={20} color={'#fff'} />
                </View>
              </View>

              </View>
              <View style={{flexDirection: 'row', justifyContent: 'space-between', width: vw(35), alignItems: 'center'}}>
                <View style={{width: 28, height: 28, borderRadius: 100, backgroundColor: '#000080', alignItems: 'center', justifyContent: 'center'}}>
                  <MaterialIcons name='location-on' size={20} color={'#fff'} />
                </View>
                <Text style={{color: '#000', fontWeight: 600}}>Amphi 750</Text>
              </View>
            </View>
           </View>
           
           <View style={{marginLeft: 'auto', marginRight: 'auto', marginTop: vh(3), flexDirection: 'row'}}>
            <View style={styles.item}>
              <MaterialIcons name='local-taxi' size={28} color={'#fff'}/>
              <Text style={{color: '#fff', fontSize: 12, fontWeight: 500}}>30m</Text>
            </View>
            <View style={styles.item}>
              <MaterialIcons name='two-wheeler' size={28} color={'#fff'}/>
              <Text style={{color: '#fff', fontSize: 12, fontWeight: 500}}>45m</Text>
            </View>
            <View style={styles.item}>
              <MaterialIcons name='pedal-bike' size={28} color={'#fff'}/>
              <Text style={{color: '#fff', fontSize: 12, fontWeight: 500}}>55m</Text>
            </View>
            <View style={styles.item}>
              <MaterialIcons name='directions-walk' size={28} color={'#fff'}/>
              <Text style={{color: '#fff', fontSize: 12, fontWeight: 500}}>2hr</Text>
            </View>
           </View>

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
      },
      map: {
        width: '100%',
        height: vh(65),
        marginTop: vh(5)
      },
      item: {
        borderWidth: 1,
        borderColor: '#000080',
        backgroundColor: '#000080',
        padding: 5,
        height: vh(9),
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
        width: vh(9),
        marginVertical: 2,
        marginHorizontal: 10,
      },
      title: {
        fontSize: 14,
      },
    }
)

export default Direction
