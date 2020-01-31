import {
    StyleSheet
} from 'react-native';
const styles = StyleSheet.create({

    body: {
        flex: 1,
        backgroundColor: 'white',
        flexDirection: 'column',

    },
    title: {
        fontSize: 25,
        marginTop: 10,
    },
    sectionContainer: {
        width: 380,
        alignSelf: 'center',
        flex: 1,
    },
    image: {
        width: 115,
        height: 115,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'center',

        justifyContent: 'space-between',
        marginTop: 10,
    },
    experiencerow: {
        flexDirection: 'row',

        justifyContent: 'center',

        justifyContent: 'space-between',
        marginTop: 10,
    },
    imageexperience: {
        width: 165,
        height: 115,
        borderRadius: 10,
    },
    texttitle: {
        fontSize: 15,
    },
    textdescription: {
        fontSize: 15,
        width: 170,
    },
    textprice: {
        fontSize: 10,
        marginRight: 30,
        marginTop: 5
    },
    container: {
        marginRight: 30,
    },
    cardExperience: {
        marginRight: 40,
    },
    sectionexperiences: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    titleexperiences: {
        fontSize: 20,
        marginTop: 10,
    },
    wrapper: {

        flexDirection: 'row',
        backgroundColor: 'white',
        marginTop: 5,
    },
    scrollView: {
        paddingTop: 100,
    },
    scrollViewContent: {
        paddingBottom: 80,
    },
    categories: {
        marginBottom: 40,
    },
    favori: {
        flex: 1,
        position: 'absolute',
        right: 10,
        top: 10,

    }






});
export default styles