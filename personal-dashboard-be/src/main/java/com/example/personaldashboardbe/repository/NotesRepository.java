package com.example.personaldashboardbe.repository;

import com.example.personaldashboardbe.entity.Note;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface NotesRepository extends CrudRepository<Note, Long> {
}
