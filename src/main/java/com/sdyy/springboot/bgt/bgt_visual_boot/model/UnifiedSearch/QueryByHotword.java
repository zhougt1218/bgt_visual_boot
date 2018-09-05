package com.sdyy.springboot.bgt.bgt_visual_boot.model.UnifiedSearch;

public class QueryByHotword {
	
	private String word;
	private Integer weight;
	private String createdate;
	public String getWord() {
		return word;
	}
	public void setWord(String word) {
		this.word = word;
	}
	public Integer getWeight() {
		return weight;
	}
	public void setWeight(Integer weight) {
		this.weight = weight;
	}
	public String getCreatedate() {
		return createdate;
	}
	public void setCreatedate(String createdate) {
		this.createdate = createdate;
	}
	@Override
	public String toString() {
		return "QueryByHotword [word=" + word + ", weight=" + weight + ", createdate=" + createdate + "]";
	}
	public QueryByHotword(String word, Integer weight, String createdate) {
		super();
		this.word = word;
		this.weight = weight;
		this.createdate = createdate;
	}
	public QueryByHotword() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	
}
