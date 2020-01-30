import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
    View,

    TouchableOpacity,
} from 'react-native';
import styles from '../styles/style';

class ButtonsValider extends Component {

    constructor(props) {
        super(props)

    }


    onPress = () => {

        const { navigation } = this.props
        navigation.navigate('ExploreContainer')




    }

    render() {



        return (
            <View style={styles.sectionImageText}>


                <TouchableOpacity style={[styles.sectionbuttonArrow,]} onPress={this.onPress}>

                    <Icon size={20} style={styles.icongo} name="arrow-right"></Icon>

                </TouchableOpacity>
            </View >

        )
    }
}


export default ButtonsValider;