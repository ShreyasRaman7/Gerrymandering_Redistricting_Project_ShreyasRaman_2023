package com.example.server.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;


import org.springframework.http.HttpStatus;
import org.springframework.web.server.ResponseStatusException;

//import com.example.server.model.Book;
import com.example.server.model.IncumbentSummary;
import com.example.server.model.Incumbent;
import com.example.server.repository.IncumbentRepository;
//import com.example.server.repository.BookRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class IncumbentSummaryController{

    @Autowired
    private IncumbentRepository repository;

    @GetMapping("/incumbents")
    public List<IncumbentSummary> getIncumbents(){
        return repository.findAll();
    }

    @GetMapping("/incumbents/{id}")
    public Optional<IncumbentSummary> getIncumbent(@PathVariable String id){
        return repository.findById(id);
    }

    @GetMapping("/incumbentsSY/{state}")
    public List<Incumbent> getIncumbentsByState(@PathVariable String state) {
        Optional<IncumbentSummary> optionalIncumbent = repository.findByState(state);
        if (optionalIncumbent.isPresent()) {
            return optionalIncumbent.get().getIncumbents();
        } else {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Book not found");
        }
    }
}