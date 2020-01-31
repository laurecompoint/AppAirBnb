import React, { Component } from 'react';
import styles from '../styles/styleExplore';
import photos from '../data/photos/index';

import {
    View,
    Image,
} from 'react-native';


class Categories extends Component {
    constructor(props) {
        super(props)

    }
    render() {
        const { categories } = this.props;
        return (
            <View style={styles.row}>
                {
                    categories.map((category, index) => (
                        <View style={styles.card} key={`category-item-${index}`}>
                            <Image source={photos[category.photo]} style={styles.image} />
                        </View>
                    ))
                }
            </View>

        )
    }

}
export default Categories;
