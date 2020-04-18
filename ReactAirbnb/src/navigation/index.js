import LoggedOut from "../screens/LoggedOut"
import Login from "../screens/login"
import ExploreContainer from "./LoggedInTabNavigator"
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import AuthLoadingScreen from '../screens/AuthLoading';

const AuthNavigator = createStackNavigator({
    LoggedOut: { screen: LoggedOut },
    Login: { screen: Login }
})
const MainStackNavigator = createSwitchNavigator(
    {
        AuthLoading: { screen: AuthLoadingScreen },
        Auth: { screen: AuthNavigator },
        ExploreContainer: { screen: ExploreContainer },
    },
    {
        headerMode: 'screen',
    },
);

export default createAppContainer(MainStackNavigator);
