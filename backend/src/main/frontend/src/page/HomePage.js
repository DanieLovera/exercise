import {useEffect, useState} from "react";

import TaskService from "../service/TaskService";
import CheckList from "../component/CheckList";
import AddTask from "../component/AddTask";

function HomePage(props) {

    const taskService = new TaskService();
    const [tasks, setTasks] = useState([]);

    useEffect(() => getTasks(), []);

    function createTask(task) {
        taskService.createTask(task).then(
            response => { getTasks() }
        );
    }

    function getTasks() {
        taskService.fetchTasks().then(
            response => { setTasks(response.data) }
        );
    }

    function updateTask(task) {
        taskService.updateTask(task).then(
            response => {
                getTasks();
            }
        );
    }

    function deleteTask(taskId) {
        taskService.deleteTask(taskId).then(
            response => {
                getTasks();
            }
        );
    }

    return (
        <div>
            <CheckList
                title={"To-Do List"}
                tasks={tasks}
                update={updateTask}
                delete={deleteTask}/>
            <AddTask add={createTask}/>
        </div>
    );
}

export default HomePage;
