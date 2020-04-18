import React, { Component } from 'react';
import styles from '../styles/style';

import Icon from 'react-native-vector-icons/FontAwesome';
import {
    View,
    Text,
    TouchableOpacity
} from 'react-native';
export default class ProfileContainer extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            header: (
                <View style={styles.sectionlogin}>
                    <TouchableOpacity onPress={() => navigation.goBack()}><Icon size={20} style={styles.iconclose} name="arrow-left"></Icon></TouchableOpacity>
                    <Text style={styles.sectionTitle}>Forgot password?</Text>
                </View>)
        }
    }
    render() {

        return (

            <View style={styles.body}>
                <Text>Saved</Text>
            </View>
        )

    }
}