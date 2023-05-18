//package com.example.server.model;
//
//import org.springframework.data.mongodb.core.mapping.Document;
//import org.springframework.data.annotation.Id;
//
//
//@Document(collection="Book")
//public class Book{
//    @Id
//    private String id;
//    private String bookName;
//    private String authorName;
//
//    public Book(String id, String bookName, String authorName) {
//        this.id = id;
//        this.bookName = bookName;
//        this.authorName = authorName;
//    }
//
//    public String getId() {
//        return id;
//    }
//
//    public String getBookName() {
//        return bookName;
//    }
//
//    public String getAuthorName() {
//        return authorName;
//    }
//
//    public void setId(String id) {
//        this.id = id;
//    }
//
//    public void setBookName(String bookName) {
//        this.bookName = bookName;
//    }
//
//    public void setAuthorName(String authorName) {
//        this.authorName = authorName;
//    }
//}

package com.example.server.model;

import java.util.List;
import java.util.Optional;

import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.annotation.Id;
import com.fasterxml.jackson.annotation.JsonFormat;


@Document(collection="GUI6_Incumbent_Summary")
public class IncumbentSummary{
    @Id
    private String id;
    private String state;
    @JsonFormat(shape = JsonFormat.Shape.ARRAY)
    private List<Incumbent> incumbents;

    public IncumbentSummary(String id, String state, List<Incumbent> incumbents) {
        this.id = id;
        this.state = state;
        this.incumbents = incumbents;
    }

    public String getId() {
        return id;
    }

    public String getState() {
        return state;
    }

    public List<Incumbent> getIncumbents() {
        return incumbents;
    }

    public void setId(String id) {
        this.id = id;
    }

    public void setState(String state) {
        this.state = state;
    }


    public void setIncumbents(List<Incumbent> incumbents) {
        this.incumbents = incumbents;
    }

//    public static class Incumbent {
//        private int district;
//        private String incumbent;
//        private String incumbentRemained;
//        private String party;
//        private String electionResult;
//        private String geographicVariation;
//        private String populationVariation;
//
//        public Incumbent(int district, String incumbent, String incumbentRemained, String party, String electionResult, String geographicVariation, String populationVariation) {
//            this.district = district;
//            this.incumbent = incumbent;
//            this.incumbentRemained = incumbentRemained;
//            this.party = party;
//            this.electionResult = electionResult;
//            this.geographicVariation = geographicVariation;
//            this.populationVariation = populationVariation;
//        }
//
//        public int getDistrict() {
//            return district;
//        }
//
//        public String getIncumbent() {
//            return incumbent;
//        }
//
//        public String isIncumbentRemained() {
//            return incumbentRemained;
//        }
//
//        public String getParty() {
//            return party;
//        }
//
//        public String getElectionResult() {
//            return electionResult;
//        }
//
//        public String getGeographicVariation() {
//            return geographicVariation;
//        }
//
//        public String getPopulationVariation() {
//            return populationVariation;
//        }
//
//        public void setDistrict(int district) {
//            this.district = district;
//        }
//
//        public void setIncumbent(String incumbent) {
//            this.incumbent = incumbent;
//        }
//
//        public void setIncumbentRemained(String incumbentRemained) {
//            this.incumbentRemained = incumbentRemained;
//        }
//
//        public void setParty(String party) {
//            this.party = party;
//        }
//
//        public void setElectionResult(String electionResult) {
//            this.electionResult = electionResult;
//        }
//
//        public void setGeographicVariation(String geographicVariation) {
//            this.geographicVariation = geographicVariation;
//        }
//
//        public void setPopulationVariation(String populationVariation) {
//            this.populationVariation = populationVariation;
//        }
//    }
}
