<%@page import="in.co.sunrays.wsx.model.AttendenceModel"%>
<%@page import="java.util.Iterator"%>
<%@page import="java.util.List"%>
<%@page import="in.co.sunrays.util.ServletUtility"%>
<%@page import="in.co.sunrays.util.HTMLUtility"%>
<%@page import="in.co.sunrays.common.controller.BaseCtl"%>
<%@page import="in.co.sunrays.wsx.controller.ORSView"%>
<%@page import="in.co.sunrays.util.AccessUtility"%>
<%@page import="in.co.sunrays.util.DataUtility"%>

<jsp:useBean id="typeMap" class="java.util.LinkedHashMap"
	scope="request" />

<jsp:useBean id="model1" class="in.co.sunrays.wsx.model.AttendenceModel"
	scope="request" />

<form action="<%=ORSView.ATTENDENCE_LIST_CTL%>">
<center>
		<br>
		<p>
			<font class="textPMWithOutBorderCommonCenterRedBoldUnderline">Attendance Log</font>
		</p>
<table cellspacing="0" style="border: 0px solid gray;" width="90%">
		<tr>
			<td class="label" width="13%" height="22"
					style="border: 0px solid gray;"><%=HTMLUtility.getList("type",
					ServletUtility.getParameter("type", request), typeMap)%>
					</td>
					<td class="label" width="5%" height="22"
					style="border: 0px solid gray;">
					Name
					</td>
					<td height="22" width="13%" style="border: 0px solid gray;">
					<input type="text" name="studentName" size="15"
				value="<%=ServletUtility.getParameter("studentName", request)%>"></td>
				<td class="label" width="8%" height="22"
					style="border: 0px solid gray;">
				Start Date
				</td>
				<td class="label" width="18%" height="22"
					style="border: 0px solid gray;">
				 <input type="text" name="startDate" size="15" 
				value="<%=ServletUtility.getParameter("startDate", request)%>"> <a
				href="javascript:getCalendar(document.forms[0].startDate);"> <img
					src="<%=ORSView.IMG_FOLDER%>/cal.jpg" width="16" height="15"
					border="0" alt="Calender">
					
			</a><font color="red"> <%=ServletUtility.getErrorMessage("startDate", request)%></font>
			</td>
			<td class="label" width="7%" height="22"
					style="border: 0px solid gray;">End Date 
					</td>
					<td class="label" width="18%" height="22"
					style="border: 0px solid gray;">
				<input type="text" name="endDate" size="15" 
				value="<%=ServletUtility.getParameter("endDate", request)%>"> <a
				href="javascript:getCalendar(document.forms[0].endDate);"> <img
					src="<%=ORSView.IMG_FOLDER%>/cal.jpg" width="16" height="15"
					border="0" alt="Calender">
			</a><font color="red"> <%=ServletUtility.getErrorMessage("endDate", request)%></font>
				</td>
				<td class="label" height="22" width="7%" style="border: 0px solid gray;">
			    <input type="submit" name="operation" class="button" value="<%=BaseCtl.OP_SEARCH%>">
	
				</td>
				<td class="label" height="22" width="7%" style="border: 0px solid gray;">
						    <input type="submit" class="button" name="operation" 
					value="<%=BaseCtl.OP_EXCEL%>">
				</td>
				
		</tr>
	</table>
	<br>

		<table border="1" cellspacing="0"
			style="border-collapse: collapse; border: 1px solid gray;"
			width="90%">
		<tr>
			<td class="subheader" height="22" style="border: 1px solid gray;">Id</td>
			<td class="subheader" height="22" style="border: 1px solid gray;">Name</td>
			<td class="subheader" height="22" style="border: 1px solid gray;">Training Center</td>
			<td class="subheader" height="22" style="border: 1px solid gray;">Attendance Time</td>
			<td class="subheader" height="22" style="border: 1px solid gray;">Server Time</td>
		</tr>
		<%if (HTMLUtility.getErrorMessage(request).length() > 0) {%>
		<tr>
			<td colspan="16"><%=HTMLUtility.getErrorMessage(request)%></td>
		</tr>
		<%}%>
		<%int i = 0;
			List list = ServletUtility.getList(request);
			Iterator<AttendenceModel> it = list.iterator();
			while (it.hasNext()) {
				AttendenceModel model = it.next();
				i++;%>
		<tr>
			<td class="label" height="22" style="border: 1px solid gray;"><%=i%></td>
			<td class="label" height="22" style="border: 1px solid gray;"><%=model.getStudentName()%> </td>
			<td class="label" height="22" style="border: 1px solid gray;"><%=model.getCollegeName()%></td>
			<td class="label" height="22" style="border: 1px solid gray;"><%=model.getAttendanceTime()%></td>
			<td class="label" height="22" style="border: 1px solid gray;"><%=model.getReceivedAt()%></td>
		</tr>
		<%}%>
	</table>
	<table cellspacing="0" style="border: 0px solid gray;" width="90%">
		<tr>
			<td class="label" height="22" style="border: 0px solid gray;"><input type="submit" name="operation" class="button"
				value="<%=BaseCtl.OP_PREVIOUS%>"></td>
			<td></td>
			<td class="label" height="22" style="border: 0px solid gray;" align="right"><input type="submit" name="operation" class="button"
				value="<%=BaseCtl.OP_NEXT%>"></td>
		</tr>
	</table>
	<%int pageNo = ServletUtility.getPageNo(request);
			int pageSize = ServletUtility.getPageSize(request);
			int index = ((pageNo - 1) * pageSize) + 1;%>
	<input type="hidden" name="pageNo" value="<%=pageNo%>"> <input
		type="hidden" name="pageSize" value="<%=pageSize%>">
</center>
</form>