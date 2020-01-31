import React, { Component } from 'react';
import styles from '../styles/styleExplore';
import Stars from '../components/Stars';
import Icon from 'react-native-vector-icons/FontAwesome';
import photos from '../data/photos/index';
import colors from '../styles/colors/index';
import {
    View,
    Image,
    Text,
} from 'react-native';



class Card extends Component {
    constructor(props) {
        super(props)

    }
    render() {

        const { image } = this.props;
        const { title } = this.props;
        const { type } = this.props;
        const { price } = this.props;
        const { pricetype } = this.props;
        const { colors } = this.props;

        const { size } = this.props;
        const { stars } = this.props;

        return (


            <View style={styles.cardExperience}>
                <Image source={image} style={styles.imageexperience} />
                <Icon size={20} style={styles.favori} name="heart-o" color={'white'}></Icon>
                <Text style={{ color: colors }}>{title}</Text>
                <Text style={styles.textdescription}>{type}</Text>
                <Text style={styles.textprice}> {price} {pricetype}</Text>

                <Stars votes={stars} size={size} color={'blue'}></Stars>

            </View>



        )
    }

}
export default Card;
