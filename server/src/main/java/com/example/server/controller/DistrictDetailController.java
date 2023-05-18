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
import com.example.server.model.DistrictDetail;
import com.example.server.model.Detail;
import com.example.server.repository.DistrictDetailRepository;
//import com.example.server.repository.BookRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class DistrictDetailController{

    @Autowired
    private DistrictDetailRepository repository;

    @GetMapping("/districtDetails")
    public List<DistrictDetail> getDetails(){
        return repository.findAll();
    }

    @GetMapping("/districtDetails/{id}")
    public Optional<DistrictDetail> getDetails(@PathVariable String id){
        return repository.findById(id);
    }

//    @GetMapping("/districtSummary/{districtPlan}")
//    public Optional<DistrictDetail> getDetailsDistrictPlan(@PathVariable String districtPlan){
//        return repository.findByDistrictPlan(districtPlan);
//    }

    @GetMapping("/districtSummary/{districtPlan}")
    public List<Detail> getDetailDistrictPlan(@PathVariable String districtPlan) {
        Optional<DistrictDetail> optionalDistrictSummary = repository.findByDistrictPlan(districtPlan);
        if (optionalDistrictSummary.isPresent()) {
            return optionalDistrictSummary.get().getDetails();
        } else {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Book not found");
        }
    }



    @GetMapping("/districtDetailsKey/{key}")
    public List<Detail> getIncumbentsByIdentifier(@PathVariable String key) {
        Optional<DistrictDetail> optionalDetail = repository.findByKey(key);
        if (optionalDetail.isPresent()) {
            return optionalDetail.get().getDetails();
        } else {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "District Detail not found");
        }
    }
}