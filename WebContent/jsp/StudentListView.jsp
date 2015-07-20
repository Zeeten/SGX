<%@page import="in.co.sunrays.util.AccessUtility"%>
<%@page import="in.co.sunrays.wsx.controller.ORSView"%>
<%@page import="in.co.sunrays.common.controller.BaseCtl"%>
<%@page import="java.io.File"%>
<%@page import="java.util.ResourceBundle"%>
<%@page import="in.co.sunrays.wsx.model.StudentModel"%>
<%@page import="in.co.sunrays.wsx.controller.StudentListCtl"%>
<%@page import="in.co.sunrays.wsx.controller.StudentCtl"%>
<%@page import="in.co.sunrays.common.controller.UserListCtl"%>
<%@page import="in.co.sunrays.util.HTMLUtility"%>
<%@page import="in.co.sunrays.util.ServletUtility"%>
<%@page import="java.util.List"%>
<%@page import="java.util.Iterator"%>


<form action="<%=ORSView.STUDENT_LIST_CTL%>">
	<center>
		<br>
		<p>
			<font class="textPMWithOutBorderCommonCenterRedBoldUnderline">Trainee</font>
		</p>
		<table cellspacing="0" style="border: 0px solid gray;" width="90%">
			<tr>
				<td class="label" width="9%" height="22"
					style="border: 0px solid gray;">First Name</td>
				<td height="22" width="20%" style="border: 0px solid gray;"><input
					type="text" name="firstName"
					value="<%=ServletUtility.getParameter("firstName", request)%>">
				</td>
				<td class="label" width="8%" height="22"
					style="border: 0px solid gray;">Last Name</td>
				<td class="label" width="20%" height="22"
					style="border: 0px solid gray;"><input type="text"
					name="lastName"
					value="<%=ServletUtility.getParameter("lastName", request)%>">
				</td>
				<td class="label" height="22" style="border: 0px solid gray;">
					<input type="submit" name="operation" class="button"
					value="<%=StudentListCtl.OP_SEARCH%>">
				</td>
			</tr>
		</table>
		<br>
		<table border="1" cellspacing="0"
			style="border-collapse: collapse; border: 1px solid gray;"
			width="90%">
			<tr>
				<td class="subheader" height="22" style="border: 1px solid gray;">Select</td>
				<td class="subheader" height="22" style="border: 1px solid gray;">Code</td>
				<td class="subheader" height="22" style="border: 1px solid gray;">First
					Name</td>
				<td class="subheader" height="22" style="border: 1px solid gray;">Last
					Name</td>
				<td class="subheader" height="22" style="border: 1px solid gray;">Father
					Name</td>
				<td class="subheader" height="22" style="border: 1px solid gray;">Mother
					Name</td>
				<td class="subheader" height="22" style="border: 1px solid gray;">Training
					Center</td>
				<td class="subheader" height="22" style="border: 1px solid gray;">Sector</td>
				<td class="subheader" height="22" style="border: 1px solid gray;">Training
					Name</td>
				<td class="subheader" height="22" style="border: 1px solid gray;">Semester</td>
				<td class="subheader" height="22" style="border: 1px solid gray;">Year</td>
				<td class="subheader" height="22" style="border: 1px solid gray;">Date
					Of Birth</td>
				<td class="subheader" height="22" style="border: 1px solid gray;">Gender</td>
				<td class="subheader" height="22" style="border: 1px solid gray;">mobileNo</td>
				<td class="subheader" height="22" style="border: 1px solid gray;">Edit</td>
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
				int i = 1;
				List list = ServletUtility.getList(request);
				Iterator<StudentModel> it = list.iterator();

				while (it.hasNext()) {

					StudentModel bean = it.next();
			%>
			<tr>
				<td class="label" height="22" style="border: 1px solid gray;"><input
					type="checkbox" name="ids" value="<%=bean.getId()%>"></td>
				<td class="label" height="22" style="border: 1px solid gray;"><%=bean.getCode()%></td>
				<td class="label" height="22" style="border: 1px solid gray;"><%=bean.getFirstName()%></td>
				<td class="label" height="22" style="border: 1px solid gray;"><%=bean.getLastName()%></td>
				<td class="label" height="22" style="border: 1px solid gray;"><%=bean.getFatherName()%></td>
				<td class="label" height="22" style="border: 1px solid gray;"><%=bean.getMotherName()%></td>
				<td class="label" height="22" style="border: 1px solid gray;"><%=bean.getCollegeName()%></td>
				<td class="label" height="22" style="border: 1px solid gray;"><%=bean.getDepartementName()%></td>
				<td class="label" height="22" style="border: 1px solid gray;"><%=bean.getTrainingName()%></td>
				<td class="label" height="22" style="border: 1px solid gray;"><%=bean.getSemester()%></td>
				<td class="label" height="22" style="border: 1px solid gray;"><%=bean.getYear()%></td>
				<td class="label" height="22" style="border: 1px solid gray;"><%=bean.getDob()%></td>
				<td class="label" height="22" style="border: 1px solid gray;"><%=bean.getGender()%></td>
				<td class="label" height="22" style="border: 1px solid gray;"><%=bean.getMobileNo()%></td>
				<td class="label" height="22" style="border: 1px solid gray;">
					<%
						String label = (AccessUtility.canWrite(request)) ? "Edit"
									: "View";
					%> <a href="<%=ORSView.STUDENT_CTL%>?id=<%=bean.getId()%>"><%=label%></a>

				</td>
			</tr>
			<%
				}
			%>
		</table>
		<table cellspacing="0" style="border: 0px solid gray;" width="90%">
			<tr>
				<td class="label" height="22" style="border: 0px solid gray;"><input
					type="submit" name="operation" class="button"
					value="<%=StudentListCtl.OP_PREVIOUS%>"></td>

				<td class="label" height="22" style="border: 0px solid gray;"
					align="center"><%=HTMLUtility.getSubmitButton(BaseCtl.OP_NEW,
					AccessUtility.canAdd(request), request)%><%=HTMLUtility.getSubmitButton(BaseCtl.OP_DELETE,
					AccessUtility.canDelete(request), request)%></td>

				<td class="label" height="22" style="border: 0px solid gray;"
					align="right"><input type="submit" name="operation"
					class="button" value="<%=StudentListCtl.OP_NEXT%>"></td>
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

