import React, { useEffect, useState } from 'react'
import { View, Text, Image, StyleSheet, FlatList } from 'react-native'
import { AntDesign, EvilIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import Icon from 'react-native-vector-icons/MaterialIcons';
import { MaterialIcons } from '@expo/vector-icons';
import { vh, vw } from 'react-native-expo-viewport-units';
// Custom Card Component
const Card = ({ time, location }) => {
    return (
      <>
         <View style={styles.cardContainer}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View style={{backgroundColor: '#0d52bd', borderRadius: 10, marginRight: vw(3), padding: 5}}>
                  <MaterialIcons name='location-on' size={24} color={'#fff'} />
                </View>
                <View>
                  <Text style={styles.title}>{location}</Text>
                  <Text style={styles.description}>{time}</Text>
                </View>
            </View>
        </View>
        <View style={{width: vw(100), height: vh(0.1), backgroundColor: 'gray'}}></View>
      </>
    );
  };
  
  // Styles for the Card Component
  const styles = StyleSheet.create({
    cardContainer: {
      width: vw(90),
      borderRadius: 8,
      padding: 6,
      marginTop: vh(2),
      marginBottom: 0,
    },
    title: {
      fontSize: 16,
      fontWeight: 'bold',
      marginBottom: 8,
    },
    description: {
      fontSize: 14,
      color: '#888',
    },
  });

  // Usage in FlatList
const data = [
  { id: '1', time: '3:15 PM, 14/7/2023', location: "Amphi 750" },
  { id: '2', time: '2:30 PM, 14/7/2023', location: "UB junction" },
  { id: '3', time: '6:00 PM, 13/7/2023', location: "Tiko" }
];


const RecentLocations = () => {

    useEffect(() => {
    }, [])

    const renderCard = ({ item }) => {
        return <Card location={item.location} time={item.time} />;
    };

  return (
    <View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between', padding: 10, marginTop: vh(4), width: vw(96), marginLeft: 'auto', marginRight: 'auto', elevation: 25, backgroundColor: '#0d52bd', borderRadius: 15}}>
           <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <AntDesign
                    name="arrowleft"
                    size={28}
                    color="#fff"
                />
            <Text style={{marginLeft: vw(5), fontWeight: 600, fontSize: 16, color: '#fff'}}>Location History</Text>
           </View>
           <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style = {{padding: vh(3)}}>
                <MaterialIcons name="notifications-none" size={28} color="#fff" />
                <View style={{position: 'absolute', top: vh(3), left: vw(10), backgroundColor: 'red', borderRadius: 100, width: vh(2.2), height: vh(2.2)}}>
                   <Text style={{color: '#fff', textAlign: 'center', fontSize: 10, fontWeight: 700}}>2</Text>
                </View>
          </View>
              <Image style={{width: 25, height: 25, borderRadius: 50}} source={require('../../assets/xenun.jpeg')} />
           </View>
      </View>

      <View>
      <FlatList
        data={data}
        renderItem={renderCard}
        keyExtractor={(item) => item.id}
      />
    </View>
    </View>
  )
}

export default RecentLocations
