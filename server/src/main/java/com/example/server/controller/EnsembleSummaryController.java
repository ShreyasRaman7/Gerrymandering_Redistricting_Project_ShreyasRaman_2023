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
import com.example.server.model.EnsembleSummary;
import com.example.server.model.Ensemble;
import com.example.server.repository.EnsembleRepository;
//import com.example.server.repository.BookRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class EnsembleSummaryController {

    @Autowired
    private EnsembleRepository repository;

    @GetMapping("/ensemble")
    public List<EnsembleSummary> getEnsembles() {
        return repository.findAll();
    }

    @GetMapping("/ensemble/{id}")
    public Optional<EnsembleSummary> getEnsembles(@PathVariable String id) {
        return repository.findById(id);
    }

    @GetMapping("/ensembleSummary/{districtPlan}")
    public List<Ensemble> getEnsembleDistrictPlan(@PathVariable String districtPlan) {
        Optional<EnsembleSummary> optionalEnsembleSummary = repository.findByDistrictPlan(districtPlan);
        if (optionalEnsembleSummary.isPresent()) {
            return optionalEnsembleSummary.get().getEnsembles();
        } else {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Ensemble not found");
        }
    }
}