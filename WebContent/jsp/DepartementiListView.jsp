<%@page import="in.co.sunrays.common.controller.BaseCtl"%>
<%@page import="in.co.sunrays.wsx.model.DepartementModel"%>
<%@page import="in.co.sunrays.wsx.controller.ORSView"%>
<%@page import="in.co.sunrays.util.HTMLUtility"%>
<%@page import="in.co.sunrays.util.ServletUtility"%>
<%@page import="java.util.List"%>
<%@page import="java.util.Iterator"%>
<%@page import="in.co.sunrays.wsx.controller.DepartementCtl"%>
<%@page import="in.co.sunrays.wsx.controller.DepartementListCtl"%>
<%@page import="in.co.sunrays.util.AccessUtility"%>

<form action="<%=ORSView.DEPARTEMENT_LIST_CTL%>">
	<center>
		<br>
		<p>
			<font class="textPMWithOutBorderCommonCenterRedBoldUnderline">Sector
				List</font>
		</p>
		<table cellspacing="0" style="border: 0px solid gray;" width="90%">
			<tr>
				<td class="label" width="6%" height="22"
					style="border: 0px solid gray;">Name</td>
				<td height="22" width="20%" style="border: 0px solid gray;"><input
					type="text" name="name"
					value="<%=ServletUtility.getParameter("name", request)%>"></td>
				<td class="label" height="22" style="border: 0px solid gray;">
					<input type="submit" class="button" name="operation"
					value="<%=DepartementListCtl.OP_SEARCH%>">
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
				<td class="subheader" height="22" style="border: 1px solid gray;">Name</td>
				<td class="subheader" height="22" style="border: 1px solid gray;">Description</td>
				<td class="subheader" height="22" style="border: 1px solid gray;">Edit</td>
			</tr>
			<%
				if (HTMLUtility.getErrorMessage(request).length() > 0) {
			%>
			<tr>
				<td colspan="6"><%=HTMLUtility.getErrorMessage(request)%></td>
			</tr>
			<%
				}
			%>
			<%
				int pageNo = ServletUtility.getPageNo(request);
				int pageSize = ServletUtility.getPageSize(request);
				int index = ((pageNo - 1) * pageSize) + 1;

				List list = ServletUtility.getList(request);
				Iterator<DepartementModel> it = list.iterator();

				while (it.hasNext()) {

					DepartementModel bean = it.next();
			%>
			<tr>
				<td class="label" height="22" style="border: 1px solid gray;"><input
					type="checkbox" name="ids" value="<%=bean.getId()%>"></td>
				<td class="label" height="22" style="border: 1px solid gray;"><%=bean.getCode()%></td>
				<td class="label" height="22" style="border: 1px solid gray;"><%=bean.getName()%></td>
				<td class="label" height="22" style="border: 1px solid gray;"><%=bean.getDecription()%></td>
				<td>
					<%
						String label = (AccessUtility.canWrite(request)) ? "Edit"
									: "View";
					%><a href="<%=ORSView.DEPARTEMENT_CTL%>?id=<%=bean.getId()%>"><%=label%></a>
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
					value="<%=DepartementListCtl.OP_PREVIOUS%>"></td>

				<td class="label" height="22" style="border: 0px solid gray;"
					align="center"><%=HTMLUtility.getSubmitButton(BaseCtl.OP_NEW,
					AccessUtility.canAdd(request), request)%><%=HTMLUtility.getSubmitButton(BaseCtl.OP_DELETE,
					AccessUtility.canDelete(request), request)%></td>

				<td class="label" height="22" style="border: 0px solid gray;"
					align="right"><input type="submit" name="operation"
					class="button" value="<%=DepartementCtl.OP_NEXT%>"></td>
			</tr>
		</table>
		<input type="hidden" name="pageNo" value="<%=pageNo%>"> <input
			type="hidden" name="pageSize" value="<%=pageSize%>">
	</center>
</form>

