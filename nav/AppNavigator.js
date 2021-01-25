import { createAppContainer } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createStackNavigator } from 'react-navigation-stack'

import FeedScreen from '../screens/FeedScreen'
import SearchScreen from '../screens/SearchScreen'
import MessagesScreen from '../screens/MessagesScreen'
import NotificationNavigator from './NotificationNavigator'
import AnotherNavigator from './AnotherNavigator'
// tab (top) nav (header)

const _FeedNavigator = createStackNavigator({
  Feed: {
    screen: FeedScreen,
    navigationOptions: {
      title: 'News',
    },
  },
})

const _SearchNavigator = createStackNavigator({
  Feed: {
    screen: SearchScreen,
    navigationOptions: {
      title: 'Search',
    },
  },
})

const _MessagesNavigator = createStackNavigator({
  Feed: {
    screen: MessagesScreen,
    navigationOptions: {
      title: 'Messages',
    },
  },
})

// Botton nav

const AppNavigator = createBottomTabNavigator({
  Feed: {
    screen: _FeedNavigator,
    navigationOptions: {
      title: 'News',
    },
  },
  Search: {
    screen: _SearchNavigator,
    navigationOptions: {
      title: 'Search',
    },
  },
  Messages: {
    screen: _MessagesNavigator,
    navigationOptions: {
      title: 'Messages',
    },
  },
  Notification: {
    screen: NotificationNavigator,
    navigationOptions: {
      title: 'Notify',
    },
  },
  Another: {
    screen: AnotherNavigator,
    navigationOptions: {
      title: 'more',
    },
  },
})

export default createAppContainer(AppNavigator)
