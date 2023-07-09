import React, {  } from 'react'
import { View, Text, StyleSheet, SafeAreaView, Image, TouchableOpacity, FlatList } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { vw, vh } from 'react-native-expo-viewport-units';
import MapView from 'react-native-maps';
import { MaterialIcons } from '@expo/vector-icons';

const data = [
  { id: '1', text: 'View 1' },
  { id: '2', text: 'View 2' },
  { id: '3', text: 'View 3' },
  { id: '4', text: 'View 4' },
];

const Direction = () => {
    const navigation = useNavigation()

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
        style={styles.map} />
        <View style={{
          height: vh(50),
          backgroundColor: '#fff',
          marginTop: -vh(5),
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          elevation: 25
        }}>
           <View style={{marginLeft: 'auto', marginRight: 'auto', marginTop: vh(5)}}>
            <View style={{backgroundColor: 'gray', padding: 15, borderRadius: 15, width: vw(90)}}>
              <View style={{flexDirection: 'row', justifyContent: 'space-between', width: vw(30)}}>
                <View style={{width: 20, height: 20, borderRadius: 100, backgroundColor: 'red', alignItems: 'center', justifyContent: 'center'}}>
                 <Text>T</Text>
                </View>
                <Text>Your Place</Text>
              </View>
              <View>

              </View>
              <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: vw(70)}}>
              <View style={{width: vw(60), height: 1, backgroundColor: '#ccc', marginTop: 20, marginBottom: 20}}></View>
              <Text>T</Text>
              </View>
              <View style={{flexDirection: 'row', justifyContent: 'space-between', width: vw(30)}}>
                <View style={{width: 20, height: 20, borderRadius: 100, backgroundColor: 'red', alignItems: 'center', justifyContent: 'center'}}>
                 <Text>T</Text>
                </View>
                <Text>Your Place</Text>
              </View>
            </View>
           </View>
           
           <View style={{marginLeft: 'auto', marginRight: 'auto', marginTop: vh(3), flexDirection: 'row'}}>
            <View style={styles.item}>
              <Text style={styles.title}>Hello</Text>
            </View>
            <View style={styles.item}>
              <Text style={styles.title}>Hello</Text>
            </View>
            <View style={styles.item}>
              <Text style={styles.title}>Hello</Text>
            </View>
            <View style={styles.item}>
              <Text style={styles.title}>Hello</Text>
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
