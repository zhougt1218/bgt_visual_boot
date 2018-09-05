package com.sdyy.springboot.bgt.bgt_visual_boot.model.Uias;

import java.io.Serializable;

/**
 * 大汉——统一身份认证
 * stats_corporation
 * 统计法人
 * @author PPF
 *
 */
public class QueryByCor implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	private String stats_date;
	private Integer isAuthCorp;
	private Integer unAuthCorp;
	private Integer massRunCorp;
	private Integer institution;
	private Integer administrative;
	private Integer assn;
	private Integer nonProfitOrg;
	private Integer otherCorp;
	public String getStats_date() {
		return stats_date;
	}
	public void setStats_date(String stats_date) {
		this.stats_date = stats_date;
	}
	public Integer getIsAuthCorp() {
		return isAuthCorp;
	}
	public void setIsAuthCorp(Integer isAuthCorp) {
		this.isAuthCorp = isAuthCorp;
	}
	public Integer getUnAuthCorp() {
		return unAuthCorp;
	}
	public void setUnAuthCorp(Integer unAuthCorp) {
		this.unAuthCorp = unAuthCorp;
	}
	public Integer getMassRunCorp() {
		return massRunCorp;
	}
	public void setMassRunCorp(Integer massRunCorp) {
		this.massRunCorp = massRunCorp;
	}
	public Integer getInstitution() {
		return institution;
	}
	public void setInstitution(Integer institution) {
		this.institution = institution;
	}
	public Integer getAdministrative() {
		return administrative;
	}
	public void setAdministrative(Integer administrative) {
		this.administrative = administrative;
	}
	public Integer getAssn() {
		return assn;
	}
	public void setAssn(Integer assn) {
		this.assn = assn;
	}
	public Integer getNonProfitOrg() {
		return nonProfitOrg;
	}
	public void setNonProfitOrg(Integer nonProfitOrg) {
		this.nonProfitOrg = nonProfitOrg;
	}
	public Integer getOtherCorp() {
		return otherCorp;
	}
	public void setOtherCorp(Integer otherCorp) {
		this.otherCorp = otherCorp;
	}
	public QueryByCor(String stats_date, Integer isAuthCorp, Integer unAuthCorp, Integer massRunCorp,
			Integer institution, Integer administrative, Integer assn, Integer nonProfitOrg, Integer otherCorp) {
		super();
		this.stats_date = stats_date;
		this.isAuthCorp = isAuthCorp;
		this.unAuthCorp = unAuthCorp;
		this.massRunCorp = massRunCorp;
		this.institution = institution;
		this.administrative = administrative;
		this.assn = assn;
		this.nonProfitOrg = nonProfitOrg;
		this.otherCorp = otherCorp;
	}
	@Override
	public String toString() {
		return "QueryByCor [stats_date=" + stats_date + ", isAuthCorp=" + isAuthCorp + ", unAuthCorp=" + unAuthCorp
				+ ", massRunCorp=" + massRunCorp + ", institution=" + institution + ", administrative=" + administrative
				+ ", assn=" + assn + ", nonProfitOrg=" + nonProfitOrg + ", otherCorp=" + otherCorp + "]";
	}
	
	
	
}
