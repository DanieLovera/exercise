package com.exercise.backend.controller;

import com.exercise.backend.model.Task;
import com.exercise.backend.service.TaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

@RestController
@RequestMapping(path = "tasks")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class TaskController {

    private TaskService taskService;

    @Autowired
    public TaskController(TaskService taskService) {
        this.taskService =  taskService;
    }

    @PostMapping(path="/create")
    public ResponseEntity<Task> createTask(@RequestBody Task task) {
        return taskService.createTask(task);
    }

    @GetMapping
    public Collection<Task> getTasks() {
        return  taskService.getTasks();
    }

    /*@GetMapping(path = "{id}")
    public ResponseEntity<Task> getTask(@PathVariable("id") Long taskId) {
        return taskService.getTask(taskId);
    }*/

    @PutMapping(path="update/{id}")
    public ResponseEntity<Task> updateTask(@PathVariable("id") Long ticketID,
                                             @RequestBody Task task) {
        return taskService.updateTask(ticketID, task);
    }

    @DeleteMapping(path="delete/{id}")
    public ResponseEntity<Object> deleteTask(@PathVariable("id") Long taskId) {
        return taskService.deleteTask(taskId);
    }
}
