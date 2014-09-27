package com.wso2.apis.service;

import com.wso2.common.exception.RestAPIException;
import com.wso2.apis.model.Api;

import javax.servlet.http.HttpServletRequest;
import javax.ws.rs.*;
import javax.ws.rs.core.Context;

@Path("/admin/")
public class ApiService {
    @Context
    HttpServletRequest httpServletRequest;


    @GET
    @Path("/api/list")
    @Produces("application/json")
    @Consumes("application/json")
    public Api[] getAllApis() throws RestAPIException {
          return ApiContext.getInstance().getAllApis();
    }

}
