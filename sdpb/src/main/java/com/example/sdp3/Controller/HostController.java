package com.example.sdp3.Controller;


import com.example.sdp3.Service.HostService;
import com.example.sdp3.Pojo.Host;
import com.example.sdp3.response.HostResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

import javax.swing.text.html.Option;
import java.io.IOException;
import java.util.List;
import java.util.Optional;

@CrossOrigin(value = "*" , maxAge = 3600)
@RestController
public class HostController {
    @Autowired
    HostService hostService;

    @PostMapping("/add")
    public HostResponse addHost(@RequestBody Host host)
    {
        hostService.addHostRecord(host);
        return new HostResponse("User Registered Successfully" ,true,null);
    }
    @DeleteMapping("/delete/{id}")
    public void deleteHost(@PathVariable Long id)
    {
        hostService.deleteHost(id);
    }

    @PatchMapping("/update")
    public HostResponse updateHost(@RequestBody Host host)
    {
        hostService.updateHost(host);
        return new HostResponse("updated",true,null);
    }

    @GetMapping("/getallhost")
    public List<Host> getallHost()
    {
        System.out.println("HO");
        List<Host> data  = (List<Host>) hostService.getAllHost();
        System.out.println("fasdasdad");
        return  data;
    }
    @PostMapping("/addphotos")
    public String saveUser(@ModelAttribute(name = "host") Host host,@RequestParam("photos") MultipartFile multipartFile) throws IOException {

        String fileName = StringUtils.cleanPath(multipartFile.getOriginalFilename());
        System.out.println("fileName");
        host.setPhotos(fileName);

        hostService.addHostRecord(host);

        String uploadDir = "user-photos/" + host.getId();
        FileUploadUtil.saveFile(uploadDir, fileName, multipartFile);
        return "Added Succesfully";
    }

    @GetMapping("/gebyid/{id}")
    public Optional<Host> getHostById(@PathVariable Long id){
        return hostService.getHostWithId(id);
    }

}
