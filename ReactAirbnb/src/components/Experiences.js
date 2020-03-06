import React, { Component } from 'react';
import styles from '../styles/styleExplore';
import Stars from '../components/Stars';
import Card from '../components/Card';
import photos from '../data/photos/index';
import {
    View,
    Image,
    Text,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import colors from '../styles/colors/index';


class Experiences extends Component {
    constructor(props) {
        super(props)

    }
    render() {
        const { experiences } = this.props;
        return (
            <View style={styles.experiencerow}>
                <ScrollView contentContainerStyle={styles.container} horizontal={true}>

                    {
                        experiences.map((experiences, index) => (

                            <Card

                                key={`category-item-${index}`}
                                image={photos[experiences.photo]}
                                title={experiences.type}
                                type={experiences.title}
                                price={experiences.price}
                                priceType={'$' + experiences.pricetype}
                                stars={experiences.stars}
                                colors={colors[experiences.color]}></Card>



                        ))
                    }

                </ScrollView>


            </View>

        )
    }

}
export default Experiences;
