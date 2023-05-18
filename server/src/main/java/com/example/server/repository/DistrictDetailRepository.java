package com.example.server.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import java.util.Optional;
import org.springframework.data.mongodb.repository.Query;
import java.util.List;

import com.example.server.model.DistrictDetail;

public interface DistrictDetailRepository extends MongoRepository<DistrictDetail, String>{
    @Query("{ 'key' : ?0 }")
    Optional<DistrictDetail> findByKey(String key);

    @Query("{ 'districtPlan' : ?0 }")
    Optional<DistrictDetail> findByDistrictPlan(String districtPlan);



//    @Query("{'bookName': ?0, 'authorName': ?1}")
//    Optional<Book> findByBookNameAndAuthorName(String bookName, String authorName);


}