import React, { Component } from 'react';

import {
    View,
    Text,
    TextInput,
    TouchableOpacity
} from 'react-native';
import styles from '../styles/style';

class Input extends Component {

    constructor(props) {
        super(props)

        this.state = {
            value: '',
            secureTextEntry: true,
            email: '',
            validated: false,
            buttonshow: false
        }
    }

    toggleSecureTextEntry = () => {
        // this.state.secureTextEntry correspond au state courant
        // setState() permet de modifier secureTextEntry
        this.setState({
            secureTextEntry: !this.state.secureTextEntry, // Je modifie le state courant avec sa valeur inversée. 

        })
    }

    validateemail = text => {
        console.log(text);
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (reg.test(text) === false) {
            //console.log('Email is Not Correct');
            this.setState({ email: text });
            this.setState({ emailvalide: 'Email is Not Correct' })
            return false;
        } else {
            this.setState({ email: text });
            // console.log('Email is Correct');
            this.setState({ emailvalide: 'Email is Correct' })
        }
    };


    onPress = () => {
        this.setState({
            buttonshow: !this.state.buttonshow
        })

    }
    render() {

        const { secureTextEntry } = this.state
        const { inputType, label } = this.props;
        const isPasswordInput = inputType === 'password'
        const isEmailInput = inputType === 'email'
        return (
            <View style={styles.sectionImageText}>

                <View style={styles.sectionloginbnb}>
                    <Text style={styles.sectioninput}>{label}</Text>
                    {isPasswordInput &&
                        <TouchableOpacity onPress={() => {
                            this.toggleSecureTextEntry()
                        }}>
                            <Text style={styles.sectionShow}>{secureTextEntry ? 'Show' : 'Hide'}</Text>
                        </TouchableOpacity>
                    }
                </View>

                <TextInput
                    style={{ height: 40, marginTop: 20, width: 355, color: 'white', borderBottomColor: '#009999', marginLeft: 13, borderColor: '#008388', borderWidth: 1 }}

                    onChangeText={text => this.validateemail(text)}
                    value={this.state.email}
                    inputType={inputType}
                    secureTextEntry={isPasswordInput && secureTextEntry}
                />
                <View>
                    <Text style={{ marginLeft: 10, color: '#720F06' }}>

                        {this.state.buttonshow == true ? <Text> {this.state.emailvalide}</Text > : null}



                    </Text>
                </View>
                <View style={styles.sectionloginbnb}>
                    {isEmailInput &&
                        <TouchableOpacity

                            onPress={this.onPress}

                        >
                            <Text style={{ marginLeft: 10, color: '#FFFFFF' }}>Valider</Text>
                        </TouchableOpacity>



                    }

                </View>

            </View>


        )

    }
}


export default Input;