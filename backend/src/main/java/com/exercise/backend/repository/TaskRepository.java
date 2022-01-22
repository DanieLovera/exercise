package com.exercise.backend.repository;
import com.exercise.backend.model.Task;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.List;

@RepositoryRestResource
public interface TaskRepository extends CrudRepository<Task, Long> {

    @Query(value = "SELECT * FROM task ORDER BY task.task_id", nativeQuery = true)
    List<Task> findAllOrderById();

}
