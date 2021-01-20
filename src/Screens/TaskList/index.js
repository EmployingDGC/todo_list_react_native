import React from "react";
import {
    View,
    ScrollView,
    Text,
    ImageBackground,
    TouchableHighlight,
    Alert,
} from "react-native";

import Icon from "react-native-vector-icons/FontAwesome";

import asyncStorage from "@react-native-community/async-storage";

import Task from "../../components/Task";
import AddTask from "../AddTask";

import { formatDate } from "../../globalFunctions";
import todayImage from "../../../assets/imgs/today.jpg";

import commonStyles from "../../commonStyles";
import styles from "./styles";

const initialState = {
    tasksDoneVisible: true,
    modalAddTaskVisible: false,
    tasks: [],
}

class TaskList extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            ...initialState,
        }
    }

    componentDidMount = async () => {
        const stringState = await asyncStorage.getItem("stateTasks");

        const state = JSON.parse(stringState) || initialState;

        this.setState({
            tasks: state.tasks,
        });
    }

    updateAsyncStorage = () => {
        asyncStorage.setItem("stateTasks", JSON.stringify(this.state));
    }

    removeTask = (id) => {
        const tasks = this.state.tasks;

        tasks.splice(id, 1);

        this.setState({
            tasks,
        });

        this.updateAsyncStorage();
    }

    createNewTask = (description, final_date = new Date()) => {
        if (description.trim() === "" || description === null) {
            Alert.alert("Dados Inválidos", "Descrição não informada");
            return;
        }

        const tasks = this.state.tasks;

        const task = {
            description: description,
            initialDate: formatDate(),
            finalDate: formatDate(final_date),
            doneDate: null,
            done: false
        };

        tasks.push(task);

        this.setState({
            tasks
        }, this.onPressCancel);

        this.updateAsyncStorage();
    }

    renderTesks = (tasksState) => {
        const task_list = [];

        for (let id = 0; id < tasksState.length; id++) {            
            const task = (
                <Task
                    id={id}
                    key={`${id}`}
                    style={{
                        display: !this.state.tasksDoneVisible && tasksState[id].done ? "none" : "flex",
                    }}
                    description={tasksState[id].description}
                    finalDate={tasksState[id].finalDate}
                    doneDate={tasksState[id].doneDate}
                    done={tasksState[id].done}
                    onPress={() => this.onPressTask(id)}
                    onSwipe={() => this.removeTask(id)}
                />
            );

            task_list.push(task);
        }

        return task_list;
    }

    onPressCancel = () => {
        const modalAddTaskVisible = false;

        this.setState({
            modalAddTaskVisible,
        });
    }

    onPressSave = (description, final_date) => {
        return this.createNewTask(description, final_date);
    }

    onPressIconPlus = () => {
        const modalAddTaskVisible = true;

        this.setState({
            modalAddTaskVisible,
        });
    }

    onPressIconEye = () => {
        const tasksDoneVisible = !this.state.tasksDoneVisible;

        this.setState({
            tasksDoneVisible,
        });
    }

    onPressTask = (id) => {
        const tasks = this.state.tasks;
        const task = tasks[id];

        task.done = !task.done;
        task.doneDate = formatDate();
        
        this.setState({
            tasks,
        });

        this.updateAsyncStorage();
    }

    render() {
        const today = formatDate();

        return (
            <View style={[styles.container]}>
                <AddTask
                    onPressSave={this.onPressSave}
                    visible={this.state.modalAddTaskVisible}
                    onPressCancel={this.onPressCancel}
                />

                <View style={[styles.header]}>
                    <ImageBackground
                        style={[styles.headerImg]}
                        source={todayImage}
                    >
                        <View
                            style={[styles.iconEye]}
                            onTouchEnd={() => this.onPressIconEye()}
                        >
                            <Icon
                                name={this.state.tasksDoneVisible ? "eye-slash" : "eye"}
                                size={25}
                                color={commonStyles.colors.secundary}
                            />
                        </View>
                        <View style={[styles.headerContainer]}>
                            <Text style={[styles.headerText, styles.headerTittle]}>Hoje</Text>
                            <Text style={[styles.headerText, styles.headerSubtittle]}>{today}</Text>
                        </View>
                    </ImageBackground>
                </View>

                <View style={[styles.body]}>
                    <ScrollView>
                        {this.renderTesks(this.state.tasks)}
                    </ScrollView>
                </View>

                <TouchableHighlight
                    style={[styles.iconPlus]}
                    onPress={this.onPressIconPlus}
                    underlayColor={`${commonStyles.colors.primary.today}AC`}
                >
                    <Icon
                        name="plus"
                        size={30}
                        color={commonStyles.colors.primary.today}
                    />
                </TouchableHighlight>
            </View>
        )
    };
}

export default TaskList;
