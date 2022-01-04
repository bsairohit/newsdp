package com.example.sdp3.Controller;

import com.example.sdp3.Pojo.BlogSection;
import com.example.sdp3.Pojo.Host;
import com.example.sdp3.Service.BlogService;
import com.example.sdp3.Service.HostService;
import com.example.sdp3.response.HostResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(value = "*" , maxAge = 3600)
@RestController
public class blogController {
    @Autowired
    BlogService blogService;
    @PostMapping("/addblog")
    public String addBlog(@RequestBody BlogSection blogSection)
    {
        blogService.addBlogRecord(blogSection);
        return ("record added Succesfully");
    }
    @DeleteMapping("/deleteblog/{id}")
    public void deleteBlog(@PathVariable Long id)
    {
        blogService.deleteBlog(id);
    }

    @PatchMapping("/updateblog")
    public void updateBlog(@RequestBody BlogSection blogSection)
    {
        blogService.updateBlogSection(blogSection);
    }
    @GetMapping("/getallblogs")
    public List<BlogSection> getallHost()
    {
        List<BlogSection> data  = (List<BlogSection>) blogService.getAllBlogs();
        return data;
    }

    @GetMapping("/edblblog/{id}")
    public BlogSection getBlogById(@PathVariable Long id)
    {
        return blogService.findBlogById(id);
    }
}
