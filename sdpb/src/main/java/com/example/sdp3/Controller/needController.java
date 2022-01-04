package com.example.sdp3.Controller;

import com.example.sdp3.Pojo.Host;
import com.example.sdp3.Pojo.need;
import com.example.sdp3.Service.HostService;
import com.example.sdp3.Service.needService;
import com.example.sdp3.response.HostResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(value = "*" , maxAge = 3600)
@RestController
public class needController {
    @Autowired
    needService needservice;
    @PostMapping("/addneed")
    public String addHostneed(@RequestBody need nd)
    {
        needservice.addhostf(nd);
        return "Succesfull";
    }
    @GetMapping("/getallneed")
    public List<need> getallHostneed()
    {
        System.out.println("HO");
        List<need> data  = (List<need>) needservice.getallnds();
        System.out.println("fasdasdad");
        return  data;
    }
}
