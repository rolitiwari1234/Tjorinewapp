import { View, Text,StyleSheet } from 'react-native'
import React from 'react'

const BagScreen = () => {
  return (
    <View style={styles.container}>
      <Text>BagScreen</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:"red"
  },
});

export default BagScreen