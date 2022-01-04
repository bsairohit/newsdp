package com.example.sdp3.Pojo;

import org.springframework.core.SpringVersion;
import org.springframework.lang.Nullable;

import javax.persistence.*;

@Entity
@Table(name = "commentsection")
public class Comments {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(columnDefinition = "serial")
    private Long id;

    @Column(name = "HostId")
    private Long hostid;
    @Column(name = "blogid")
    private Long blogid;
    @Column(name = "comment")
    private String comment;

    @Column(name="doc")
    private String doc;
    public Long getHostid() {
        return hostid;
    }

    public void setHostid(Long hostid) {
        this.hostid = hostid;
    }

    public Long getBlogid() {
        return blogid;
    }

    public void setBlogid(Long blogid) {
        this.blogid = blogid;
    }

    public String getComment() {
        return comment;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }


    public String getDoc() {
        return doc;
    }

    public void setDoc(String doc) {
        this.doc = doc;
    }


}