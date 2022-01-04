package com.example.sdp3.Pojo;

import javax.persistence.*;

@Entity
@Table(name = "needtable")
public class need {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(columnDefinition = "serial")
    private Long id;

    @Column(name="hostId")
    private Long hostid;

    public Long getHostid() {
        return hostid;
    }

    public void setHostid(Long hostid) {
        this.hostid = hostid;
    }

}
