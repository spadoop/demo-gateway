package com.ocs.ms;

import org.apache.http.client.HttpClient;
import org.apache.http.impl.client.HttpClientBuilder;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.zuul.EnableZuulProxy;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@EnableZuulProxy
@RestController
public class ApiGatewayApplication {

	public static void main(String[] args) {
//		final HttpClient ht = HttpClientBuilder.create().disableCookieManagement().build();
		SpringApplication.run(ApiGatewayApplication.class, args);
	}
	
//	@Bean
//	public AccessFilter accessFilter(){
//		return new AccessFilter();
//	}
}
