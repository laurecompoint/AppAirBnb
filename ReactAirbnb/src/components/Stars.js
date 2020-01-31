import React, { Component } from 'react';
import styles from '../styles/styleExplore';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
    View,
    Image,
    Text,
} from 'react-native';


import colors from '../styles/colors/index';

export default class Stars extends Component {
    constructor(props) {
        super(props)

    }

    get stars() {
        const { votes, size, color } = this.props;
        const startsNumber = parseFloat(votes);
        const starelement = [];
        for (let i = 0; i < 5; i++) {
            starelement.push(
                <Icon key={`star-${i}`} size={size} style={styles.icongo} name="star" color={startsNumber > i ? color : colors.gray02}></Icon>
            )

        };
        return starelement;
    }

    render() {
        const { votes } = this.props;
        return (

            <View style={styles.wrapper}>
                {this.stars}

            </View>
        )


    }

}
//export default Experiences;
