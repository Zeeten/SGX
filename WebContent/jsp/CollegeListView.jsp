<%@page import="in.co.sunrays.wsx.controller.CollegeCtl"%>
<%@page import="in.co.sunrays.wsx.controller.CollegeListCtl"%>
<%@page import="in.co.sunrays.wsx.controller.ORSView"%>
<%@page import="in.co.sunrays.util.HTMLUtility"%>
<%@page import="in.co.sunrays.util.ServletUtility"%>
<%@page import="in.co.sunrays.util.DataUtility"%>
<%@page import="in.co.sunrays.wsx.model.CollegeModel"%>
<%@page import="java.util.List"%>
<%@page import="java.util.Iterator"%>
<%@page import="in.co.sunrays.util.AccessUtility"%>
<%@page import="in.co.sunrays.common.controller.BaseCtl"%>

<jsp:useBean id="model" class="in.co.sunrays.wsx.model.CollegeModel"
	scope="request" />


<form action="<%=ORSView.COLLEGE_LIST_CTL%>">
	<center>
		<br>
		<p>
			<font class="textPMWithOutBorderCommonCenterRedBoldUnderline">Training
				Provider</font>
		</p>
		<table cellspacing="0" style="border: 0px solid gray;" width="90%">
			<tr>
				<td class="label" width="6%" height="22"
					style="border: 0px solid gray;">Name</td>
				<td height="22" width="20%" style="border: 0px solid gray;"><input
					type="text" name="name"
					value="<%=ServletUtility.getParameter("name", request)%>">
				</td>
				<td class="label" height="22" style="border: 0px solid gray;">
					<input type="submit" class="button" name="operation"
					value="<%=CollegeListCtl.OP_SEARCH%>">
				</td>
			</tr>
		</table>
		<br>
		<table border="1" cellspacing="0"
			style="border-collapse: collapse; border: 1px solid gray;"
			width="90%">
			<tr>
				<td class="subheader" height="22" style="border: 1px solid gray;">Select</td>
				<td class="subheader" height="22" style="border: 1px solid gray;">Name</td>
						<td class="subheader" height="22" style="border: 1px solid gray;">Industry</td>
				<td class="subheader" height="22" style="border: 1px solid gray;">Email
					Id</td>
				<td class="subheader" height="22" style="border: 1px solid gray;">PhoneNo</td>
				<td class="subheader" height="22" style="border: 1px solid gray;">Edit</td>
			</tr>
			<tr>
				<td colspan="4"><%=HTMLUtility.getErrorMessage(request)%></td>
			</tr>
			<%
				int pageNo = ServletUtility.getPageNo(request);
				int pageSize = ServletUtility.getPageSize(request);
				int index = ((pageNo - 1) * pageSize) + 1;

				List list = ServletUtility.getList(request);
				Iterator<CollegeModel> it = list.iterator();

				while (it.hasNext()) {

					CollegeModel bean = it.next();
			%>
			<tr>
				<td class="label" height="22" style="border: 1px solid gray;"><input
					type="checkbox" name="ids" value="<%=bean.getId()%>"></td>
				<td class="label" height="22" style="border: 1px solid gray;"><%=DataUtility.getStringData(bean.getCompanyName())%></td>
								<td class="label" height="22" style="border: 1px solid gray;"><%=DataUtility.getStringData(bean.getIndustryName())%></td>
				<td class="label" height="22" style="border: 1px solid gray;"><%=DataUtility.getStringData(bean.getOrgEmailIdOne())%></td>
				<td class="label" height="22" style="border: 1px solid gray;"><%=DataUtility.getStringData(bean.getPhoneNoOne())%></td>
				<td class="label" height="22" style="border: 1px solid gray;">
					<%
						String label = (AccessUtility.canWrite(request)) ? "Edit"
									: "View";
					%><a href="<%=ORSView.COLLEGE_CTL%>?id=<%=bean.getId()%>"><%=label%></a>
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
					value="<%=CollegeListCtl.OP_PREVIOUS%>"></td>


				<td class="label" height="22" style="border: 0px solid gray;"
					align="center"><%=HTMLUtility.getSubmitButton(BaseCtl.OP_NEW,
					AccessUtility.canAdd(request), request)%><%=HTMLUtility.getSubmitButton(BaseCtl.OP_DELETE,
					AccessUtility.canDelete(request), request)%></td>
				<td class="label" height="22" style="border: 0px solid gray;"
					align="right"><input type="submit" name="operation"
					class="button" value="<%=CollegeCtl.OP_NEXT%>"></td>
			</tr>
		</table>
		<input type="hidden" name="pageNo" value="<%=pageNo%>"> <input
			type="hidden" name="pageSize" value="<%=pageSize%>">
	</center>
</form>

