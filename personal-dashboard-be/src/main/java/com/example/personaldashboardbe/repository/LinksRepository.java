package com.example.personaldashboardbe.repository;

import com.example.personaldashboardbe.entity.Link;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LinksRepository extends CrudRepository<Link, Long> {
}
