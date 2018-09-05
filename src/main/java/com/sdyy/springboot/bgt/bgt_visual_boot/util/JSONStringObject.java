package com.sdyy.springboot.bgt.bgt_visual_boot.util;

import org.json.JSONString;

public class JSONStringObject implements JSONString {
	private String jsonString = null;

	public JSONStringObject(String jsonString) {
		this.jsonString = jsonString;
	}

	public String toString() {
		return this.jsonString;
	}

	public String toJSONString() {
		return this.jsonString;
	}
}
