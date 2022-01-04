package com.example.sdp3.Controller;
import com.example.sdp3.Pojo.Comments;
import com.example.sdp3.Service.CommentService;
import com.example.sdp3.response.HostResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@CrossOrigin(value = "*" , maxAge = 3600)
@RestController
public class CommentController {
    @Autowired
    CommentService commentService;
    @PostMapping("/addcomment")
    public HostResponse addcomment(@RequestBody Comments comments)
    {
        commentService.addcommentrecord(comments);
        return new HostResponse("Added",true,null);
    }
    @DeleteMapping("/deletecomments/{id}")
    public void deletecomments(@PathVariable Long id)
    {
        commentService.deleteComment(id);
    }

    @PatchMapping("/updatecomments")
    public void updatecomments(@RequestBody Comments comments)
    {
        commentService.updateCommentSection(comments);
    }
    @GetMapping("/getallcomments")
    public List<Comments> getallcomments()
    {
        List<Comments> data  = (List<Comments>) commentService.getAllComments();
        return data;
    }

  }
