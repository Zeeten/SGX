<%@page import="java.util.LinkedHashMap"%>
<%@page import="java.util.HashMap"%>
<%@page import="in.co.sunrays.wsx.controller.AttendanceSheetListCtl"%>
<%@page import="in.co.sunrays.wsx.model.AttendanceSheetModel"%>
<%@page import="in.co.sunrays.util.DataUtility"%>
<%@page import="in.co.sunrays.wsx.model.AppRole"%>
<%@page import="in.co.sunrays.util.AccessUtility"%>
<%@page import="in.co.sunrays.wsx.controller.ORSView"%>
<%@page import="in.co.sunrays.common.controller.BaseCtl"%>
<%@page import="java.io.File"%>
<%@page import="java.util.ResourceBundle"%>
<%@page import="in.co.sunrays.wsx.model.StudentAttendanceModel"%>
<%@page import="in.co.sunrays.wsx.controller.StudentAttendanceListCtl"%>
<%@page import="in.co.sunrays.wsx.controller.StudentCtl"%>
<%@page import="in.co.sunrays.common.controller.UserListCtl"%>
<%@page import="in.co.sunrays.util.HTMLUtility"%>
<%@page import="in.co.sunrays.util.ServletUtility"%>
<%@page import="java.util.List"%>
<%@page import="java.util.Iterator"%>

<jsp:useBean id="typeMap" class="java.util.LinkedHashMap"
	scope="request" />

<jsp:useBean id="model"
	class="in.co.sunrays.wsx.model.AttendanceSheetModel" scope="request" />

