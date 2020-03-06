import React, { Component } from 'react';
import styles from '../styles/styleExplore';
import stylenav from '../styles/style';
import Icon from 'react-native-vector-icons/FontAwesome';
//import categories from "../data/categories.json"
import Categories from '../components/Categories';
import Experiences from '../components/Experiences';
import { connect } from 'react-redux';
import { Actions } from '../actions';
//import experiences from "../data/experiences.json"
import {
    ActivityIndicator,
    View,
    Text,
    TouchableOpacity,
    Image
} from 'react-native';


class ExploreContainer extends Component {
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
        //this.state = {
        //  categories: [],
        //  experiences: []
        // }
    }

    componentDidMount() {
        const { setListings } = this.props
        return fetch('https://api.myjson.com/bins/61fqq') // requête vers l'API
            .then((response) => response.json()) // transformation JSON
            .then((results) => { // exploitation du résultat

                //this.setState({ categories: responseJson.categories, experiences: responseJson.experiences.listings })
                setListings(results)


            })

    }




    render() {
        const { categories, experiences, homes, popular } = this.props
        return (

            <View style={styles.body}>
                <ActivityIndicator size="large" color="#0000ff" />
                <View style={styles.sectionContainer}>
                    <Text style={styles.title}>Explore Airbnb</Text>

                    <Categories categories={categories} />

                    <View style={styles.sectionexperiences}>
                        <Text style={styles.titleexperiences}>Experiences</Text>
                        <TouchableOpacity ><Text style={stylenav.sectionTitle}>See all ></Text></TouchableOpacity>
                    </View>


                    <Experiences experiences={experiences} />






                </View>



            </View>




        )
    }
}

const mapStateToProps = (state) => ({
    categories: state.listings.categories,
    experiences: state.listings.experiences,
    homes: state.listings.homes,
    popular: state.listings.popular,
})
const mapDispatchToProps = (dispatch) => ({
    setListings: (results) => dispatch(Actions.setListings(results))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ExploreContainer)