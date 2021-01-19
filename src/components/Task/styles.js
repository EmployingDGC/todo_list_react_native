import { StyleSheet } from "react-native";

import commonStyles from"../../commonStyles";

const styles = StyleSheet.create({
    container: {
        backgroundColor: commonStyles.colors.secundary,
        flexDirection: "row",
        alignItems: "center",
        borderColor: "#AAA",
        borderRadius: 25,
        borderWidth: 1,
        marginTop: 15,
        marginHorizontal: 5,
        paddingVertical: 10,
    },

    containerCheck: {
        marginHorizontal: 10,
    },

    containerInfo: {
        
    },

    infoText: {
        fontFamily: commonStyles.fontFamily,
    },

    descriptionText: {
        color: commonStyles.colors.mainText,
        fontSize: 15,
    },

    lineThrough: {
        textDecorationLine: "line-through",
    },
    
    initialDateText: {
        color: commonStyles.colors.subText,
        fontSize: 12,
    },
    
    finalDateText: {
        color: commonStyles.colors.subText,
    },

    circle: {
        width: 20,
        height: 20,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#555",
    },

    circleChecked: {
        backgroundColor: "#4D7031",
        justifyContent: "center",
        alignItems: "center",
    },

    trash: {
        flexDirection: "row",
        backgroundColor: "#CC0A0B",
        alignItems: "center",
        borderRadius: 25,
        marginTop: 15,
        marginLeft: 10,
        marginRight: 10,
    },

    trashRight: {
        justifyContent: "center",
        width: 70,
    },

    trashLeft: {
        flex: 1,
        padding: 10,
    },

    trashText: {
        fontFamily: commonStyles.fontFamily,
        color: "#FFF",
        marginLeft: 20,
        fontSize: 18,
    }
});

export default styles;
