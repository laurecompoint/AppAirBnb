import React, { Component } from 'react';

import {
    View,
    Text,
    TouchableOpacity,
} from 'react-native';
import styles from '../styles/style';

class Buttons extends Component {

    constructor(props) {
        super(props)

    }

    onPress = () => {

        const { navigation } = this.props
        navigation.navigate('Login')



    }

    render() {

        const { backgroundColor, text, padding, icon, margine } = this.props;

        return (
            <View style={styles.sectionImageText}>


                <TouchableOpacity style={[styles.sectionbutton, { backgroundColor: backgroundColor }, { paddingTop: padding }]} onPress={this._onPressButton}>

                    {icon}

                    <Text style={[styles.sectionTitleFacebook, { color: text }, { marginRight: margine }]}>{this.props.title}</Text>
                </TouchableOpacity>
            </View >

        )
    }
}


export default Buttons;