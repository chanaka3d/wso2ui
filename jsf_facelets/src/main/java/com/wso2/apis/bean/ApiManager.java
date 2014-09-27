package com.wso2.apis.bean;

import com.wso2.apis.model.Api;
import com.wso2.apis.service.ApiContext;
import com.wso2.common.exception.RestAPIException;

import javax.faces.bean.ManagedBean;
import javax.faces.bean.ViewScoped;
import java.util.List;

import com.wso2.apis.service.ApiContext;

@ManagedBean
@ViewScoped
public class ApiManager {
    private Api[]  allApis;

    public Api[] getAllApis() throws RestAPIException{

        return ApiContext.getInstance().getAllApis();
    }
}
