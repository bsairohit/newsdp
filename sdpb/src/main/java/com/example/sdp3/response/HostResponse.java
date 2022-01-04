package com.example.sdp3.response;

import com.example.sdp3.Pojo.Host;

import java.util.List;

public class HostResponse {

    private String message;
    private boolean success;
    private List<Host> data;

    public HostResponse(String message, boolean success, List<Host> data) {
        this.message = message;
        this.success = success;
        this.data = data;
    }
    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public boolean isSuccess() {
        return success;
    }

    public void setSuccess(boolean success) {
        this.success = success;
    }

    public List<Host> getData() {
        return data;
    }

    public void setData(List<Host> data) {
        this.data = data;
    }


}
