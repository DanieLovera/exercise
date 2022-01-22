package com.exercise.backend.service;
import com.exercise.backend.model.Task;
import com.exercise.backend.model.TaskState;
import com.exercise.backend.repository.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Optional;

@Service
public class TaskService {

    private TaskRepository taskRepository;

    @Autowired
    public TaskService(TaskRepository taskRepository) {
        this.taskRepository = taskRepository;
    }

    public ResponseEntity<Task> createTask(Task task) {
        Optional<Task> optionalTask = Optional.of(task);
        if (optionalTask.isPresent()) {
            task.setState(TaskState.UNCOMPLETED);
            taskRepository.save(task);
        }
        return ResponseEntity.of(optionalTask);
    }

    public Collection<Task> getTasks() {
        Collection<Task> tasks = new ArrayList<>();
        taskRepository.findAllOrderById().forEach(task -> tasks.add(task));
        return tasks;
    }

    public ResponseEntity<Task> updateTask(Long taskId, Task task) {
        Optional<Task> optionalTask = taskRepository.findById(taskId);
        if (optionalTask.isPresent()) {
            task.setTaskId(taskId);
            taskRepository.save(task);
        }
        return ResponseEntity.of(optionalTask);
    }

    public ResponseEntity<Object> deleteTask(Long taskId) {
        if (taskRepository.existsById(taskId)) {
            taskRepository.deleteById(taskId);
            return ResponseEntity.ok().build();
        }
        return ResponseEntity.notFound().build();
    }
}
