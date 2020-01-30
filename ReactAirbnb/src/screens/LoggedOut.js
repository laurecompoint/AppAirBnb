import React, { Component } from 'react';
import styles from '../styles/style';
import Buttons from '../components/Buttons';
import Options from '../components/options';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
    View,
    Text,
    Image,
    TouchableOpacity
} from 'react-native';
export default class LoggedOut extends Component {
    // Permet de définit sur cet écran comment on doit afficher le header.
    static navigationOptions = ({ navigation }) => {
        return {
            header: (
                <View style={styles.sectionlogin}>
                    <Icon size={20} style={styles.iconclose} name="close"></Icon>
                    <TouchableOpacity onPress={() => navigation.navigate('Login')}><Text style={styles.sectionTitle}>Connexion</Text></TouchableOpacity>
                </View>
            )
        }
    };
    render() {
        return (

            <View style={styles.body}>
                <View style={styles.sectionContainer}>



                    <View style={styles.sectionImageText}>


                        <Image style={styles.sectionImage} source={require('../img/airbnb-logo.png')} />

                        <Text style={styles.sectionTitleAibnb}>Bienvenue sur Airbnb.</Text>

                        <Buttons icon={<Icon size={20} style={styles.icon} name="facebook"></Icon>} title={"Continuer avec Facebook"} margine={30} backgroundColor={'white'} text={'#008388'}></Buttons>
                        <Buttons title={"Créer un compte"} margine={10} backgroundColor={'#008388'} bordercolor={'white'} text={'white'}></Buttons>


                    </View>


                    <View style={styles.sectionImageText}>


                        <Options options={"Plus d'options"}>



                        </Options>

                        <Text style={styles.sectionTitleText}>En appuyant sur continuer, Créer un compte ou Plus d'options, j'accepte les
                        <Text styles={styles.sectionTextPolitique}> Conditions générales,</Text> les <Text styles={styles.sectionTextPolitique}> Conditions de services relatives aux paiements, </Text>
                            la <Text styles={styles.sectionTextPolitique}>Politique de confidentialité</Text> et la <Text styles={styles.sectionTextPolitique}>Politique de non-discrimination</Text> d'Airbnb.


                        </Text>


                    </View>


                </View>
            </View>
        )

    }
}