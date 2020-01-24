import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import SearchScreen from './screens/SearchScreen'
import DetailsScreen from './screens/DetailScren'
/* import Empty from './components/Empty'
import Loading from './components/Loading' */

const AppNavigator = createStackNavigator(
  {
    Home:SearchScreen,
    Details: DetailsScreen,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: 'blue',
    },
    headerTintColor: 'white',
    }
  }
)

const AppContainer = createAppContainer(AppNavigator)

export default function App() {
  return (
    <AppContainer />
  );
}

