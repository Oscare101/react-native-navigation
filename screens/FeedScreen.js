import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

import Info from '../Components/Info'
import Form from '../Components/Form'
import Weather from '../Components/Weather'

export default function FeedScreen() {
  return (
    <View style={styles.container}>
      <Text>News</Text>
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
