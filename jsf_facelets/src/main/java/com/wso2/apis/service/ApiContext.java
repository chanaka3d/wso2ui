package com.wso2.apis.service;

import com.wso2.common.exception.RestAPIException;
import com.wso2.apis.model.Api;

import java.io.File;
import java.util.HashMap;
import java.util.Map;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;

public class ApiContext {
    private static ApiContext apiContext = new ApiContext(); // singleton
    private Map<String,Api> allApis = new HashMap<String,Api>();

    private ApiContext(){
        BufferedReader br = null;
        try {
            String filePath = new File("").getAbsolutePath();
            filePath+="/repository/deployment/server/webapps/wso2/resources/apis.txt";

            String sCurrentLine;


            br = new BufferedReader(new FileReader(filePath));
            while ((sCurrentLine = br.readLine()) != null) {
                Api api = new Api();
                String apiId = sCurrentLine.replaceAll("\\s+","");
                api.setApiCreator("Chanaka Jayasena");
                api.setApiId(apiId);
                api.setApiName(sCurrentLine);
                allApis.put(apiId,api);
            }

        } catch (IOException e) {
            e.printStackTrace();
        } finally {
            try {
                if (br != null)br.close();
            } catch (IOException ex) {
                ex.printStackTrace();
            }
        }
    }

    public static ApiContext getInstance(){
        return apiContext;
    }


    public Api[] getAllApis() throws RestAPIException{
        return allApis.values().toArray(new Api[0]);
    }



}
