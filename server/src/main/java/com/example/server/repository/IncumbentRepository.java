//import java.util.List;
//import org.springframework.data.mongodb.repository.MongoRepository;
//import org.springframework.stereotype.Repository;
//
//
//@Repository
//public interface IncumbentRepository extends MongoRepository<Incumbent, String> {
//
//    List<Incumbent> findByStateAndYear(String state, int year);
//
//    List<Incumbent> findByIncumbent(int incumbent);
//}


package com.example.server.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import java.util.Optional;
import org.springframework.data.mongodb.repository.Query;
import java.util.List;

import com.example.server.model.IncumbentSummary;

public interface IncumbentRepository extends MongoRepository<IncumbentSummary, String>{
    @Query("{ 'state' : ?0 }")
    Optional<IncumbentSummary> findByState(String state);

//    @Query("{'bookName': ?0, 'authorName': ?1}")
//    Optional<Book> findByBookNameAndAuthorName(String bookName, String authorName);


}