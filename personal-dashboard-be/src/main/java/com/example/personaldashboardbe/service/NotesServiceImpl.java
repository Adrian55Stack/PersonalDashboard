package com.example.personaldashboardbe.service;

import com.example.personaldashboardbe.entity.Note;
import com.example.personaldashboardbe.repository.NotesRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class NotesServiceImpl implements NotesService{
    private final NotesRepository notesRepository;

    @Override
    public List<Note> getNotes() {
        return (List<Note>) notesRepository.findAll();
    }
}
