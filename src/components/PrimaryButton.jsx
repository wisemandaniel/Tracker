import React from 'react'
import { Text, StyleSheet, TouchableOpacity } from 'react-native'

const PrimaryButton = ({ onPress, title, bgColor, borderRadius, color }) => {
  return (
    <TouchableOpacity 
      onPress={onPress} 
      style={{
         ...styles.appButtonContainer,
         backgroundColor: bgColor,
         borderRadius: borderRadius
      }}>
       <Text style={styles.appButtonText}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    // ...
    appButtonContainer: {
      elevation: 8,
      paddingVertical: 12,
      paddingHorizontal: 12
    },
    appButtonText: {
      fontSize: 15,
      color: "#fff",
      fontWeight: "regular",
      alignSelf: "center"
    }
  });

export default PrimaryButton
