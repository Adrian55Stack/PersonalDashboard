package com.example.personaldashboardbe.controller;

import com.example.personaldashboardbe.entity.Link;
import com.example.personaldashboardbe.service.LinksService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/links")
@AllArgsConstructor
public class LinksController {

    private final LinksService linksService;

    @GetMapping
    public ResponseEntity<List<Link>> getLinks() {
        return ResponseEntity.ok().body(linksService.getLinks());
    }
}
