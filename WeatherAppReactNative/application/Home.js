import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, FlatList, ActivityIndicator, TouchableHighlight, ImageBackground} from 'react-native';
import { createStackNavigator } from 'react-navigation'; // Version can be specified in package.json
import DetailsScreen from './Details';
export default class HomeScreen extends Component<{}> {

  static navigationOptions = {
    headerTransparent: true,
  };

  constructor(props) {
    super(props);
    this.state = {isLoading: true};
    this.imageNames = ["drop", "moon", "raining", "storm", "storm1", "sun", "cloudy"];
    this.weekDays = ["Monday", "Tuesday", "Wednsday", "Thursday", "Friday", "Saturday", "Sunday"];
  }

  getData() {
    return fetch('https://samples.openweathermap.org/data/2.5/forecast/daily?id=524901&appid=b1b15e88fa797225412429c1c50c122a1')
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
        this.setState({
          isLoading: false,
          dataSource: responseJson,
        }, function(){

        });

      })
      .catch((error) =>{
        console.error(error);
      });
  }
  componentDidMount() {
    this.getData();
  }
  getConvertedDate(timestamp) {
    var date = new Date(timestamp);

    return this.weekDays[date.getDay()];
  }
  getCelsiusDegree(fahrenheit) {
    return celsius = (fahrenheit / 5) * 5 / 9 | 0;

  }
  getImageName(index) {
    console.log(`http://openweathermap.org/img/w/${this.state.dataSource.list[index].weather[0].icon}.png`);
    return `http://openweathermap.org/img/w/${this.state.dataSource.list[index].weather[0].icon}.png`;

  }
  goToNextScreen(index) {
    this.props.navigation.navigate('Details', {
      title: this.state.dataSource.city.name,
      detailedInformation: this.state.dataSource.list[index]
    });
  }
  render() {
    if (this.state.isLoading) {
      return (
        <View style={{flex: 1, justifyContent: 'center'}}>
          <ImageBackground style={{flex: 1, justifyContent: 'center'}} source={require('../images/background.jpg')} resizeMode='cover'>
            <ActivityIndicator size="large" color="#fff"/>
          </ImageBackground>

        </View>
      )
    }
    return (
      <View style={styles.container}>
        <ImageBackground style={{flex: 1}} source={require('../images/background.jpg')} resizeMode='cover'>
        <View style={styles.topContainer}>
          <Text style={{color: 'white', fontSize: 24, fontWeight: 'bold', bottom: 10}}>{this.state.dataSource.list[0].weather[0].main}</Text>
          <Text style={{color: 'white', fontSize: 24, fontWeight: 'bold'}}>{this.state.dataSource.city.name}</Text>
          <Text style={{color: 'white', fontSize: 72, fontWeight: '600'}}>{this.getCelsiusDegree(this.state.dataSource.list[0].deg)}</Text>
        </View>
        <View style={styles.bottomContainer}>
          <FlatList
            data={this.state.dataSource.list}
            renderItem={  ({item, index}) =>
              <TouchableHighlight onPress={() => this.goToNextScreen(index)}>
                <View style={{flex: 1, flexDirection: 'row', height: 40,
                padding: 8, alignItems: 'center'}}>
                  <Text style={styles.textStyle}>{this.weekDays[index]}</Text>
                  <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end'}}>
                    <Text style={[styles.textStyle, {right: 20}]}>{this.getCelsiusDegree(item.deg)}</Text>
                    <View style={{}}>
                      <Image style={{width: 25, height: 25}} source={{uri: this.getImageName(index)}} resizeMode='stretch'
                      />
                    </View>
                  </View>
                </View>
              </TouchableHighlight>
            }
            style={{flex: 1}}
          />
        </View>
        </ImageBackground>

      </View>

    );
  }
}

const styles = StyleSheet.create({
  loading: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
    margin: 0
  },
  backgroundContainer: {
    flex: 1,
    position: 'absolute'
  },
  topContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20
  },

  bottomContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  item: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    padding: 8
  },
  textStyle: {
    color: 'white',
    fontSize: 19,
    fontWeight: '400'
  }
});
