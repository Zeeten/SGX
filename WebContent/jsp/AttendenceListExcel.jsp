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
		<%
		response.setContentType("application/vnd.ms-excel");
        response.setHeader("Content-Disposition", "inline; filename="
                        + "AttendenceLog.xls");
		int i = 0;
		
			List list = ServletUtility.getList(request);
			Iterator<AttendenceModel> it = list.iterator();
			while (it.hasNext()) {
				AttendenceModel model = it.next();
				i++;%>
		<tr>
			<td class="label" height="22" style="border: 1px solid gray;"><%=i%></td>
			<td class="label" height="22" style="border: 1px solid gray;"><%=model.getStudentName()%> (<%=model.getStudentId()%> )</td>
			<td class="label" height="22" style="border: 1px solid gray;"><%=model.getCollegeName()%></td>
			<td class="label" height="22" style="border: 1px solid gray;"><%=model.getAttendanceTime()%></td>
			<td class="label" height="22" style="border: 1px solid gray;"><%=model.getReceivedAt()%></td>
		</tr>
		<%}%>
	</table>
	
</center>
</form>