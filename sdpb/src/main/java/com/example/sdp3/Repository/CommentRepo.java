package com.example.sdp3.Repository;


import com.example.sdp3.Pojo.BlogSection;
import com.example.sdp3.Pojo.Comments;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CommentRepo extends JpaRepository<Comments,Long> {
}