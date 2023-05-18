//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.core.convert.converter.Converter;
//import org.springframework.format.support.ConversionServiceFactoryBean;
//
//import java.util.HashSet;
//import java.util.Set;
//
//import com.example.server.converter.StringToIncumbentArrayConverter;
//
//@Configuration
//public class ConversionConfig {
//
//    @Bean
//    public ConversionServiceFactoryBean conversionService() {
//        ConversionServiceFactoryBean conversionServiceFactoryBean = new ConversionServiceFactoryBean();
//        Set<Converter<?, ?>> converters = new HashSet<>();
//        converters.add(new StringToIncumbentArrayConverter());
//        conversionServiceFactoryBean.setConverters(converters);
//        return conversionServiceFactoryBean;
//    }
//}
