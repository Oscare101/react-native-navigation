import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

export default function MessagesScreen() {
  return (
    <View style={styles.container}>
      <Text>Messages</Text>
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
