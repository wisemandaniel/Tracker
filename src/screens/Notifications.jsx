import React, { useEffect, useState } from 'react'
import { View, Text, Image, StyleSheet, FlatList } from 'react-native'
import { AntDesign, EvilIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import Icon from 'react-native-vector-icons/MaterialIcons';
import { MaterialIcons } from '@expo/vector-icons';
import { vh, vw } from 'react-native-expo-viewport-units';
// Custom Card Component
const Card = ({ time, content, danger }) => {
    return (
      <>
         <View style={styles.cardContainer}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                {<View style={{backgroundColor: danger === 1 ? 'red' : '#0d52bd', borderRadius: 10, marginRight: vw(3), padding: 3}}>
                  {danger == 1 && <Icon name='warning' size={28} color={'#fff'} />}
                  {danger == 0 && <MaterialIcons name='notifications-none' size={28} color={'#fff'} />}
                </View>}
                <View>
                <Text style={styles.title}>{content}</Text>
                <Text style={styles.description}>{time} ago</Text>
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
      marginBottom: 0,
    },
    title: {
      fontSize: 14,
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
    { id: '1', time: '6 minutes', danger: 1, content: 'Distress button has been pushed' },
    { id: '2', time: '10 minutes', danger: 0, content: 'Xenun Left Douala' },
    { id: '3', time: '6 hours', danger: 0, content: 'Xenun left Buea' }
];

const earlier = [
    { id: '1', time: '22 hours', danger: 1, content: 'Distress button has been pushed' },
    { id: '2', time: '2 days', danger: 0, content: 'Xenun Left UB junction' },
    { id: '3', time: '1 week', danger: 0, content: 'Xenun left Limbe' }
];


const Notifications = () => {
    const [currentDate, setCurrentDate] = useState('')

    useEffect(() => {
        const date = new Date()
        setCurrentDate(date.toLocaleDateString())
    }, [])

    const renderCard = ({ item }) => {
        return <Card danger={item.danger} content={item.content} time={item.time} />;
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
        <Text style={{fontWeight: 700, paddingLeft: vh(4), paddingRight: vh(4), paddingTop: vh(4), fontSize: 16}}>Today - {currentDate}</Text>
      </View>
        <View style={{width: vw(100), height: vh(0.1), backgroundColor: 'gray'}}></View>

      <View>
      <FlatList
        data={data}
        renderItem={renderCard}
        keyExtractor={(item) => item.id}
      />
    </View>
      <View>
        <Text style={{fontWeight: 700, paddingLeft: vh(4), paddingRight: vh(4), paddingTop: vh(2), fontSize: 20}}>Earlier</Text>
      </View>
      <View>
      <FlatList
        data={earlier}
        renderItem={renderCard}
        keyExtractor={(item) => item.id}
      />
    </View>
    </View>
  )
}

export default Notifications
