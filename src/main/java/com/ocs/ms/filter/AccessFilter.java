package com.ocs.ms.filter;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.netflix.zuul.ZuulFilter;
import com.netflix.zuul.context.RequestContext;
import com.ocs.ms.components.RoutesConfig;
import com.ocs.ms.json.ResultCode;
import com.ocs.ms.security.LoginManager;
import com.ocs.ms.security.UserSession;
import com.ocs.ms.utils.Assert;

@Component
public class AccessFilter extends ZuulFilter{

	@Autowired
	private RoutesConfig rc;
	
	@Override
	public Object run() {
		RequestContext ctx = RequestContext.getCurrentContext();
        HttpServletRequest request = ctx.getRequest();
        
        List<String> routeTable = rc.getRoutes();
        for(String rt : routeTable){
        	System.out.println("routeTable="+rt);
        	if(request.getRequestURL().indexOf(rt)>=0){
        		return null;
        	}
        }
        
        UserSession us = null;
		try {
			us = LoginManager.getUserSession(request);
		} catch (Exception e) {
			e.printStackTrace();
		}

        System.out.println(String.format("%s request to %s", request.getMethod(), request.getRequestURL().toString()));
        if(Assert.isBlank(us)){
        	ctx.setSendZuulResponse(false);
        	ctx.setResponseStatusCode(ResultCode.NOT_LOGIN.val());
        	return null;
        }
        return null;
	}

	@Override
	public boolean shouldFilter() {
		return true;
	}

	@Override
	public int filterOrder() {
		return 0;
	}

	@Override
	public String filterType() {
		return "pre";
	}

}
