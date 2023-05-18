//package com.example.server.controller;
//
//import java.util.List;
//import java.util.Optional;
//
//import org.springframework.web.bind.annotation.PathVariable;
//import org.springframework.web.bind.annotation.RestController;
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.beans.factory.annotation.Autowired;
//
//import org.springframework.http.HttpStatus;
//import org.springframework.web.server.ResponseStatusException;
//
//import com.example.server.model.Book;
//import com.example.server.model.Incumbent;
//import com.example.server.repository.BookRepository;
//
//@RestController
//public class BookController{
//
//    @Autowired
//    private BookRepository repository;
//
//    @PostMapping("/addBook")
//    public String saveBook(@RequestBody Book book){
//        repository.save(book);
//        return "Addd book with id: " + book.getId();
//    }
//
//    @GetMapping("/findAllBooks")
//    public List<Book> getBooks(){
//        return repository.findAll();
//    }
//
//    @GetMapping("/findAllBooks/{id}")
//    public Optional<Book> getBook(@PathVariable String id){
//        return repository.findById(id);
//    }
//
//    @GetMapping("/books/{bookName}/incumbents")
//    public List<Incumbent> getIncumbentsByBookName(@PathVariable String bookName) {
//        Optional<Book> optionalBook = repository.findByBookName(bookName);
//        if (optionalBook.isPresent()) {
//            return optionalBook.get().getIncumbents();
//        } else {
//            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Book not found");
//        }
//    }
//
////    @GetMapping("/books/{bookName}/{authorName}")
////    public List<Book> getBooksByBookNameAndAuthorName(@PathVariable String bookName, @PathVariable String authorName) {
////        Optional<Book> books = repository.findByBookNameAndAuthorName(bookName, authorName);
////        if (books.isPresent()) {
////            return books.get().getIncumbents();
////        } else {
////            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Book not found");
////        }
////    }
//
//}