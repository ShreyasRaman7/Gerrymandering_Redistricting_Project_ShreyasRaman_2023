//import com.example.server.model.Book;
//import com.fasterxml.jackson.databind.ObjectMapper;
//import org.springframework.core.convert.converter.Converter;
//
//import java.io.IOException;
//
//public class IncumbentArrayConverter implements Converter<String, Book.Incumbent[]> {
//
//    private final ObjectMapper objectMapper = new ObjectMapper();
//
//    @Override
//    public Book.Incumbent[] convert(String source) {
//        try {
//            return objectMapper.readValue(source, Book.Incumbent[].class);
//        } catch (IOException e) {
//            throw new RuntimeException("Failed to convert incumbent array string to Incumbent[]", e);
//        }
//    }
//}
