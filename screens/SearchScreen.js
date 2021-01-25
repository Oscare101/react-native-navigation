import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

export default function SearchScreen() {
  return (
    <View style={styles.container}>
      <Text>Search</Text>
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
