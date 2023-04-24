package com.example.demo;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseCookie;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CookieValue;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class TestController {
	
	@RequestMapping(value = "/testJsonMap", method = RequestMethod.POST)
	public @ResponseBody Map<String, Object> testJsonMap(@RequestBody Map<String, Object> param, @RequestHeader Map<String, String> headers, HttpServletRequest request, HttpServletResponse response) { 

		System.out.println("Param Data : " + param);
		headers.forEach((key, value) -> {
			System.out.println(String.format("Header '%s' = %s", key, value));
	    });
		
		Map<String, Object> result = new HashMap<String, Object>();

		List<Object> userList = new ArrayList<Object>();

		Map<String, Object> header = new HashMap<String, Object>();
		header.put("resultCode", "001");
		header.put("resultMessage", "성공했습니다.");

		Map<String, Object> user1 = new HashMap<String, Object>();
		user1.put("id", "001");
		user1.put("name", "홍길동");
		user1.put("tel", "010-4232-7431");
		user1.put("region", "서울");
		userList.add(user1);

		Map<String, Object> user2 = new HashMap<String, Object>();
		user2.put("id", "002");
		user2.put("name", "허균");
		user2.put("tel", "010-4421-5421");
		user2.put("region", "수원");
		userList.add(user2);

		result.put("header", header);
		result.put("data", userList);

		return result;
	}

	@RequestMapping(value = "/testJsonMap", method = RequestMethod.GET)
	public @ResponseBody Map<String, Object> testJsonMap(HttpServletResponse response) {
		
		//setResponseHeader(response);
		Map<String, Object> result = new HashMap<String, Object>();

		List<Object> userList = new ArrayList<Object>();

		Map<String, Object> header = new HashMap<String, Object>();
		header.put("resultCode", "001");
		header.put("resultMessage", "성공했습니다.");

		Map<String, Object> user1 = new HashMap<String, Object>();
		user1.put("id", "001");
		user1.put("name", "홍길동");
		user1.put("tel", "010-4232-7431");
		user1.put("region", "서울");
		userList.add(user1);

		Map<String, Object> user2 = new HashMap<String, Object>();
		user2.put("id", "002");
		user2.put("name", "허균");
		user2.put("tel", "010-4421-5421");
		user2.put("region", "수원");
		userList.add(user2);

		result.put("header", header);
		result.put("data", userList);

		return result;
	}
}