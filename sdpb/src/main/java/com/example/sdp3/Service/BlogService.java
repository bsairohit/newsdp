package com.example.sdp3.Service;

import com.example.sdp3.Pojo.BlogSection;
import com.example.sdp3.Pojo.Host;
import com.example.sdp3.Repository.BlogSectionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;

@Service
public class BlogService {

    @Autowired
    BlogSectionRepository blogSectionRepository;

    public String addBlogRecord(BlogSection blogSection)
    {
        blogSectionRepository.save(blogSection);
        return "Record Added Successfully";
    }

    public List<BlogSection> getAllBlogs()
    {
        return (List<BlogSection>) blogSectionRepository.findAll(Sort.by("id").descending());
    }

    public BlogSection findBlogById(Long id)
    {
        return blogSectionRepository.findById(id).get();
    }



    public String updateBlogSection(BlogSection blogSection)
    {
        blogSectionRepository.save(blogSection);
        return "Record Updated Successfully";
    }

    public String deleteBlog(Long id)
    {
        blogSectionRepository.deleteById(id);
        return "Record Deleted Successfully";
    }

}