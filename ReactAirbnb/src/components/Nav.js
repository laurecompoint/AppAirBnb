import React, { Component } from 'react';

import {
    View,
    Text,
    TouchableOpacity,
} from 'react-native';
import styles from '../screens/style';

class Nav extends Component {

    constructor(props) {
        super(props)

    }



    render() {



        return (
            <View style={styles.sectionlogin}>
                <Icon size={20} style={styles.iconclose} name="close"></Icon>

                <Text style={styles.sectionTitle}>Connexion</Text>
            </View>

        )
    }
}


export default Nav;

