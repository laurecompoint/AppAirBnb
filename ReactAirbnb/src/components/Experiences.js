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
                        experiences.map((cardExperience, index) => (

                            <Card

                                key={`category-item-${index}`}
                                image={photos[cardExperience.photo]}
                                title={cardExperience.type}
                                type={cardExperience.title}
                                price={cardExperience.price}
                                priceType={'$' + cardExperience.pricetype}
                                stars={cardExperience.stars}
                                colors={colors[cardExperience.color]}></Card>



                        ))
                    }

                </ScrollView>


            </View>

        )
    }

}
export default Experiences;
