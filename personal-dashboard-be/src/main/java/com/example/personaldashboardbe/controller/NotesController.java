package com.example.personaldashboardbe.controller;

import com.example.personaldashboardbe.entity.Note;
import com.example.personaldashboardbe.service.NotesService;
import lombok.AllArgsConstructor;
import org.aspectj.weaver.ast.Not;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/notes")
@AllArgsConstructor
public class NotesController {
    private final NotesService notesService;

    @GetMapping
    public ResponseEntity<List<Note>> getNotes() {
        return ResponseEntity.ok().body(notesService.getNotes());
    }
}