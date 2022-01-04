package com.example.sdp3.Repository;

import com.example.sdp3.Pojo.Host;
import com.example.sdp3.Pojo.need;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface needrepo extends JpaRepository<need,Long> {
}

