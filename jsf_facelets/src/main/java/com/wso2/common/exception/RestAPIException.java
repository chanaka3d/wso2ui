package com.wso2.common.exception;

import javax.ws.rs.core.Response;

public class RestAPIException extends Exception {

    private static final long serialVersionUID = 1L;

    private String message;
    private Response.Status httpStatusCode;

    public RestAPIException() {
        super();
    }

    public RestAPIException(String message, Throwable cause) {
        super(message, cause);
        this.message = message;
    }

    public RestAPIException(Response.Status httpStatusCode,String message, Throwable cause) {
        super(message, cause);
        this.message = message;
        this.httpStatusCode = httpStatusCode;
    }

    public RestAPIException(String message) {
        super(message);
        this.message = message;
    }

    public RestAPIException(Response.Status httpStatusCode, String message) {
        super(message);
        this.message = message;
        this.httpStatusCode = httpStatusCode;
    }

    public RestAPIException(Throwable cause) {
        super(cause);
    }

    public String getMessage() {
        return message;
    }

    public Response.Status getHTTPStatusCode() {
        return httpStatusCode;
    }


}
