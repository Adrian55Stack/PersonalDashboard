package com.example.personaldashboardbe.service;

import com.example.personaldashboardbe.entity.Note;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface NotesService {
    List<Note> getNotes();
}
