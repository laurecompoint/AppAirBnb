import { createBottomTabNavigator } from 'react-navigation-tabs';
import ExploreContainer from '../screens/ExploreContainer';
import InboxContainer from '../screens/InboxContainer';
import ProfileContainer from '../screens/ProfileContainer';
import SavedContainer from '../screens/SavedContainer';
import TripsContainer from '../screens/TripsContainer';
import Icon from 'react-native-vector-icons/FontAwesome';
export default createBottomTabNavigator(
    {
        Explore: {
            screen: ExploreContainer,
            navigationOptions: {

                tabBarLabel: 'EXPLORE',



            }

        },
        Saved: {
            screen: SavedContainer,
            navigationOptions: {

                tabBarLabel: 'SAVED',


            }
        },
        Trips: {
            screen: TripsContainer,
            navigationOptions: {

                tabBarLabel: 'TRIPS',


            }
        },
        Inbox: {
            screen: InboxContainer,
            navigationOptions: {

                tabBarLabel: 'INBOX',


            }
        },
        Profile: {
            screen: ProfileContainer,
            navigationOptions: {

                tabBarLabel: 'PROFILE',


            }
        },
    },

    {
        tabBarOptions: {

            activeTintColor: 'red',
        },

    }
);