import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

const SecondaryButton = ({ onPress, title, bgColor, color, borderRadius }) => {
    return (
      <TouchableOpacity 
        onPress={onPress} 
        style={{
           backgroundColor: bgColor,
           borderRadius: borderRadius
        }}>
         <Text style={{...styles.appButtonText, color: color}}>{title}</Text>
      </TouchableOpacity>
    )
  }

  const styles = StyleSheet.create({
    // ...
    appButtonContainer: {
      elevation: 8,
      paddingVertical: 10,
      paddingHorizontal: 12
    },
    appButtonText: {
      fontSize: 20,
      fontWeight: 'bold'
    }
  });

export default SecondaryButton

