package com.example.sdp3.Service;

import com.example.sdp3.Pojo.Host;
import com.example.sdp3.Pojo.need;
import com.example.sdp3.Repository.HostRepository;
import com.example.sdp3.Repository.needrepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class needService {

    @Autowired
    needrepo needpo;

    public String addhostf(need nd)
    {
        needpo.save(nd);
        return "Record Added Successfully";
    }

    public List<need> getallnds()
    {
        return (List<need>) needpo.findAll();
    }

}
