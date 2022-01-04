package com.example.sdp3.Pojo;

import org.springframework.core.SpringVersion;
import org.springframework.lang.Nullable;

import javax.persistence.*;

@Entity
@Table(name = "blogSection")
public class BlogSection {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(columnDefinition = "serial")
    private Long id;

    @Column(name = "blogdate")
    private String blogdate;

    @Column(name = "host_id")
    private Long host_id;


    @Column(name= "Location")
    private String location;

    @Column(name="Discription")
    private String discription;

    @Column(name= "ProjectTitle")
    private String title;

    @Column(name = "memberallowed")
    private String members;

    @Column
    private String image;

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getMembers() {
        return members;
    }

    public void setMembers(String members) {
        this.members = members;
    }

    public String getRent() {
        return rent;
    }

    public void setRent(String rent) {
        this.rent = rent;
    }

    public String getCompletedisciption() {
        return completedisciption;
    }

    public void setCompletedisciption(String completedisciption) {
        this.completedisciption = completedisciption;
    }

    @Column(name="Rent")
    private String rent;

    @Column(name="CompleteDiscription")
    private String completedisciption;
    public Long getId() {
        return id;
    }

    public String getBlogdate() {
        return blogdate;
    }

    public void setBlogdate(String blogdate) {
        this.blogdate = blogdate;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getHost_id() {
        return host_id;
    }

    public void setHost_id(Long host_id) {
        this.host_id = host_id;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public String getDiscription() {
        return discription;
    }

    public void setDiscription(String discription) {
        this.discription = discription;
    }


}