import LoggedOut from "../screens/LoggedOut"
import Login from "../screens/login"
import ExploreContainer from "../screens/ExploreContainer"
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
const MainStackNavigator = createStackNavigator({
    LoggedOut: { screen: LoggedOut },
    Login: { screen: Login },
    ExploreContainer: { screen: ExploreContainer },
}, {
    headerMode: 'screen' // headerMode: 'screen' pour gérer le header grâce à la variable navigationOptions
    // Si navigationOptions n'est pas définit alors apparition d'un header blanc
});

export default createAppContainer(MainStackNavigator);
