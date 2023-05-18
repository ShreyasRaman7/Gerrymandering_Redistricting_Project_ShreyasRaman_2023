
package com.example.server.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import java.util.Optional;
import org.springframework.data.mongodb.repository.Query;
import java.util.List;

import com.example.server.model.EnsembleSummary;

public interface EnsembleRepository extends MongoRepository<EnsembleSummary, String>{
    @Query("{ 'districtPlan' : ?0 }")
    Optional<EnsembleSummary> findByDistrictPlan(String districtPlan);

//    @Query("{'bookName': ?0, 'authorName': ?1}")
//    Optional<Book> findByBookNameAndAuthorName(String bookName, String authorName);


}