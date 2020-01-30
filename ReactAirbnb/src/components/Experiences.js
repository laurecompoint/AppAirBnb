import React, { Component } from 'react';
import styles from '../styles/styleExplore';
import Stars from '../components/Stars';
import {
    View,
    Image,
    Text,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';


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
                        experiences.map((category, index) => (
                            <View style={styles.cardExperience} key={`category-item-${index}`}>
                                <Image source={category.photo} style={styles.imageexperience} />
                                <Text style={{ color: category.color }}>{category.type}</Text>
                                <Text style={styles.textdescription}>{category.title}</Text>
                                <Text style={styles.textprice}> ${category.price} {category.priceType}</Text>

                                <Stars></Stars>

                            </View>
                        ))
                    }

                </ScrollView>


            </View>

        )
    }

}
export default Experiences;
