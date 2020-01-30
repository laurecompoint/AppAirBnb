import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import Buttons from './Buttons';
import {
    Modal,
    View,
    Text,
    TouchableHighlight,
} from 'react-native';
import styles from '../styles/style';

class Options extends Component {

    constructor(props) {
        super(props)

    }
    state = {
        modalVisible: false,
    };
    setModalVisible(visible) {
        this.setState({ modalVisible: visible });
    }
    render() {



        return (

            <View style={{ marginTop: 22 }}>
                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {
                        Alert.alert('Modal has been closed.');
                    }}>
                    <View style={styles.body}>
                        <View style={styles.sectionContainer}>

                            <View>



                                <TouchableHighlight
                                    onPress={() => {
                                        this.setModalVisible(!this.state.modalVisible);
                                    }}>


                                    <View style={styles.sectionlogin}>
                                        <Icon size={20} style={styles.sectionclose} name="close"></Icon>


                                    </View>



                                </TouchableHighlight>



                                <Buttons icon={<Icon size={20} style={styles.icon} name="facebook">

                                </Icon>} title={"Facebook"} backgroundColor={'white'} margine={40} text={'#008388'}></Buttons>

                                <Buttons icon={<Icon size={20} style={styles.icon} name="google">

                                </Icon>} title={"Google"} backgroundColor={'white'} margine={40} text={'#008388'}></Buttons>

                                <Buttons title={"Créer un compte"} margine={10} backgroundColor={'#008388'} bordercolor={'white'} text={'white'}></Buttons>

                            </View>
                        </View>
                    </View>
                </Modal>

                <TouchableHighlight
                    onPress={() => {
                        this.setModalVisible(true);
                    }}>
                    <Text style={styles.sectionTitleOption}>{this.props.options}</Text>
                </TouchableHighlight>
            </View >

        )
    }
}


export default Options;