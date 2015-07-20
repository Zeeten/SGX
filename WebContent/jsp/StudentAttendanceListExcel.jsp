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

		<table border="1" cellspacing="0"
			style="border-collapse: collapse; border: 1px solid gray;"
			width="90%">
			<tr>
				<td class="subheader" height="22" style="border: 1px solid gray;">#</td>
				<td class="subheader" height="22" style="border: 1px solid gray;">Code</td>
				<td class="subheader" height="22" style="border: 1px solid gray;">Type</td>
				<td class="subheader" height="22" style="border: 1px solid gray;">Role</td>
				<td class="subheader" height="22" style="border: 1px solid gray;">Name</td>
				<td class="subheader" height="22" style="border: 1px solid gray;">Attendance</td>
				<td class="subheader" height="22" style="border: 1px solid gray;">Date</td>
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
			response.setContentType("application/vnd.ms-excel");
	        response.setHeader("Content-Disposition", "inline; filename="
	                        + "Attendencesheet.xls");
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
				<td class="label" height="22" style="border: 1px solid gray;"><%=codefrist%></td>
				<td class="label" height="22" style="border: 1px solid gray;"><%=codesecond%></td>
				<td class="label" height="22" style="border: 1px solid gray;"><%=getRoleName(bean.getRoleId())%></td>
				<td class="label" height="22" style="border: 1px solid gray;"><%=bean.getName()%></td>
				<td class="label" height="22" style="border: 1px solid gray;"><%=bean.getAttendance()%></td>
				<td class="label" height="22" style="border: 1px solid gray;"><%=bean.getDate()%></td>

			</tr>
			<%
				}
			%>
		</table>

	</center>
</form>

