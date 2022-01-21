package com.exercise.backend.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Column;
import javax.persistence.GenerationType;

@Entity
@Table(name="task")
public class Task {

    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    @JsonIgnore
    @Column(name="task_id")
    private Long taskId;

    @Column(name="description")
    private String description;

    @Column(name="state", nullable = false)
    private TaskState state;

    @JsonIgnore
    public Long getTaskId() {
        return taskId;
    }

    @JsonIgnore
    public void setTaskId(Long taskId) {
        this.taskId = taskId;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public TaskState getState() {
        return state;
    }

    public void setState(TaskState state) {
        this.state = state;
    }
}
