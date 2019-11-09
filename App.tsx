import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

const HomeScreen = ({navigation}) => {
  return(
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <Button
        title='Go to Details'
        onPress={() => navigation.navigate('Details')}
      />
      <Text>This is the Home Screen</Text>
    </View>
  )
}

const DetailsScreen = ({navigation}) => {
  return(
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Text>This is the Details Screen</Text>
      <Button
        title='Go to Details...again'
        onPress={() => navigation.push('Details')}
      />
      <Button
        title='Go Home'
        onPress={() => navigation.navigate('Home')}
      />
      <Button
        title='Go Back'
        onPress={() => navigation.goBack()}
      />
    </View>
  )
}

HomeScreen.navigationOptions = {
  title: 'Home'
}

DetailsScreen.navigationOptions = {
  title: 'Details'
}

const AppNavigator = createStackNavigator({
  Home: HomeScreen,
  Details: DetailsScreen,
},
{
  initialRouteName: 'Home',
});

const AppContainer = createAppContainer(AppNavigator);

export default () => {
  return(
    <AppContainer />
  )
}