//package com.example.server.repository;
//
//import org.springframework.data.mongodb.repository.MongoRepository;
//import java.util.Optional;
//import org.springframework.data.mongodb.repository.Query;
//import java.util.List;
//
//import com.example.server.model.Book;
//
//public interface BookRepository extends MongoRepository<Book, String>{
//    @Query("{ 'bookName' : ?0 }")
//    Optional<Book> findByBookName(String bookName);
//
////    @Query("{'bookName': ?0, 'authorName': ?1}")
////    Optional<Book> findByBookNameAndAuthorName(String bookName, String authorName);
//
//
//}