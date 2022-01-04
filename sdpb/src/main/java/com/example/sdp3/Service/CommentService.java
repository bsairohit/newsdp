package com.example.sdp3.Service;
import com.example.sdp3.Pojo.Comments;
import com.example.sdp3.Repository.CommentRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CommentService {
    @Autowired
    CommentRepo commentRepo;

    public String addcommentrecord(Comments comments)
    {
        commentRepo.save(comments);
        return "Record Added Successfully";
    }

    public List<Comments> getAllComments()
    {
        return (List<Comments>) commentRepo.findAll(Sort.by("id"));
    }

    public Comments findCommetsById(Long id)
    {
        return commentRepo.findById(id).get();
    }

    public String updateCommentSection(Comments comments)
    {
        commentRepo.save(comments);
        return "Record Updated Successfully";
    }

    public String deleteComment(Long id)
    {
        commentRepo.deleteById(id);
        return "Record Deleted Successfully";
    }
}
