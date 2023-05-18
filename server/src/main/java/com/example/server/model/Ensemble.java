package com.example.server.model;

import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.annotation.Id;
import com.fasterxml.jackson.annotation.JsonFormat;

public class Ensemble {
    private int district;
    private String incumbent;
    private String party;
    private String geographicVariation;
    private String populationVariation;

    public Ensemble(int district, String incumbent, String party, String geographicVariation, String populationVariation) {
        this.district = district;
        this.incumbent = incumbent;
        this.party = party;
        this.geographicVariation = geographicVariation;
        this.populationVariation = populationVariation;
    }

    public int getDistrict() {
        return district;
    }

    public String getIncumbent() {
        return incumbent;
    }


    public String getParty() {
        return party;
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


    public void setParty(String party) {
        this.party = party;
    }


    public void setGeographicVariation(String geographicVariation) {
        this.geographicVariation = geographicVariation;
    }

    public void setPopulationVariation(String populationVariation) {
        this.populationVariation = populationVariation;
    }
}