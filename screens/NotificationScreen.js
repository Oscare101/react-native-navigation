import React from 'react'
import { Text, View, StyleSheet, Button } from 'react-native'

const NotificationScreen = ({ navigation }) => {
  const goToComment = () => {
    navigation.navigate('Comment')
  }

  return (
    <View style={styles.container}>
      <Text>Notification</Text>
      <Button title="Comments" onPress={goToComment} />
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
export default NotificationScreen
