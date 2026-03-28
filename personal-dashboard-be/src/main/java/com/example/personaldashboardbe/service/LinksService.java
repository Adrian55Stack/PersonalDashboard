package com.example.personaldashboardbe.service;

import com.example.personaldashboardbe.entity.Link;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface LinksService {
    List<Link> getLinks();
}
