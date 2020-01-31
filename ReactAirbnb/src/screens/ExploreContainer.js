import React, { Component } from 'react';
import styles from '../styles/styleExplore';
import stylenav from '../styles/style';
import Icon from 'react-native-vector-icons/FontAwesome';
//import categories from "../data/categories.json"
import Categories from '../components/Categories';
import Experiences from '../components/Experiences';
//import experiences from "../data/experiences.json"
import {
    View,
    Text,
    TouchableOpacity,
    Image
} from 'react-native';

export default class ExploreContainer extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            header: (
                <View style={stylenav.sectionlogin}>
                    <Icon size={20} style={stylenav.iconclose} name="close"></Icon>
                    <TouchableOpacity onPress={() => navigation.navigate('Login')}><Text style={stylenav.sectionTitle}>Connexion</Text></TouchableOpacity>
                </View>
            )
        }
    };
    constructor(props) {
        super(props)
        this.state = {
            categories: [],
            experiences: []
        }
    }

    componentDidMount() {
        return fetch('https://api.myjson.com/bins/61fqq') // requête vers l'API
            .then((response) => response.json()) // transformation JSON
            .then((responseJson) => { // exploitation du résultat

                this.setState({ categories: responseJson.categories, experiences: responseJson.experiences.listings })



            })

    }




    render() {

        return (

            <View style={styles.body}>
                <View style={styles.sectionContainer}>
                    <Text style={styles.title}>Explore Airbnb</Text>

                    <Categories categories={this.state.categories} />

                    <View style={styles.sectionexperiences}>
                        <Text style={styles.titleexperiences}>Experiences</Text>
                        <TouchableOpacity ><Text style={stylenav.sectionTitle}>See all ></Text></TouchableOpacity>
                    </View>


                    <Experiences experiences={this.state.experiences} />






                </View>



            </View>




        )
    }
}