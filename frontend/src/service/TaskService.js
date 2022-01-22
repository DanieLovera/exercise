import axios from "axios";

class TaskService {

    async fetchTasks() {
        const response = await axios.get("http://localhost:8080/tasks");
        return response;
    }

    async updateTask(task) {
        const response = await axios.put(`http://localhost:8080/tasks/update/${task.taskId}`, task);
        return response;
    }

    async createTask(task) {
        const response = await axios.post("http://localhost:8080/tasks/create/", task);
        return response;
    }

    async deleteTask(task) {
        const response = await axios.delete(`http://localhost:8080/tasks/delete/${task.taskId}`);
        return response;
    }
};

export default TaskService;
