import { createStackNavigator } from 'react-navigation-stack'
import { createDrawerNavigator } from 'react-navigation-drawer'

import AnotherScreens from '../screens/AnotherScreen'
import GroupScreens from '../screens/GroupScreen'
import AudiosScreens from '../screens/AudiosScreen'

const _AnotherNavigator = createStackNavigator({
  Another: {
    screen: AnotherScreens,
    navigationOptions: {
      title: 'more',
    },
  },
})

const _GroupNavigator = createStackNavigator({
  Groups: {
    screen: GroupScreens,
    navigationOptions: {
      title: 'Groups',
    },
  },
})

const _AudiosNavigator = createStackNavigator({
  Audios: {
    screen: AudiosScreens,
    navigationOptions: {
      title: 'Music',
    },
  },
})

const AnotherNavigator = createDrawerNavigator({
  Another: {
    screen: _AnotherNavigator,
    navigationOptions: {
      title: 'more',
    },
  },
  Groups: {
    screen: _GroupNavigator,
    navigationOptions: {
      title: 'groups',
    },
  },
  Audios: {
    screen: _AudiosNavigator,
    navigationOptions: {
      title: 'audios',
    },
  },
})

export default AnotherNavigator
