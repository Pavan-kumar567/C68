import * as React from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity,Image} from 'react-native';
import {Header} from 'react-native-elements';
import TransactionScreen from './screens/BookTransactionScreen';
import SearchScreen from './screens/SearchScreen';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';

export default class App extends React.Component {
 
  render() {
    return (
      <AppContainer/>
    );
  }
}

const TabNavigator = createBottomTabNavigator({
  Transaction: {screen: TransactionScreen},
  Search: {screen: SearchScreen}
})

const AppContainer = createAppContainer(TabNavigator);

const styles = StyleSheet.create({
 container: {
    flex: 1,
    backgroundColor: '#808080',
  },
  
});
