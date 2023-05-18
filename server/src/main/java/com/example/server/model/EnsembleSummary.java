package com.example.server.model;

import java.util.List;
import java.util.Optional;

import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.annotation.Id;
import com.fasterxml.jackson.annotation.JsonFormat;


@Document(collection="GUI8_Ensemble_Summary")
public class EnsembleSummary {
    @Id
    private String id;
    private String districtPlan;
    @JsonFormat(shape = JsonFormat.Shape.ARRAY)
    private List<Ensemble> ensembles;


    public EnsembleSummary(String id, String districtPlan, List<Ensemble> ensembles) {
        this.id = id;
        this.districtPlan = districtPlan;
        this.ensembles = ensembles;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getDistrictPlan() {
        return districtPlan;
    }

    public void setDistrictPlan(String districtPlan) {
        this.districtPlan = districtPlan;
    }

    public List<Ensemble> getEnsembles() {
        return ensembles;
    }

    public void setEnsembles(List<Ensemble> ensembles) {
        this.ensembles = ensembles;
    }
}