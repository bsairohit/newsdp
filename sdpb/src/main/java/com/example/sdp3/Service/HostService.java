package com.example.sdp3.Service;

import com.example.sdp3.Repository.HostRepository;
import com.example.sdp3.Pojo.Host;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;
import java.util.Optional;

@Service
public class HostService {

    @Autowired
    HostRepository hostRepository;

    public String addHostRecord(Host host)
    {
        hostRepository.save(host);
        return "Record Added Successfully";
    }

    public List<Host> getAllHost()
    {
        return (List<Host>) hostRepository.findAll();
    }

    public String updateHost(Host host)
    {
        hostRepository.save(host);
        return "Record Updated Successfully";
    }

    public String deleteHost(long id)
    {
        hostRepository.deleteById(id);
        return "Record Deleted Successfully";
    }

    public Optional<Host> getHostWithId(Long id){
        return hostRepository.findById(id);
    }
}
