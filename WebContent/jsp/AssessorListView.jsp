<%@page import="in.co.sunrays.wsx.controller.AssessorCtl"%>
<%@page import="in.co.sunrays.wsx.controller.AssessorListCtl"%>
<%@page import="in.co.sunrays.wsx.controller.ORSView"%>
<%@page import="in.co.sunrays.util.ServletUtility"%>
<%@page import="in.co.sunrays.util.HTMLUtility"%>
<%@page import="in.co.sunrays.util.DataUtility"%>
<%@page import="in.co.sunrays.wsx.model.AssessorModel"%>
<%@page import="java.util.List"%>
<%@page import="java.util.Iterator"%>
<%@page import="in.co.sunrays.util.AccessUtility"%>
<%@page import="in.co.sunrays.common.controller.BaseCtl"%>

<jsp:useBean id="model" class="in.co.sunrays.wsx.model.AssessorModel"
	scope="request" />

<jsp:useBean id="collegeList" class="java.util.ArrayList"
	scope="request" />

<jsp:useBean id="departementList" class="java.util.ArrayList"
	scope="request" />


<form action="<%=ORSView.ASSESSOR_LIST_CTL%>">
	<center>
		<br>
		<p>
			<font class="textPMWithOutBorderCommonCenterRedBoldUnderline">Assessor
				List</font>
		</p>
		<table cellspacing="0" style="border: 0px solid gray;" width="90%">
			<tr>
				<td class="label" width="9%" height="22"
					style="border: 0px solid gray;">First Name</td>
				<td height="22" width="16%" style="border: 0px solid gray;"><input
					type="text" size="15" name="firstName"
					value="<%=ServletUtility.getParameter("firstName", request)%>">
				</td>
				<td class="label" width="8%" height="22"
					style="border: 0px solid gray;">Last Name</td>
				<td class="label" width="16%" height="22"
					style="border: 0px solid gray;"><input type="text"
					name="lastName" size="15"
					value="<%=ServletUtility.getParameter("lastName", request)%>">
				</td>
			<%-- 	<td class="label" width="24%" height="22"
					style="border: 0px solid gray;">Training Center</td>
				<td class="label" width="20%" height="22"
					style="border: 0px solid gray;"><%=HTMLUtility.getList(
					"collegeId",
					DataUtility.getLong(ServletUtility.getParameter(
							"collegeId", request)) + "", collegeList)%></td> --%>
				<td class="label" width="6%" height="22"
					style="border: 0px solid gray;">Sector</td>
				<td class="label" width="13%" height="22"
					style="border: 0px solid gray;"><%=HTMLUtility.getList("departementId", DataUtility
					.getLong(ServletUtility.getParameter("departementId",
							request)), departementList)%></td>
				<td class="label" height="22" style="border: 0px solid gray;">
					<input type="submit" class="button" name="operation"
					value="<%=AssessorListCtl.OP_SEARCH%>">
				</td>
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
				<td class="subheader" height="22" style="border: 1px solid gray;">Date
					Of Birth</td>
				<td class="subheader" height="22" style="border: 1px solid gray;">Gender</td>
				<td class="subheader" height="22" style="border: 1px solid gray;">MobileNo</td>
				<td class="subheader" height="22" style="border: 1px solid gray;">Edit</td>
			</tr>
			<tr>
				<td colspan="15"><%=HTMLUtility.getErrorMessage(request)%></td>
			</tr>
			<%
				int pageNo = ServletUtility.getPageNo(request);
				int pageSize = ServletUtility.getPageSize(request);
				int index = ((pageNo - 1) * pageSize) + 1;

				List list = ServletUtility.getList(request);
				Iterator<AssessorModel> it = list.iterator();

				while (it.hasNext()) {

					AssessorModel bean = it.next();
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
				<td class="label" height="22" style="border: 1px solid gray;"><%=bean.getDob()%></td>
				<td class="label" height="22" style="border: 1px solid gray;"><%=bean.getGender()%></td>
				<td class="label" height="22" style="border: 1px solid gray;"><%=bean.getMobileNo()%></td>
				<td class="label" height="22" style="border: 1px solid gray;">
					<%
						String label = (AccessUtility.canWrite(request)) ? "Edit"
									: "View";
					%> <a href="<%=ORSView.ASSESSOR_CTL%>?id=<%=bean.getId()%>"><%=label%></a>
			</tr>

			<%
				}
			%>
		</table>
		<table cellspacing="0" style="border: 0px solid gray;" width="90%">
			<tr>
				<td class="label" height="22" style="border: 0px solid gray;"><input
					type="submit" name="operation" class="button"
					value="<%=AssessorListCtl.OP_PREVIOUS%>"></td>

				<td class="label" height="22" style="border: 0px solid gray;"
					align="center"><%=HTMLUtility.getSubmitButton(BaseCtl.OP_NEW,
					AccessUtility.canAdd(request), request)%><%=HTMLUtility.getSubmitButton(BaseCtl.OP_DELETE,
					AccessUtility.canDelete(request), request)%></td>


				<td class="label" height="22" style="border: 0px solid gray;"
					align="right"><input type="submit" name="operation"
					class="button" value="<%=AssessorCtl.OP_NEXT%>"></td>
			</tr>
		</table>
		<input type="hidden" name="pageNo" value="<%=pageNo%>"> <input
			type="hidden" name="pageSize" value="<%=pageSize%>">
	</center>
</form>

