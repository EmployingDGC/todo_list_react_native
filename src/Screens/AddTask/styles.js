import { StyleSheet } from "react-native";

import commonStyles from "../../commonStyles";

const styles = StyleSheet.create({
    containerModal: {
        flex: 1,
        backgroundColor: "#00000099",
        justifyContent: "center",
        alignItems: "center",
    },

    containerCard: {
        backgroundColor: commonStyles.colors.secundary,
        width: "80%",
        borderRadius: 15,
    },
    
    containerTittle: {
        padding: 10,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: commonStyles.colors.primary.today,
    },

    containerForm: {
        padding: 10,
        alignItems: "center",
    },

    containerButton: {
        flexDirection: "row",
        justifyContent: "flex-end",
        paddingRight: 15,
    },

    fontText: {
        fontFamily: commonStyles.fontFamily,
    },

    tittle: {
        fontSize: 30,
        fontWeight: "bold",
        color: commonStyles.colors.secundary,
    },

    input: {
        fontFamily: commonStyles.fontFamily,
        fontSize: 15,
        width: "100%",
        backgroundColor: "#EEE",
        borderRadius: 15,
        paddingHorizontal: 15,
        margin: 2,
    },

    button: {
        fontSize: 15,
        fontWeight: "bold",
        padding: 20,
        color: commonStyles.colors.primary.today,
    },

    buttonDate: {
        marginTop: 10,
        borderRadius: 15,
        padding: 10,
        backgroundColor: commonStyles.colors.primary.today,
        color: commonStyles.colors.secundary,
    },
});

export default styles;
