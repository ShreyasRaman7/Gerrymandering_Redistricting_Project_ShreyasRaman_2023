//import org.springframework.data.annotation.Id;
//import org.springframework.data.mongodb.core.mapping.Document;
//import org.springframework.data.mongodb.core.mapping.Field;
//
//
//@Document(collection = "GUI6_Incumbent_Summary")
//public class Incumbent {
//
//    @Id
//    private String id;
//
//    @Field("state")
//    private String state;
//
//    @Field("year")
//    private int year;
//
//    @Field("incumbent")
//    private int incumbent;
//
//    public String getId() {
//        return id;
//    }
//
//    public void setId(String id) {
//        this.id = id;
//    }
//
//    public String getState() {
//        return state;
//    }
//
//    public void setState(String state) {
//        this.state = state;
//    }
//
//    public int getYear() {
//        return year;
//    }
//
//    public void setYear(int year) {
//        this.year = year;
//    }
//
//    public int getIncumbent() {
//        return incumbent;
//    }
//
//    public void setIncumbent(int incumbent) {
//        this.incumbent = incumbent;
//    }
//}

package com.example.server.model;

import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.annotation.Id;
import com.fasterxml.jackson.annotation.JsonFormat;

public class Incumbent {
    private int district;
    private String incumbent;
    private boolean incumbentRemained;
    private String party;
    private String electionResult;
    private String geographicVariation;
    private String populationVariation;

    public Incumbent(int district, String incumbent, boolean incumbentRemained, String party, String electionResult, String geographicVariation, String populationVariation) {
        this.district = district;
        this.incumbent = incumbent;
        this.incumbentRemained = incumbentRemained;
        this.party = party;
        this.electionResult = electionResult;
        this.geographicVariation = geographicVariation;
        this.populationVariation = populationVariation;
    }

    public int getDistrict() {
        return district;
    }

    public String getIncumbent() {
        return incumbent;
    }

    public boolean isIncumbentRemained() {
        return incumbentRemained;
    }

    public String getParty() {
        return party;
    }

    public String getElectionResult() {
        return electionResult;
    }

    public String getGeographicVariation() {
        return geographicVariation;
    }

    public String getPopulationVariation() {
        return populationVariation;
    }

    public void setDistrict(int district) {
        this.district = district;
    }

    public void setIncumbent(String incumbent) {
        this.incumbent = incumbent;
    }

    public void setIncumbentRemained(boolean incumbentRemained) {
        this.incumbentRemained = incumbentRemained;
    }

    public void setParty(String party) {
        this.party = party;
    }

    public void setElectionResult(String electionResult) {
        this.electionResult = electionResult;
    }

    public void setGeographicVariation(String geographicVariation) {
        this.geographicVariation = geographicVariation;
    }

    public void setPopulationVariation(String populationVariation) {
        this.populationVariation = populationVariation;
    }
}