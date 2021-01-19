import { StyleSheet } from "react-native";
import commonStyles from "../../commonStyles";

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    
    header: {
        flex: 3,
    },
    
    headerImg: {
        flex: 1,
    },
    
    body: {
        flex: 7,
        paddingBottom: 15,
    },
    
    headerContainer: {
        flex: 1,
        justifyContent: "flex-end",
        margin: 15,
    },

    iconEye: {
        position: "absolute",
        top: 10,
        right: 10,
    },

    iconPlus: {
        position: "absolute",
        bottom: 10,
        right: 10,
        padding: 10,
        borderRadius: 50,
        borderWidth: 3,
        borderColor: commonStyles.colors.primary.today,
        backgroundColor: commonStyles.colors.secundary,
    },
    
    headerText: {
        fontFamily: commonStyles.fontFamily,
        color: commonStyles.colors.secundary,
    },

    headerTittle: {
        fontSize: 50,
    },

    headerSubtittle: {
        fontSize: 20,
        marginTop: 10,
    },
});

export default styles;
