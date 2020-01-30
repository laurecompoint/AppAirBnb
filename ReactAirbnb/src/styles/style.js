import {
    StyleSheet
} from 'react-native';
const styles = StyleSheet.create({

    body: {
        flex: 1,
        backgroundColor: '#008388',
        flexDirection: 'column',

    },
    sectionContainer: {
        width: 380,
        alignSelf: 'center',
        flex: 1,
    },

    sectionTitle: {
        textAlign: 'right',
        fontSize: 20,
        color: 'white'

    },
    sectionbutton: {

        width: 360,
        height: 60,
        margin: 'auto',
        borderColor: 'white',
        borderRadius: 65,
        alignSelf: 'center',
        borderWidth: 2,
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'stretch',
        alignContent: 'space-around',


    },

    sectionTitleFacebook: {
        fontSize: 20,
        textAlign: 'center',
        paddingTop: 15,
        fontWeight: 'bold',
        width: 240,
    },

    sectionTitleAibnb: {
        textAlign: 'left',
        fontSize: 30,
        color: 'white',
        marginBottom: 30,
        alignItems: 'center',
        marginLeft: 15,
    },
    sectionTitleOption: {
        textAlign: 'left',
        fontSize: 25,
        color: 'white',
        marginBottom: 20,
        marginTop: 20,
        alignItems: 'center',
        marginLeft: 15,
    },
    sectionTitleText: {
        textAlign: 'left',
        fontSize: 15,
        color: 'white',
        marginBottom: 40,
        alignItems: 'center',
        marginLeft: 15,
    },
    sectionTextPolitique: {
        textDecorationLine: 'underline',
    },
    sectionImage: {
        width: 50,
        height: 50,
        marginBottom: 40,
        marginLeft: 15,
        marginTop: 10,
    },
    icon: {
        paddingTop: 18,
        paddingRight: 10,
        color: '#008388',

    },
    iconclose: {
        marginLeft: 15,
        color: 'white',

    },
    icongo: {
        marginLeft: 20,
        color: 'black',
    },
    sectionclose: {


        flex: 1,
        marginLeft: 15,
        paddingTop: 10,
        paddingBottom: 140,
        color: 'white',


    },
    sectionlogin: {
        backgroundColor: '#008388',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',

    },
    loginmodal: {
        backgroundColor: '#008388',
        flex: 1,
    },

    //section login
    sectionTitleinput: {
        textAlign: 'left',
        fontSize: 15,
        color: 'white',
        marginBottom: 30,
        alignItems: 'center',
        marginLeft: 15,


    },
    sectionShow: {
        textAlign: 'right',
        fontSize: 15,
        color: 'white',
        marginRight: 20,

        flex: 1,

    },
    sectioninput: {
        fontSize: 15,
        flex: 1,
        marginLeft: 15,
        color: 'white',
    },
    sectionloginbnb: {
        flexDirection: 'row',
        alignContent: 'space-between',
        color: 'white',
        marginTop: 25,
    },
    sectionbuttonArrow: {
        width: 60,
        height: 60,
        backgroundColor: 'white',
        borderRadius: 65,
        borderColor: '#008388',
        marginTop: 60,
        justifyContent: 'center',
        alignContent: 'center',
        alignSelf: 'flex-end'


    },



});
export default styles