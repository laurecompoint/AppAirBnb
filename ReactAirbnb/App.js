/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import LoggedOut from "./src/screens/LoggedOut"
import Login from "./src/screens/login"
import ExploreContainer from "./src/screens/ExploreContainer"
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

/**
 * createStackNavigator permet de définir la navigation
 * Le premier écran correspond à l'écran de départ de l'application
 */
const MainStackNavigator = createStackNavigator({
  LoggedOut: { screen: LoggedOut },
  Login: { screen: Login },
  ExploreContainer: { screen: ExploreContainer },
}, {
  headerMode: 'screen' // headerMode: 'screen' pour gérer le header grâce à la variable navigationOptions
  // Si navigationOptions n'est pas définit alors apparition d'un header blanc
});

const App = createAppContainer(MainStackNavigator);
export default App;
