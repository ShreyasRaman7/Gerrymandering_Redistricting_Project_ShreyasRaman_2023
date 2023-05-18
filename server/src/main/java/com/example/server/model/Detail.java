package com.example.server.model;

import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.annotation.Id;
import com.fasterxml.jackson.annotation.JsonFormat;

public class Detail {
    private String key;
    private String state;
    private int district;
    private String incumbent;
    private String party;
    private String IncumbentDistrictVariation;


    public Detail(String key, String state, int district, String incumbent, String party, String IncumbentDistrictVariation) {
        this.key = key;
        this.state = state;
        this.district = district;
        this.incumbent = incumbent;
        this.party = party;
        this.IncumbentDistrictVariation = IncumbentDistrictVariation;

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

    public void setDistrict(int district) {
        this.district = district;
    }

    public void setIncumbent(String incumbent) {
        this.incumbent = incumbent;
    }

    public void setParty(String party) {
        this.party = party;
    }

    public String getKey() {
        return key;
    }

    public void setKey(String key) {
        this.key = key;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    public String getIncumbentDistrictVariation() {
        return IncumbentDistrictVariation;
    }

    public void setIncumbentDistrictVariation(String incumbentDistrictVariation) {
        IncumbentDistrictVariation = incumbentDistrictVariation;
    }
}