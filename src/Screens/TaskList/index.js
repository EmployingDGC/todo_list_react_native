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

import Task from "../../components/Task";
import AddTask from "../AddTask";

import { formatDate } from "../../globalFunctions";
import todayImage from "../../../assets/imgs/today.jpg";

import commonStyles from "../../commonStyles";
import styles from "./styles";

class TaskList extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            tasksDoneVisible: true,
            modalAddTaskVisible: false,
            tasks: [],
        }
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
    }

    renderTesks = (tasksState) => {
        const task_list = [];

        for (let id = 0; id < tasksState.length; id++) {            
            const task = (
                <Task
                    key={`${id}`}
                    style={{
                        display: !this.state.tasksDoneVisible && tasksState[id].done ? "none" : "flex",
                    }}
                    description={tasksState[id].description}
                    finalDate={tasksState[id].finalDate}
                    doneDate={tasksState[id].doneDate}
                    done={tasksState[id].done}
                    onPress={() => this.onPressTask(id)}
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
        })
    }

    onPressSave = (description, final_date) => {
        return this.createNewTask(description, final_date);
    }

    onPressIconPlus = () => {
        const modalAddTaskVisible = true;

        this.setState({
            modalAddTaskVisible,
        })
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
        })
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
