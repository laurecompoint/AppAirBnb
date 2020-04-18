import React, { Component } from 'react';
import styles from './styles.js';

import {
    View,
    Text,
    TextInput,
    TouchableOpacity
} from 'react-native';


export default class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {
            myText: 'Afficher',
            displayPassword: true,

            validated: false,
            pressValid: false,
            password: '',
            email: ''
        };

    }

    login = () => {

        const { password, email } = this.state

        return fetch('https://bbnb-booking.now.sh/api/users/signIn', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email,
                password,
            }),
        })
            .then((response) => response.json())
            .then((response) => {
                // sauvegarde du token dabs le local storage
                return AsyncStorage
                    .setItem('userToken', response.authorization)
                    .then(() => {
                        this.props.navigation.navigate('ExploreContainer')
                    })
            })
    }
    validate = textEmail => {
        console.log(textEmail);
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (reg.test(textEmail) === false) {
            // alert('Email is Not Correct');
            console.log('Email is Not Correct');
            this.setState({ email: 'Email non valide !' });
            return false;
        } else {
            // alert('Email is Correct');
            this.setState({ email: '' });
            console.log('Email is Correct');
        }
    };
    emailValid = () => {
        this.setState({
            pressValid: !this.state.pressValid,
        });
    };

    render() {
        const { textInputType } = this.props;
        const { displayPassword } = this.state;
        const { displayMsg } = this.state;
        return (
            <View style={[styles.champ]}>
                <View style={[styles.flex]}>
                    <Text style={[styles.textLabel]}>{this.props.title}</Text>
                    {textInputType === 'email' && (
                        <TouchableOpacity onPress={this.emailValid}>
                            <Text style={[styles.textShowPassword]}>Valider</Text>
                        </TouchableOpacity>
                    )}
                    {textInputType === 'password' && (
                        <TouchableOpacity
                            onPress={() => {
                                const myText = this.state.displayPassword
                                    ? 'Masquer'
                                    : 'Afficher';
                                this.setState({
                                    displayPassword: !this.state.displayPassword,
                                    myText,
                                });
                            }}>
                            <Text style={styles.textShowPassword}>{this.state.myText}</Text>
                        </TouchableOpacity>
                    )}
                </View>
                {textInputType === 'email' && (
                    <TextInput
                        style={[styles.textInput]}
                        placeholder="Saississez un e-mail"
                        secureTextEntry={displayMsg}
                        onChangeText={(text) => { this.setState({ email: text }) }}
                    //onChangeText={textEmail => this.validate(textEmail)}
                    //value={this.state.email}
                    ></TextInput>
                )}
                {this.state.pressValid == true ? (
                    <Text onPress={this.emailValid} style={[styles.textValid]}>
                        {this.state.email}
                    </Text>
                ) : null}
                {textInputType === 'password' && (
                    <View>
                        <TextInput
                            style={[styles.textInput]}
                            textContentType={'password'}
                            placeholder="Saississez un mot de passe"
                            secureTextEntry={displayPassword}
                            onChangeText={(text) => { this.setState({ password: text }) }}
                        ></TextInput>
                        <TouchableOpacity onPress={this.login}>
                            <Text>GO LOGIN</Text>
                        </TouchableOpacity>
                        <Text>{this.state.password}</Text>
                    </View>
                )}

            </View>
        );
    }
}
