////import org.springframework.core.convert.converter.Converter;
////
////import com.fasterxml.jackson.databind.ObjectMapper;
////import java.io.IOException;
////
////import com.example.server.model.Book;
////
////public class StringToIncumbentArrayConverter implements Converter<String, Book.Incumbent[]> {
////    @Override
////    public Book.Incumbent[] convert(String source) {
////        ObjectMapper mapper = new ObjectMapper();
////        try {
////            return mapper.readValue(source, Book.Incumbent[].class);
////        } catch (IOException e) {
////            throw new IllegalArgumentException("Could not convert string to Incumbent array: " + e.getMessage(), e);
////        }
////    }
////}
//
//package com.example.server.converter;
//import org.springframework.core.convert.converter.Converter;
//import org.springframework.stereotype.Component;
//import com.example.server.model.Book.Incumbent;
//import com.fasterxml.jackson.databind.ObjectMapper;
//import java.io.IOException;
//import java.util.Arrays;
//import com.fasterxml.jackson.core.JsonProcessingException;
//
//@Component
//public class StringToIncumbentArrayConverter implements Converter<String, Incumbent[]> {
//
//    private final ObjectMapper objectMapper;
//
//    public StringToIncumbentArrayConverter(ObjectMapper objectMapper) {
//        this.objectMapper = objectMapper;
//    }
//
//    @Override
//    public Incumbent[] convert(String source) {
//        try {
//            return objectMapper.readValue(source, Incumbent[].class);
//        } catch (IOException e) {
//            throw new IllegalArgumentException("Failed to convert String to Incumbent[]: " + e.getMessage(), e);
//        }
//    }
//}
//

//import org.springframework.core.convert.converter.Converter;
//
//import com.example.server.model.Incumbent;
//
//public class StringToIncumbentArrayConverter implements Converter<String, Incumbent[]> {
//
//    @Override
//    public Incumbent[] convert(String source) {
//        String[] parts = source.split(";");
//        Incumbent[] incumbents = new Incumbent[parts.length];
//
//        for (int i = 0; i < parts.length; i++) {
//            String[] values = parts[i].split(",");
//            int district = Integer.parseInt(values[0]);
//            String incumbent = values[1];
//            String incumbentRemained = values[2];
//            String party = values[3];
//            String electionResult = values[4];
//            String geographicVariation = values[5];
//            String populationVariation = values[6];
//
//            Incumbent incumbentObj = new Incumbent(district, incumbent, incumbentRemained, party, electionResult, geographicVariation, populationVariation);
//            incumbents[i] = incumbentObj;
//        }
//
//        return incumbents;
//    }
//}
//
