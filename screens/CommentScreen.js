import React from 'react'
import { Text, View, StyleSheet, Button } from 'react-native'

export default function CommetScreen({ navigation }) {
  const goToNotification = () => {
    navigation.navigate('Notification')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Comments</Text>
      <Button
        style={styles.button}
        title="Notifications"
        onPress={goToNotification}
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
