/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, FlatList, ActivityIndicator, TouchableHighlight, Button} from 'react-native';
import HomeScreen from './Home';
import { StackNavigator } from 'react-navigation';
import DetailsScreen from './Details';
// class HomeScreen extends React.Component {
//   render() {
//     return (
//       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//         <Text>Home Screen</Text>
//         <Button
//           title="Go to Details"
//           onPress={() => this.props.navigation.navigate('Details')}
//         />
//       </View>
//     );
//   }
// }

// class DetailsScreen extends Component {
//   render() {
//     return (
//       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//         <Text>Details Screen</Text>
//       </View>
//     );
//   }
// }

const Root = StackNavigator ({
    Home: { screen: HomeScreen },
    Details: { screen: DetailsScreen }
});

export default class App extends Component {
  render() {
    return <Root/>;
  }
}
