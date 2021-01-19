import React from "react";
import { View, Text } from "react-native";

import Swipeable from "react-native-gesture-handler/Swipeable";

import Icon from "react-native-vector-icons/FontAwesome";

import styles from "./styles";

const Task = (props) => {

    const onSwipeRight = () => {
        return (
            <View
                style={[styles.trash, styles.trashRight]}
                onTouchEnd={props.onSwipe}
            >
                <Icon
                    name="trash"
                    size={25}
                    color="#FFF"
                />
            </View>
        );
    }

    const onSwipeLeft = () => {
        return (
            <View style={[styles.trash, styles.trashLeft]}>
                <Icon
                    name="trash"
                    size={25}
                    color="#FFF"
                />
                <Text style={[styles.trashText]}>Excluindo...</Text>
            </View>
        );
    }

    return (
        <Swipeable
            renderRightActions={onSwipeRight}
            renderLeftActions={onSwipeLeft}
            onSwipeableLeftOpen={() => {
                props.onSwipe()
            }}
        >
            <View
                style={[styles.container, props.style]}
                onTouchEnd={props.onPress}
            >
                <View style={[styles.containerCheck]}>
                    {getCheckView(props.done)}
                </View>
                <View style={[styles.containerInfo]}>
                    <Text style={[
                        styles.infoText, styles.descriptionText,
                        props.done ? styles.lineThrough : {},
                    ]}>
                        {props.description}
                    </Text>
                    <Text style={[styles.infoText, styles.finalDateText]}>
                        {props.done ? `Concluído em ${props.doneDate}` : `Expira em ${props.finalDate}`}
                    </Text>
                </View>
            </View>
        </Swipeable>
    );
}

const getCheckView = (done) => {
    if (done) {
        return (
            <View style={[styles.circle, styles.circleChecked]}>
                <Icon name="check" size={13} color="#FFF" />
            </View>
        );
    }
    
    return (
        <View style={[styles.circle]} />
    );
}

export default Task;
