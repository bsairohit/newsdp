package com.example.sdp3.Repository;


import com.example.sdp3.Pojo.BlogSection;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BlogSectionRepository extends JpaRepository<BlogSection,Long> {
}
