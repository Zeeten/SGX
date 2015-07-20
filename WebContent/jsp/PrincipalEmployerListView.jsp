<%@page import="in.co.sunrays.wsx.controller.PrincipalEmployerCtl"%>
<%@page import="in.co.sunrays.wsx.controller.PrincipalEmployerListCtl"%>
<%@page import="in.co.sunrays.wsx.controller.ORSView"%>
<%@page import="in.co.sunrays.util.ServletUtility"%>
<%@page import="in.co.sunrays.util.HTMLUtility"%>
<%@page import="in.co.sunrays.util.DataUtility"%>
<%@page import="in.co.sunrays.wsx.model.PrincipalEmployerModel"%>
<%@page import="java.util.List"%>
<%@page import="java.util.Iterator"%>
<%@page import="in.co.sunrays.util.AccessUtility"%>
<%@page import="in.co.sunrays.common.controller.BaseCtl"%>

<jsp:useBean id="model" class="in.co.sunrays.wsx.model.PrincipalEmployerModel"
	scope="request" />

<jsp:useBean id="industryList" class="java.util.ArrayList"
	scope="request" />

<jsp:useBean id="departementList" class="java.util.ArrayList"
	scope="request" />


<form action="<%=ORSView.PRINCIPAL_EMPLOYER_LIST_CTL%>">
	<center>
		<br>
		<p>
			<font class="textPMWithOutBorderCommonCenterRedBoldUnderline">Principal Employer
				List</font>
		</p>
		<table cellspacing="0" style="border: 0px solid gray;" width="90%">
			<tr>
				<td class="label" width="9%" height="22"
					style="border: 0px solid gray;">Name Of Regisrant</td>
				<td height="22" width="16%" style="border: 0px solid gray;"><input
					type="text" size="15" name="name"
					value="<%=ServletUtility.getParameter("name", request)%>">
				</td>
				
			
				<td class="label" width="6%" height="22"
					style="border: 0px solid gray;">Industry</td>
				<td class="label" width="13%" height="22"
					style="border: 0px solid gray;"><%=HTMLUtility.getList("industryId", DataUtility
					.getLong(ServletUtility.getParameter("industryId",
							request)), industryList)%></td>
				<td class="label" height="22" style="border: 0px solid gray;">
					<input type="submit" class="button" name="operation"
					value="<%=PrincipalEmployerListCtl.OP_SEARCH%>">
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
				<td class="subheader" height="22" style="border: 1px solid gray;">Name</td>
				<td class="subheader" height="22" style="border: 1px solid gray;">Designation
					</td>
				<td class="subheader" height="22" style="border: 1px solid gray;">Organitaion
				</td>
				<td class="subheader" height="22" style="border: 1px solid gray;">Industry
			</td>
				<td class="subheader" height="22" style="border: 1px solid gray;">Company Type
					</td>
				
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
				Iterator<PrincipalEmployerModel> it = list.iterator();

				while (it.hasNext()) {

					PrincipalEmployerModel bean = it.next();
			%>
			<tr>
				<td class="label" height="22" style="border: 1px solid gray;"><input
					type="checkbox" name="ids" value="<%=bean.getId()%>"></td>
		
				<td class="label" height="22" style="border: 1px solid gray;"><%=bean.getName()%></td>
				<td class="label" height="22" style="border: 1px solid gray;"><%=bean.getDesignation()%></td>
				<td class="label" height="22" style="border: 1px solid gray;"><%=bean.getOrganization()%></td>
				<td class="label" height="22" style="border: 1px solid gray;"><%=bean.getIndustry()%></td>
				<td class="label" height="22" style="border: 1px solid gray;"><%=bean.getCompanyType()%></td>
				
				<td class="label" height="22" style="border: 1px solid gray;">
					<%
						String label = (AccessUtility.canWrite(request)) ? "Edit"
									: "View";
					%> <a href="<%=ORSView.PRINCIPAL_EMPLOYER_CTL%>?id=<%=bean.getId()%>"><%=label%></a>
			</tr>

			<%
				}
			%>
		</table>
		<table cellspacing="0" style="border: 0px solid gray;" width="90%">
			<tr>
				<td class="label" height="22" style="border: 0px solid gray;"><input
					type="submit" name="operation" class="button"
					value="<%=PrincipalEmployerListCtl.OP_PREVIOUS%>"></td>

				<td class="label" height="22" style="border: 0px solid gray;"
					align="center"><%=HTMLUtility.getSubmitButton(BaseCtl.OP_NEW,
					AccessUtility.canAdd(request), request)%><%=HTMLUtility.getSubmitButton(BaseCtl.OP_DELETE,
					AccessUtility.canDelete(request), request)%></td>


				<td class="label" height="22" style="border: 0px solid gray;"
					align="right"><input type="submit" name="operation"
					class="button" value="<%=PrincipalEmployerCtl.OP_NEXT%>"></td>
			</tr>
		</table>
		<input type="hidden" name="pageNo" value="<%=pageNo%>"> <input
			type="hidden" name="pageSize" value="<%=pageSize%>">
	</center>
</form>
