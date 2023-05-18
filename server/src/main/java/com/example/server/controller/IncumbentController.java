//import java.util.List;
//import java.util.Optional;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.web.bind.annotation.*;
//
//
//@RestController
//@RequestMapping("/incumbents")
//public class IncumbentController {
//
//    @Autowired
//    private IncumbentRepository repository;
//
//    @GetMapping("/")
//    public List<Incumbent> getAllIncumbents() {
//        return repository.findAll();
//    }
//
//    @GetMapping("/{state}/{year}")
//    public List<Incumbent> getIncumbentsByStateAndYear(@PathVariable String state, @PathVariable int year) {
//        return repository.findByStateAndYear(state, year);
//    }
//
//    @GetMapping("/{incumbent}")
//    public List<Incumbent> getIncumbentsByIncumbent(@PathVariable int incumbent) {
//        return repository.findByIncumbent(incumbent);
//    }
//
//    @PostMapping("/")
//    public Incumbent createIncumbent(@RequestBody Incumbent incumbent) {
//        return repository.save(incumbent);
//    }
//
//    @PutMapping("/")
//    public Incumbent updateIncumbent(@RequestBody Incumbent incumbent) {
//        Optional<Incumbent> existingIncumbent = repository.findById(incumbent.getId());
//
//        if (existingIncumbent.isPresent()) {
//            Incumbent updatedIncumbent = existingIncumbent.get();
//            updatedIncumbent.setState(incumbent.getState());
//            updatedIncumbent.setYear(incumbent.getYear());
//            updatedIncumbent.setIncumbent(incumbent.getIncumbent());
//            return repository.save(updatedIncumbent);
//        } else {
//            return null;
//        }
//    }
//
//    @DeleteMapping("/{id}")
//    public void deleteIncumbent(@PathVariable String id) {
//        repository.deleteById(id);
//    }
//}
