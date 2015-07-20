<%@page import="in.co.sunrays.util.AccessUtility"%>
<%@page import="in.co.sunrays.wsx.model.StudentAttendanceModel"%>
<%@page import="in.co.sunrays.wsx.model.StudentModel"%>

<%@page import="java.util.List"%>
<%@page import="in.co.sunrays.wsx.controller.StudentAttendanceCtl"%>
<%@page import="java.util.HashMap"%>
<%@page import="in.co.sunrays.util.HTMLUtility"%>
<%@page import="in.co.sunrays.util.DataUtility"%>
<%@page import="in.co.sunrays.util.ServletUtility"%>
<%@page import="in.co.sunrays.wsx.controller.ORSView"%>
<%@page import="in.co.sunrays.common.controller.BaseCtl"%>
<%@page import="java.util.LinkedHashMap"%>


<jsp:useBean id="model" class="in.co.sunrays.wsx.model.StudentAttendanceModel"
	scope="request" />
<jsp:useBean id="studentList" class="java.util.ArrayList"
	scope="request" />	
	
	<jsp:useBean id="roleList" class="java.util.ArrayList"
	scope="request" />	

<p class="st-title">Student Attendance</p>

<%=HTMLUtility.getSuccessMessage(request)%>
<%=HTMLUtility.getErrorMessage(request)%>

<form action="<%=ORSView.STUDENTATTENDANCE_CTL%>" method="POST">
	<input type="hidden" name="id" value="<%=model.getId()%>">

	<table>
		<tr>
			<th>Role</th>
			<td><%=HTMLUtility.getList("roleId",
					
					model.getRoleId(), roleList)%></td>
		</tr>
		<tr>
			<th>Student*</th>
			<td><%=HTMLUtility.getList("studentId",
					
					model.getStudentId(),studentList )%></td>
		</tr>
		<tr>
			<th>Name*</th>
			<td><input type="text" name="name"
				value="<%=DataUtility.getStringData(model.getName())%>"><font
				color="red"> <%=ServletUtility.getErrorMessage("name", request)%></font></td>
		</tr>
		<tr>
			<th>Date(mm/dd/yyyy)*</th>
			<td><input type="text" name="date" readonly="readonly"
				value="<%=DataUtility.getDateString(model.getDate())%>"> <a
				href="javascript:getCalendar(document.forms[0].date);"> <img
					src="<%=ORSView.IMG_FOLDER%>/cal.jpg" width="16" height="15"
					border="0" alt="Calender">
			</a><font color="red"> <%=ServletUtility.getErrorMessage("date", request)%></font></td>
		</tr>
		
		
		<tr>
		<tr>

			<td colspan="2" align="right">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
				&nbsp; &nbsp; <%=HTMLUtility.getSubmitButton(BaseCtl.OP_SAVE,
					AccessUtility.canAdd(request), request)%>
			</td>
		</tr>
	</table>
</form>
