import React, { Component } from 'react';
import styles from '../styles/style';
import Input from '../components/Input';
import ButtonsValider from '../components/ButtonsValider';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
    View,
    Text,
    TouchableOpacity
} from 'react-native';
export default class Login extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            header: (
                <View style={styles.sectionlogin}>
                    <TouchableOpacity onPress={() => navigation.goBack()}><Icon size={20} style={styles.iconclose} name="arrow-left"></Icon></TouchableOpacity>
                    <Text style={styles.sectionTitle}>Forgot password?</Text>
                </View>)
        }
    }
    render() {

        return (

            <View style={styles.body}>
                <View style={styles.sectionContainer}>

                    <View style={styles.sectionImageText}>

                        <Text style={styles.sectionTitleAibnb}>Log in</Text>

                        <Input inputType={'email'} label={"EMAIL"} />
                        <Input inputType={"password"} label={'PASSWORD'} />
                    </View>


                    <ButtonsValider navigation={this.props.navigation} backgroundColor={'white'} text={'#008388'}></ButtonsValider>


                </View>
            </View>
        )

    }
}