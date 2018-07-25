import React, {Component} from 'react';
import { Button, View, Text, ImageBackground, StyleSheet, FlatList, ScrollView } from 'react-native';
import { createStackNavigator } from 'react-navigation'; // Version can be specified in package.json
import HomeScreen from './Home';
export default class DetailsScreen extends Component {
  static navigationOptions = ({navigation}) => ({
    title: `${navigation.state.params.title}`,
    headerStyle: {
        },
        headerTransparent: true,
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
    });

  constructor(props){
     super(props);
   }
  // renderScroll() {
  //   return (
  //
  //   );
  // }
  render() {
    detailedInformation = this.props.navigation.getParam('detailedInformation');
    temp = detailedInformation.temp
    allTempItems = [temp.min, temp.max, temp.morn, temp.day, temp.eve, temp.night];
    allTempTitles = ["min", "max", "mor", "day", "eve", "night"]
    return (
      <View style={styles.container}>
        <ImageBackground style={{flex: 1}} source={require('../images/nightBackground.jpg')} resizeMode='cover'>
          <View style={styles.topContainer}>
            <View style={{flex: 1, justifyContent: 'flex-end', alignItems: 'center'}}>
              <Text style={{color: 'white', fontSize: 32, fontWeight: 'normal'}}>{detailedInformation.weather[0].description}</Text>
            </View>
            <View style={{flex: 1}}>
              <FlatList
                horizontal='true'
                data={allTempItems}
                renderItem={  ({item, index}) =>
                  <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', flexDirection: 'row'}}>
                    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', margin: 20}}>
                      <Text style={styles.mainText}>{allTempTitles[index]}</Text>
                      <Text style={styles.mainText}>{item}</Text>
                    </View>
                    <View style={{backgroundColor: "#fff", width: 0.7, height: 50}}></View>
                  </View>

                }
                style={{flex: 1}}
              />
            </View>
          </View>
          <View style={styles.bottomContainer}>
            <ScrollView style={{flex: 1, margin: 20}}>
              <View style={{flex: 1, flexDirection: 'row', paddingBottom: 10}}>
                <View style={{flex: 3}}>
                  <Text style={[styles.mainText]}>Pressure</Text>
                </View>
                <View style={{flex: 1, justifyContent: 'flex-end'}}>
                  <Text style={[styles.mainText, {flex: 1}]}>{detailedInformation.pressure}</Text>
                </View>
              </View>
              <View style={{flex: 1, flexDirection: 'row', paddingBottom: 10}}>
                <View style={{flex: 3}}>
                  <Text style={[styles.mainText]}>Humidity</Text>
                </View>
                <View style={{flex: 1, justifyContent: 'flex-end'}}>
                  <Text style={[styles.mainText, {flex: 1}]}>{detailedInformation.humidity}</Text>
                </View>
              </View>
              <View style={{flex: 1, flexDirection: 'row', paddingBottom: 10}}>
                <View style={{flex: 3}}>
                  <Text style={[styles.mainText]}>Speed</Text>
                </View>
                <View style={{flex: 1, justifyContent: 'flex-end'}}>
                  <Text style={[styles.mainText, {flex: 1}]}>{detailedInformation.speed}</Text>
                </View>
              </View>
              <View style={{flex: 1, flexDirection: 'row', paddingBottom: 10}}>
                <View style={{flex: 3}}>
                  <Text style={[styles.mainText]}>Snow</Text>
                </View>
                <View style={{flex: 1, justifyContent: 'flex-end'}}>
                  <Text style={[styles.mainText, {flex: 1}]}>{detailedInformation.snow}</Text>
                </View>
              </View>
              <View style={{flex: 1, flexDirection: 'row', paddingBottom: 10}}>
                <View style={{flex: 3}}>
                  <Text style={[styles.mainText]}>Clouds</Text>
                </View>
                <View style={{flex: 1, justifyContent: 'flex-end'}}>
                  <Text style={[styles.mainText, {flex: 1}]}>{detailedInformation.clouds}</Text>
                </View>
              </View>
              <View style={{flex: 1, flexDirection: 'row', paddingBottom: 10}}>
                <View style={{flex: 3}}>
                  <Text style={[styles.mainText]}>Degree</Text>
                </View>
                <View style={{flex: 1, justifyContent: 'flex-end'}}>
                  <Text style={[styles.mainText, {flex: 1}]}>{detailedInformation.deg}</Text>
                </View>
              </View>
            </ScrollView>
          </View>
        </ImageBackground>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#000',
    margin: 0
  },
  topContainer: {
    flex: 1,
  },
  bottomContainer: {
    flex: 1,
  },
  mainText: {
    color: 'white',
    fontSize: 19,
    fontWeight: 'normal'
  },

})
