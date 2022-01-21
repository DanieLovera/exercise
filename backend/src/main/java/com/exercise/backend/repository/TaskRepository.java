package com.exercise.backend.repository;
import com.exercise.backend.model.Task;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
public interface TaskRepository extends CrudRepository<Task, Long> { }
