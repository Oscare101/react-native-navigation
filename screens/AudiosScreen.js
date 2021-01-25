import React from 'react'
import { Text, View, StyleSheet, Button } from 'react-native'

export default function AudiosScreen({ navigation }) {
  const toggleMenu = () => {
    navigation.toggleDrawer()
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Music</Text>
      <Button
        style={styles.button}
        title="left menu"
        onPress={toggleMenu}
      ></Button>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
