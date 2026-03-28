package com.example.personaldashboardbe.service;

import com.example.personaldashboardbe.entity.Link;
import com.example.personaldashboardbe.repository.LinksRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class LinksServiceImpl implements LinksService {
    private final LinksRepository linksRepository;
    @Override
    public List<Link> getLinks() {
        return (List<Link>) linksRepository.findAll();
    }
}