<form action="<%=ORSView.ATTENDANCESHEET_LIST_CTL%>">
	<center>
		<br>
		<p>
			<font class="textPMWithOutBorderCommonCenterRedBoldUnderline">Attendance
				Report</font>
		</p>
		<table cellspacing="0" style="border: 0px solid gray;" width="90%">
			<tr>
				<td class="label" height="22"
					style="border: 0px solid gray;"><%=HTMLUtility.getList("roleId",
					ServletUtility.getParameter("roleId", request), typeMap)%></td>
				<td class="label" height="22"
					style="border: 0px solid gray;">Name</td>
				<td height="22"style="border: 0px solid gray;"><input
					type="text" name="name" size="12"
					value="<%=ServletUtility.getParameter("name", request)%>">
				</td>
				<td class="label"  height="22"
					style="border: 0px solid gray;">Select Year</td>
				<td class="label" height="22"
					style="border: 0px solid gray;">
					<%
					LinkedHashMap map = new LinkedHashMap();
					
					    map.put("", "select Year");
						map.put("2014", "2014");
						map.put("2015", "2015");
						map.put("2016", "2016");
					
						String htmlList = HTMLUtility.getList("year", ServletUtility.getParameter("year", request), map);
					%> <%=htmlList%></td>
				<td class="label"  height="22"
					style="border: 0px solid gray;">Select Month</td>
				<td class="label"  height="22"
					style="border: 0px solid gray;">
					<%
					LinkedHashMap map1 = new LinkedHashMap();
					
					   map1.put("", "select Month");
						map1.put("1", "January");
						map1.put("2", "February");
						map1.put("3", "March");
						map1.put("4", "April");
						map1.put("5", "May");
						map1.put("6", "June");
						map1.put("7", "July");
						map1.put("8", "August");
						map1.put("9", "September");
						map1.put("10", "October");
						map1.put("11", "November");
						map1.put("12", "December");
					
						String htmlList1 = HTMLUtility.getList("month", ServletUtility.getParameter("month", request),
								map1);
					%> <%=htmlList1%></td>
				<td class="label" height="22" 
					style="border: 0px solid gray;">Code</td>
				<td class="label" height="22"
					style="border: 0px solid gray;"><input type="text" name="code"
					size="10" value="<%=ServletUtility.getParameter("code", request)%>">

				</td>

				<td class="label" height="22"
					style="border: 0px solid gray;"><input type="submit"
					class="button" size="5" name="operation"
					value="<%=BaseCtl.OP_SEARCH%>"></td>
			</tr>
		</table>
		<br>
		<table border="1" cellspacing="0"
			style="border-collapse: collapse; border: 1px solid gray;"
			width="90%">
			<tr>
				<td class="subheader" height="22" style="border: 1px solid gray;">#</td>
				<td class="subheader" height="22" style="border: 1px solid gray;">Code</td>
				<td class="subheader" height="22" style="border: 1px solid gray;">Name</td>
				<td class="subheader" height="22" style="border: 1px solid gray;">01</td>
				<td class="subheader" height="22" style="border: 1px solid gray;">02</td>
				<td class="subheader" height="22" style="border: 1px solid gray;">03</td>
				<td class="subheader" height="22" style="border: 1px solid gray;">04</td>
				<td class="subheader" height="22" style="border: 1px solid gray;">05</td>
				<td class="subheader" height="22" style="border: 1px solid gray;">06</td>
				<td class="subheader" height="22" style="border: 1px solid gray;">07</td>
				<td class="subheader" height="22" style="border: 1px solid gray;">08</td>
				<td class="subheader" height="22" style="border: 1px solid gray;">09</td>
				<td class="subheader" height="22" style="border: 1px solid gray;">10</td>
				<td class="subheader" height="22" style="border: 1px solid gray;">11</td>
				<td class="subheader" height="22" style="border: 1px solid gray;">12</td>
				<td class="subheader" height="22" style="border: 1px solid gray;">13</td>
				<td class="subheader" height="22" style="border: 1px solid gray;">14</td>
				<td class="subheader" height="22" style="border: 1px solid gray;">15</td>
				<td class="subheader" height="22" style="border: 1px solid gray;">16</td>
				<td class="subheader" height="22" style="border: 1px solid gray;">17</td>
				<td class="subheader" height="22" style="border: 1px solid gray;">18</td>
				<td class="subheader" height="22" style="border: 1px solid gray;">19</td>
				<td class="subheader" height="22" style="border: 1px solid gray;">20</td>
				<td class="subheader" height="22" style="border: 1px solid gray;">21</td>
				<td class="subheader" height="22" style="border: 1px solid gray;">22</td>
				<td class="subheader" height="22" style="border: 1px solid gray;">23</td>
				<td class="subheader" height="22" style="border: 1px solid gray;">24</td>
				<td class="subheader" height="22" style="border: 1px solid gray;">25</td>
				<td class="subheader" height="22" style="border: 1px solid gray;">26</td>
				<td class="subheader" height="22" style="border: 1px solid gray;">27</td>
				<td class="subheader" height="22" style="border: 1px solid gray;">28</td>
				<td class="subheader" height="22" style="border: 1px solid gray;">29</td>
				<td class="subheader" height="22" style="border: 1px solid gray;">30</td>
				<td class="subheader" height="22" style="border: 1px solid gray;">31</td>
				<td class="subheader" height="22" style="border: 1px solid gray;">Duty
					Days</td>

			</tr>
			<%
				if (HTMLUtility.getErrorMessage(request).length() > 0) {
			%>
			<tr>
				<td colspan="15"><%=HTMLUtility.getErrorMessage(request)%></td>
			</tr>
			<%
				}
			%>
			<%
				int i = 0;
			String codefrist=null;
				String Day1 = null, Day2 = null, Day3 = null, Day4 = null, Day5 = null, Day6 = null, Day7 = null, Day8 = null, Day9 = null, Day10 = null;
				String Day11 = null, Day12 = null, Day13 = null, Day14 = null, Day15 = null, Day16 = null, Day17 = null, Day18 = null, Day19 = null, Day20 = null, Day21 = null;
				String Day22 = null, Day23 = null, Day24 = null, Day25 = null, Day26 = null, Day27 = null, Day28 = null, Day29 = null, Day30 = null, Day31 = null;
				List list = ServletUtility.getList(request);
				Iterator<AttendanceSheetModel> it = list.iterator();

				while (it.hasNext()) {
					i++;
					AttendanceSheetModel bean = it.next();
					if(bean.getCode()!=null && bean.getCode().length()>12 ){
						String code=bean.getCode();
						 codefrist= code.substring(0, 12);
				
						}else{
							codefrist=bean.getCode();
						
						}
			%>
			<tr>
				<td class="label" height="22" style="border: 1px solid gray;"><%=i%></td>
				<td class="label" height="22" style="border: 1px solid gray;"><%=DataUtility.getStringData(codefrist)%></td>
				<td class="label" height="22" style="border: 1px solid gray;"><%=DataUtility.getStringData(bean.getName())%></td>
				<%
					if (bean.getDay1() == 0) {
							Day1 = "A";
				%>
				<td class="label" height="22" style="border: 1px solid gray;"><font
					color="red"><%=DataUtility.getStringData(Day1)%></font></td>
				<%
					} else {
							Day1 = "P";
				%>
				<td class="label" height="22" style="border: 1px solid gray;"><font
					color="blue"><%=DataUtility.getStringData(Day1)%></font></td>
				<%
					}
				%>
				<%
					if (bean.getDay2() == 0) {
							Day2 = "A";
				%>
				<td class="label" height="22" style="border: 1px solid gray;"><font
					color="red"><%=DataUtility.getStringData(Day2)%></font></td>
				<%
					} else {
							Day2 = "P";
				%>
				<td class="label" height="22" style="border: 1px solid gray;"><font
					color="blue"><%=DataUtility.getStringData(Day2)%></font></td>
				<%
					}
				%>
				<%
					if (bean.getDay3() == 0) {
							Day3 = "A";
				%>
				<td class="label" height="22" style="border: 1px solid gray;"><font
					color="red"><%=DataUtility.getStringData(Day3)%></font></td>
				<%
					} else {
							Day3 = "P";
				%>
				<td class="label" height="22" style="border: 1px solid gray;"><font
					color="blue"><%=DataUtility.getStringData(Day3)%></font></td>
				<%
					}
				%>
				<%
					if (bean.getDay4() == 0) {
							Day4 = "A";
				%>
				<td class="label" height="22" style="border: 1px solid gray;"><font
					color="red"><%=DataUtility.getStringData(Day4)%></font></td>
				<%
					} else {
							Day4 = "P";
				%>
				<td class="label" height="22" style="border: 1px solid gray;"><font
					color="blue"><%=DataUtility.getStringData(Day4)%></font></td>
				<%
					}
				%>
				<%
					if (bean.getDay5() == 0) {
							Day5 = "A";
				%>
				<td class="label" height="22" style="border: 1px solid gray;"><font
					color="red"><%=DataUtility.getStringData(Day5)%></font></td>
				<%
					} else {
							Day5 = "P";
				%>
				<td class="label" height="22" style="border: 1px solid gray;"><font
					color="blue"><%=DataUtility.getStringData(Day5)%></font></td>
				<%
					}
				%>
				<%
					if (bean.getDay6() == 0) {
							Day6 = "A";
				%>
				<td class="label" height="22" style="border: 1px solid gray;"><font
					color="red"><%=DataUtility.getStringData(Day6)%></font></td>
				<%
					} else {
							Day6 = "P";
				%>
				<td class="label" height="22" style="border: 1px solid gray;"><font
					color="blue"><%=DataUtility.getStringData(Day6)%></font></td>
				<%
					}
				%>

				<%
					if (bean.getDay7() == 0) {
							Day7 = "A";
				%>
				<td class="label" height="22" style="border: 1px solid gray;"><font
					color="red"><%=DataUtility.getStringData(Day7)%></font></td>
				<%
					} else {
							Day7 = "P";
				%>
				<td class="label" height="22" style="border: 1px solid gray;"><font
					color="blue"><%=DataUtility.getStringData(Day7)%></font></td>
				<%
					}
				%>

				<%
					if (bean.getDay8() == 0) {
							Day8 = "A";
				%>
				<td class="label" height="22" style="border: 1px solid gray;"><font
					color="red"><%=DataUtility.getStringData(Day8)%></font></td>
				<%
					} else {
							Day8 = "P";
				%>
				<td class="label" height="22" style="border: 1px solid gray;"><font
					color="blue"><%=DataUtility.getStringData(Day8)%></font></td>
				<%
					}
				%>
				<%
					if (bean.getDay9() == 0) {
							Day9 = "A";
				%>
				<td class="label" height="22" style="border: 1px solid gray;"><font
					color="red"><%=DataUtility.getStringData(Day9)%></font></td>
				<%
					} else {
							Day9 = "P";
				%>
				<td class="label" height="22" style="border: 1px solid gray;"><font
					color="blue"><%=DataUtility.getStringData(Day9)%></font></td>
				<%
					}
				%>
				<%
					if (bean.getDay10() == 0) {
							Day10 = "A";
				%>
				<td class="label" height="22" style="border: 1px solid gray;"><font
					color="red"><%=DataUtility.getStringData(Day10)%></font></td>
				<%
					} else {
							Day10 = "P";
				%>
				<td class="label" height="22" style="border: 1px solid gray;"><font
					color="blue"><%=DataUtility.getStringData(Day10)%></font></td>
				<%
					}
				%>
				<%
					if (bean.getDay11() == 0) {
							Day11 = "A";
				%>
				<td class="label" height="22" style="border: 1px solid gray;"><font
					color="red"><%=DataUtility.getStringData(Day11)%></font></td>
				<%
					} else {
							Day11 = "P";
				%>
				<td class="label" height="22" style="border: 1px solid gray;"><font
					color="blue"><%=DataUtility.getStringData(Day11)%></font></td>
				<%
					}
				%>
				<%
					if (bean.getDay12() == 0) {
							Day12 = "A";
				%>
				<td class="label" height="22" style="border: 1px solid gray;"><font
					color="red"><%=DataUtility.getStringData(Day12)%></font></td>
				<%
					} else {
							Day12 = "P";
				%>
				<td class="label" height="22" style="border: 1px solid gray;"><font
					color="blue"><%=DataUtility.getStringData(Day12)%></font></td>
				<%
					}
				%>
				<%
					if (bean.getDay13() == 0) {
							Day13 = "A";
				%>
				<td class="label" height="22" style="border: 1px solid gray;"><font
					color="red"><%=DataUtility.getStringData(Day13)%></font></td>
				<%
					} else {
							Day13 = "P";
				%>
				<td class="label" height="22" style="border: 1px solid gray;"><font
					color="blue"><%=DataUtility.getStringData(Day13)%></font></td>
				<%
					}
				%>
				<%
					if (bean.getDay14() == 0) {
							Day14 = "A";
				%>
				<td class="label" height="22" style="border: 1px solid gray;"><font
					color="red"><%=DataUtility.getStringData(Day14)%></font></td>
				<%
					} else {
							Day14 = "P";
				%>
				<td class="label" height="22" style="border: 1px solid gray;"><font
					color="blue"><%=DataUtility.getStringData(Day14)%></font></td>
				<%
					}
				%>
				<%
					if (bean.getDay15() == 0) {
							Day15 = "A";
				%>
				<td class="label" height="22" style="border: 1px solid gray;"><font
					color="red"><%=DataUtility.getStringData(Day15)%></font></td>
				<%
					} else {
							Day15 = "P";
				%>
				<td class="label" height="22" style="border: 1px solid gray;"><font
					color="blue"><%=DataUtility.getStringData(Day15)%></font></td>
				<%
					}
				%>
				<%
					if (bean.getDay16() == 0) {
							Day16 = "A";
				%>
				<td class="label" height="22" style="border: 1px solid gray;"><font
					color="red"><%=DataUtility.getStringData(Day16)%></font></td>
				<%
					} else {
							Day16 = "P";
				%>
				<td class="label" height="22" style="border: 1px solid gray;"><font
					color="blue"><%=DataUtility.getStringData(Day16)%></font></td>
				<%
					}
				%>

				<%
					if (bean.getDay17() == 0) {
							Day17 = "A";
				%>
				<td class="label" height="22" style="border: 1px solid gray;"><font
					color="red"><%=DataUtility.getStringData(Day17)%></font></td>
				<%
					} else {
							Day17 = "P";
				%>
				<td class="label" height="22" style="border: 1px solid gray;"><font
					color="blue"><%=DataUtility.getStringData(Day17)%></font></td>
				<%
					}
				%>

				<%
					if (bean.getDay18() == 0) {
							Day18 = "A";
				%>
				<td class="label" height="22" style="border: 1px solid gray;"><font
					color="red"><%=DataUtility.getStringData(Day18)%></font></td>
				<%
					} else {
							Day18 = "P";
				%>
				<td class="label" height="22" style="border: 1px solid gray;"><font
					color="blue"><%=DataUtility.getStringData(Day18)%></font></td>
				<%
					}
				%>
				<%
					if (bean.getDay19() == 0) {
							Day19 = "A";
				%>
				<td class="label" height="22" style="border: 1px solid gray;"><font
					color="red"><%=DataUtility.getStringData(Day19)%></font></td>
				<%
					} else {
							Day19 = "P";
				%>
				<td class="label" height="22" style="border: 1px solid gray;"><font
					color="blue"><%=DataUtility.getStringData(Day19)%></font></td>
				<%
					}
				%>
				<%
					if (bean.getDay20() == 0) {
							Day20 = "A";
				%>
				<td class="label" height="22" style="border: 1px solid gray;"><font
					color="red"><%=DataUtility.getStringData(Day20)%></font></td>
				<%
					} else {
							Day20 = "P";
				%>
				<td class="label" height="22" style="border: 1px solid gray;"><font
					color="blue"><%=DataUtility.getStringData(Day20)%></font></td>
				<%
					}
				%>
				<%
					if (bean.getDay21() == 0) {
							Day21 = "A";
				%>
				<td class="label" height="22" style="border: 1px solid gray;"><font
					color="red"><%=DataUtility.getStringData(Day21)%></font></td>
				<%
					} else {
							Day21 = "P";
				%>
				<td class="label" height="22" style="border: 1px solid gray;"><font
					color="blue"><%=DataUtility.getStringData(Day21)%></font></td>
				<%
					}
				%>
				<%
					if (bean.getDay22() == 0) {
							Day22 = "A";
				%>
				<td class="label" height="22" style="border: 1px solid gray;"><font
					color="red"><%=DataUtility.getStringData(Day22)%></font></td>
				<%
					} else {
							Day22 = "P";
				%>
				<td class="label" height="22" style="border: 1px solid gray;"><font
					color="blue"><%=DataUtility.getStringData(Day22)%></font></td>
				<%
					}
				%>
				<%
					if (bean.getDay23() == 0) {
							Day23 = "A";
				%>
				<td class="label" height="22" style="border: 1px solid gray;"><font
					color="red"><%=DataUtility.getStringData(Day23)%></font></td>
				<%
					} else {
							Day23 = "P";
				%>
				<td class="label" height="22" style="border: 1px solid gray;"><font
					color="blue"><%=DataUtility.getStringData(Day23)%></font></td>
				<%
					}
				%>
				<%
					if (bean.getDay24() == 0) {
							Day24 = "A";
				%>
				<td class="label" height="22" style="border: 1px solid gray;"><font
					color="red"><%=DataUtility.getStringData(Day24)%></font></td>
				<%
					} else {
							Day24 = "P";
				%>
				<td class="label" height="22" style="border: 1px solid gray;"><font
					color="blue"><%=DataUtility.getStringData(Day24)%></font></td>
				<%
					}
				%>
				<%
					if (bean.getDay25() == 0) {
							Day25 = "A";
				%>
				<td class="label" height="22" style="border: 1px solid gray;"><font
					color="red"><%=DataUtility.getStringData(Day25)%></font></td>
				<%
					} else {
							Day25 = "P";
				%>
				<td class="label" height="22" style="border: 1px solid gray;"><font
					color="blue"><%=DataUtility.getStringData(Day25)%></font></td>
				<%
					}
				%>
				<%
					if (bean.getDay26() == 0) {
							Day26 = "A";
				%>
				<td class="label" height="22" style="border: 1px solid gray;"><font
					color="red"><%=DataUtility.getStringData(Day26)%></font></td>
				<%
					} else {
							Day26 = "P";
				%>
				<td class="label" height="22" style="border: 1px solid gray;"><font
					color="blue"><%=DataUtility.getStringData(Day26)%></font></td>
				<%
					}
				%>
				<%
					if (bean.getDay27() == 0) {
							Day27 = "A";
				%>
				<td class="label" height="22" style="border: 1px solid gray;"><font
					color="red"><%=DataUtility.getStringData(Day27)%></font></td>
				<%
					} else {
							Day27 = "P";
				%>
				<td class="label" height="22" style="border: 1px solid gray;"><font
					color="blue"><%=DataUtility.getStringData(Day27)%></font></td>
				<%
					}
				%>
				<%
					if (bean.getDay28() == 0) {
							Day28 = "A";
				%>
				<td class="label" height="22" style="border: 1px solid gray;"><font
					color="red"><%=DataUtility.getStringData(Day28)%></font></td>
				<%
					} else {
							Day28 = "P";
				%>
				<td class="label" height="22" style="border: 1px solid gray;"><font
					color="blue"><%=DataUtility.getStringData(Day28)%></font></td>
				<%
					}
				%>
				<%
					if (bean.getDay29() == 0) {
							Day29 = "A";
				%>
				<td class="label" height="22" style="border: 1px solid gray;"><font
					color="red"><%=DataUtility.getStringData(Day29)%></font></td>
				<%
					} else {
							Day29 = "P";
				%>
				<td class="label" height="22" style="border: 1px solid gray;"><font
					color="blue"><%=DataUtility.getStringData(Day29)%></font></td>
				<%
					}
				%>
				<%
					if (bean.getDay30() == 0) {
							Day30 = "A";
				%>
				<td class="label" height="22" style="border: 1px solid gray;"><font
					color="red"><%=DataUtility.getStringData(Day30)%></font></td>
				<%
					} else {
							Day30 = "P";
				%>
				<td class="label" height="22" style="border: 1px solid gray;"><font
					color="blue"><%=DataUtility.getStringData(Day30)%></font></td>
				<%
					}
				%>
				<%
					if (bean.getDay31() == 0) {
							Day31 = "A";
				%>
				<td class="label" height="22" style="border: 1px solid gray;"><font
					color="red"><%=DataUtility.getStringData(Day31)%></font></td>
				<%
					} else {
							Day31 = "P";
				%>
				<td class="label" height="22" style="border: 1px solid gray;"><font
					color="blue"><%=DataUtility.getStringData(Day31)%></font></td>
				<%
					}
				%>

				<td class="label" height="22" style="border: 1px solid gray;"><%=DataUtility.getStringData(bean.getTotal())%></td>

			</tr>
			<%
				}
			%>
		</table>
		<table cellspacing="0" style="border: 0px solid gray;" width="90%">
			<tr>
				<td class="label" height="22" style="border: 0px solid gray;"><input
					type="submit" name="operation" class="button"
					value="<%=AttendanceSheetListCtl.OP_PREVIOUS%>"></td>

				<td colspan="3" align="center"></td>

				<td class="label" height="22" style="border: 0px solid gray;"
					align="right"><input type="submit" name="operation"
					class="button" value="<%=AttendanceSheetListCtl.OP_NEXT%>"></td>
			</tr>
		</table>
		<%
			int pageNo = ServletUtility.getPageNo(request);
			int pageSize = ServletUtility.getPageSize(request);
			int index = ((pageNo - 1) * pageSize) + 1;
		%>
		<input type="hidden" name="pageNo" value="<%=pageNo%>"> <input
			type="hidden" name="pageSize" value="<%=pageSize%>">
	</center>
</form>

