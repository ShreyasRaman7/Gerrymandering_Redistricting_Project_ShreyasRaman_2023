package com.example.server.model;

import java.util.List;
import java.util.Optional;

import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.annotation.Id;
import com.fasterxml.jackson.annotation.JsonFormat;


@Document(collection="GUI13_District_Summary")
public class DistrictDetail{
    @Id
    private String id;
    private String state;
    private String districtPlan;
    private int numOfDistrict;
    @JsonFormat(shape = JsonFormat.Shape.ARRAY)
    private List<Detail> details;

    public DistrictDetail(String id, String state, String districtPlan, int numOfDistrict, List<Detail> details) {
        this.id = id;
        this.state = state;
        this.numOfDistrict=numOfDistrict;
        this.details = details;
        this.districtPlan = districtPlan;
    }

    public String getId() {
        return id;
    }

    public String getState() {
        return state;
    }

    public List<Detail> getDetails() {
        return details;
    }

    public void setId(String id) {
        this.id = id;
    }

    public void setState(String state) {
        this.state = state;
    }


    public void setDetails(List<Detail> details) {
        this.details = details;
    }

    public int getNumOfDistrict() {
        return numOfDistrict;
    }

    public void setNumOfDistrict(int numOfDistrict) {
        this.numOfDistrict = numOfDistrict;
    }

    public String getDistrictPlan() {
        return districtPlan;
    }

    public void setDistrictPlan(String districtPlan) {
        this.districtPlan = districtPlan;
    }
}
