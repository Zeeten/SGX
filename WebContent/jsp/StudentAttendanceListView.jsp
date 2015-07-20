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

<%!public String getRoleName(long i) {
		if (i == AppRole.STUDENT) {
			return "Trainee";
		} else {
			return "Trainer";
		}
	}

	;%>

<jsp:useBean id="typeMap" class="java.util.LinkedHashMap"
	scope="request" />

<jsp:useBean id="model"
	class="in.co.sunrays.wsx.model.StudentAttendanceModel" scope="request" />

<form action="<%=ORSView.STUDENTATTENDANCEL_LIST_CTL%>">
	<center>
		<br>
		<p>
			<font class="textPMWithOutBorderCommonCenterRedBoldUnderline">Attendance
				Sheet</font>
		</p>
		<table cellspacing="0" style="border: 0px solid gray;" width="90%">
			<tr>

				<td class="label" width="5%" height="22"
					style="border: 0px solid gray;"><%=HTMLUtility.getList("roleId",
					ServletUtility.getParameter("roleId", request), typeMap)%></td>
				<td class="label" width="4%" height="22"
					style="border: 0px solid gray;">Name</td>
				<td height="22" width="9%" style="border: 0px solid gray;"><input
					type="text" name="name" size="9"
					value="<%=ServletUtility.getParameter("name", request)%>">
				</td>
				<td class="label" height="22" width="4%"
					style="border: 0px solid gray;">Code</td>
				<td class="label" height="22" width="10%"
					style="border: 0px solid gray;"><input type="text" name="code"
					size="10" value="<%=ServletUtility.getParameter("code", request)%>">

				</td>
				<td class="label" height="22" width="8%"
					style="border: 0px solid gray;">Start Date</td>
				<td class="label" height="22" width="12%"
					style="border: 0px solid gray;"><input type="text"
					name="startDate" size="8"
					value="<%=ServletUtility.getParameter("startDate", request)%>">
					<a href="javascript:getCalendar(document.forms[0].startDate);">
						<img src="<%=ORSView.IMG_FOLDER%>/cal.jpg" width="16" height="15"
						border="0" alt="Calender">
				</a><font color="red"> <%=ServletUtility.getErrorMessage("startDate", request)%></font>
				</td>
				<td class="label" height="22" width="8%"
					style="border: 0px solid gray;">End Date</td>
				<td class="label" height="22" width="12%"
					style="border: 0px solid gray;"><input type="text"
					name="endDate" size="8"
					value="<%=ServletUtility.getParameter("endDate", request)%>">
					<a href="javascript:getCalendar(document.forms[0].endDate);"> <img
						src="<%=ORSView.IMG_FOLDER%>/cal.jpg" width="16" height="15"
						border="0" alt="Calender">
				</a><font color="red"> <%=ServletUtility.getErrorMessage("endDate", request)%></font>
				<td>
				<td class="label" height="22" width="5%" style="border: 0px solid gray;">
					<input type="submit" class="button" size="5" name="operation"
					value="<%=BaseCtl.OP_SEARCH%>">
					
				</td>
	<td class="label" height="22" width="5%" style="border: 0px solid gray;">
   <input type="submit" class="button" size="5" name="operation" 
					value="<%=BaseCtl.OP_EXCEL%>">
</td>
			</tr>
		</table>
		<br>
		<table border="1" cellspacing="0"
			style="border-collapse: collapse; border: 1px solid gray;"
			width="90%">
			<tr>
				<td class="subheader" height="22" style="border: 1px solid gray;">#</td>
				<td class="subheader"  height="22" style="border: 1px solid gray;">Code</td>
				<td class="subheader"  height="22" style="border: 1px solid gray;">Type</td>
				<td class="subheader"  height="22" style="border: 1px solid gray;">Role</td>
				<td class="subheader" height="22" style="border: 1px solid gray;">Name</td>
				<td class="subheader" height="22" style="border: 1px solid gray;">Attendance</td>
				<td class="subheader" height="22" style="border: 1px solid gray;">Date</td>
			<td class="subheader" height="22" style="border: 1px solid gray;">IN1</td>
					<td class="subheader" height="22" style="border: 1px solid gray;">OUT1</td>
				<td class="subheader" height="22" style="border: 1px solid gray;">IN2</td>
										<td class="subheader" height="22" style="border: 1px solid gray;">OUT2</td>
					<td class="subheader" height="22" style="border: 1px solid gray;">IN3</td>
				
								<td class="subheader" height="22" style="border: 1px solid gray;">OUT3</td>
				
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
			String codesecond=null;
				List list = ServletUtility.getList(request);
				Iterator<StudentAttendanceModel> it = list.iterator();

				while (it.hasNext()) {
					i++;
					StudentAttendanceModel bean = it.next();
					if(bean.getCode()!=null && bean.getCode().length()>12 ){
					String code=bean.getCode();
					 codefrist= code.substring(0, 12);
					 codesecond= code.substring(13, 14);
					}else{
						codefrist=bean.getCode();
						codesecond=null;
					}
					
			%>
			<tr>
				<td class="label" height="22" style="border: 1px solid gray;"><%=i%></td>
				<td class="label"  height="22" style="border: 1px solid gray;"><%=DataUtility.getStringData(codefrist)%></td>
				<td class="label" height="22" style="border: 1px solid gray;"><%=DataUtility.getStringData(codesecond)%></td>
				<td class="label"  height="22" style="border: 1px solid gray;"><%=DataUtility.getStringData(getRoleName(bean.getRoleId()))%></td>
				<td class="label" height="22" style="border: 1px solid gray;"><%=DataUtility.getStringData(bean.getName())%></td>
				<td class="label" height="22" style="border: 1px solid gray;"><%=DataUtility.getStringData(bean.getAttendance())%></td>
				<td class="label"  height="22" style="border: 1px solid gray;"><%=DataUtility.getStringData(bean.getDate())%></td>
					<td class="label" height="22" style="border: 1px solid gray;"><%=DataUtility.getStringData(bean.getIn1())%></td>
						<td class="label" height="22" style="border: 1px solid gray;"><%=DataUtility.getStringData(bean.getOut1())%></td>
						<td class="label" height="22" style="border: 1px solid gray;"><%=DataUtility.getStringData(bean.getIn2())%></td>
						<td class="label" height="22" style="border: 1px solid gray;"><%=DataUtility.getStringData(bean.getOut2())%></td>
						<td class="label" height="22" style="border: 1px solid gray;"><%=DataUtility.getStringData(bean.getIn3())%></td>
						<td class="label" height="22" style="border: 1px solid gray;"><%=DataUtility.getStringData(bean.getOut3())%></td>

			</tr>
			<%
				}
			%>
		</table>
		<table cellspacing="0" style="border: 0px solid gray;" width="90%">
			<tr>
				<td class="label" height="22" style="border: 0px solid gray;"><input
					type="submit" name="operation" class="button"
					value="<%=StudentAttendanceListCtl.OP_PREVIOUS%>"></td>

				<td colspan="3" align="center"></td>

				<td class="label" height="22" style="border: 0px solid gray;"
					align="right"><input type="submit" name="operation"
					class="button" value="<%=StudentAttendanceListCtl.OP_NEXT%>"></td>
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

