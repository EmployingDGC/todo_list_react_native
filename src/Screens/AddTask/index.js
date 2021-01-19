import React from "react";
import {
    View,
    Modal,
    Text,
    TouchableOpacity,
    TextInput,
} from "react-native";

import DateTimePicker from "@react-native-community/datetimepicker";

import { formatDate } from "../../globalFunctions";

import styles from "./styles";

class AddTask extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            description: "",
            date: new Date(),
            showDatePicker: false,
        }
    }

    onSetTextDescription = (description = "") => {
        this.setState({
            description,
        });
    }

    onChangeDate = (date = new Date()) => {
        this.setState({
            date,
            showDatePicker: false,
        });
    }

    renderDate = () => {
        this.setState({
            showDatePicker: true,
        });
    }

    render() {
        const render_date = this.state.showDatePicker;

        return (
            <Modal
                transparent={true}
                visible={this.props.visible} // this.props.visible
                animationType="slide"
            >
                <View
                    style={[styles.containerModal]}
                >
                    <View style={[styles.containerCard]}>
                        <View style={[styles.containerTittle]}>
                            <Text style={[styles.fontText, styles.tittle]}>Nova Tarefa</Text>
                        </View>

                        <View style={[styles.containerForm]}>
                            <TextInput
                                style={[styles.input]}
                                placeholder="Descrição"
                                value={this.state.description}
                                onChangeText={(description) => this.onSetTextDescription(description)}
                            />
                            {
                                (!render_date) ? (
                                    <TouchableOpacity
                                        onPress={() => {
                                            this.renderDate();
                                        }}
                                    >
                                        <Text style={[styles.buttonDate, styles.buttonDate]}>{formatDate(this.state.date)}</Text>
                                    </TouchableOpacity>
                                ) : (
                                    <DateTimePicker
                                        value={this.state.date}
                                        onChange={(_, date) => this.onChangeDate(date)}
                                        onTouchCancel={() => this.onChangeDate()}
                                        minimumDate={new Date()}
                                        mode="date"
                                    />
                                )
                            }
                        </View>

                        <View style={[styles.containerButton]}>
                            <TouchableOpacity
                                onPress={() => {
                                    this.props.onPressCancel()
                                    this.onSetTextDescription()
                                }}
                            >
                                <Text style={[styles.button]}>Cancelar</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                onPress={() => {
                                    this.props.onPressSave(this.state.description, this.state.date);
                                    this.onSetTextDescription();
                                    this.onChangeDate();
                                }}
                            >
                                <Text style={[styles.button]}>Salvar</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    
                </View>
            </Modal>
        )
    };
}

export default AddTask;
