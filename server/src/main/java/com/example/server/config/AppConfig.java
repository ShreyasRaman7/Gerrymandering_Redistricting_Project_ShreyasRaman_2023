//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.data.mongodb.core.convert.MongoCustomConversions;
//
//import java.util.Arrays;
//
//@Configuration
//public class AppConfig {
//
//    @Bean
//    public MongoCustomConversions customConversions(IncumbentArrayConverter incumbentArrayConverter) {
//        return new MongoCustomConversions(Arrays.asList(incumbentArrayConverter));
//    }
//
//    @Bean
//    public IncumbentArrayConverter incumbentArrayConverter() {
//        return new IncumbentArrayConverter();
//    }
//
//}
