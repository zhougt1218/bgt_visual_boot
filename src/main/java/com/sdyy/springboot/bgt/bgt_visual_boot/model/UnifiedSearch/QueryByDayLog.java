package com.sdyy.springboot.bgt.bgt_visual_boot.model.UnifiedSearch;

public class QueryByDayLog {
	private String askdate;
	private Integer totalpvamount;
	private Integer pvamount;
	private Integer totalindex;
	private Integer creatindex;
	private Integer smartaskamount;
	public String getAskdate() {
		return askdate;
	}
	public void setAskdate(String askdate) {
		this.askdate = askdate;
	}
	public Integer getTotalpvamount() {
		return totalpvamount;
	}
	public void setTotalpvamount(Integer totalpvamount) {
		this.totalpvamount = totalpvamount;
	}
	public Integer getPvamount() {
		return pvamount;
	}
	public void setPvamount(Integer pvamount) {
		this.pvamount = pvamount;
	}
	public Integer getTotalindex() {
		return totalindex;
	}
	public void setTotalindex(Integer totalindex) {
		this.totalindex = totalindex;
	}
	public Integer getCreatindex() {
		return creatindex;
	}
	public void setCreatindex(Integer creatindex) {
		this.creatindex = creatindex;
	}
	public Integer getSmartaskamount() {
		return smartaskamount;
	}
	public void setSmartaskamount(Integer smartaskamount) {
		this.smartaskamount = smartaskamount;
	}
	@Override
	public String toString() {
		return "QueryByDayLog [askdate=" + askdate + ", totalpvamount=" + totalpvamount + ", pvamount=" + pvamount
				+ ", totalindex=" + totalindex + ", creatindex=" + creatindex + ", smartaskamount=" + smartaskamount
				+ "]";
	}
	public QueryByDayLog(String askdate, Integer totalpvamount, Integer pvamount, Integer totalindex,
			Integer creatindex, Integer smartaskamount) {
		super();
		this.askdate = askdate;
		this.totalpvamount = totalpvamount;
		this.pvamount = pvamount;
		this.totalindex = totalindex;
		this.creatindex = creatindex;
		this.smartaskamount = smartaskamount;
	}
	public QueryByDayLog() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	
}
