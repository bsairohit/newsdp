package com.example.sdp3.Pojo;

import org.springframework.core.SpringVersion;
import org.springframework.lang.Nullable;

import javax.persistence.*;

@Entity
@Table(name = "Host_Table")
public class Host {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(columnDefinition = "serial")
    private Long id;
    @Column(name= "Host_number")
    private String phonenumber;



    @Column(name = "Host_name")
    private String name;

    @Column(name = "Host_location")
    private String location;

    public String getPhotos() {
        return photos;
    }

    public void setPhotos(String photos) {
        this.photos = photos;
    }

    @Column(name="Host_photos")
    private String photos;


    @Column(name="Host_password")
    private String password;




    @Column(name="Host_email")
    private String email;

    public String getAboutme() {
        return aboutme;
    }

    public void setAboutme(String aboutme) {
        this.aboutme = aboutme;
    }

    @Column(name="About_me")
    private String aboutme;


    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
    public String getPhonenumber() {
        return phonenumber;
    }

    public void setPhonenumber(String phonenumber) {
        this.phonenumber = phonenumber;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }


    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
    public Long getId() {
        return id;
    }
        
    public void setId(Long id) {
        this.id = id;
    }

}
