<%@page import="in.co.sunrays.wsx.controller.TrainingCtl"%>
<%@page import="in.co.sunrays.wsx.controller.TrainingListCtl"%>
<%@page import="in.co.sunrays.wsx.controller.ORSView"%>
<%@page import="in.co.sunrays.util.HTMLUtility"%>
<%@page import="in.co.sunrays.util.ServletUtility"%>
<%@page import="in.co.sunrays.util.DataUtility"%>
<%@page import="in.co.sunrays.wsx.model.TrainingModel"%>
<%@page import="java.util.List"%>
<%@page import="java.util.Iterator"%>
<%@page import="in.co.sunrays.util.AccessUtility"%>
<%@page import="in.co.sunrays.common.controller.BaseCtl"%>

<jsp:useBean id="model" class="in.co.sunrays.wsx.model.TrainingModel"
	scope="request" />


<form action="<%=ORSView.TRAININGMANAGEMENT_LIST_CTL%>">
	<center>
		<br>
		<p>
			<font class="textPMWithOutBorderCommonCenterRedBoldUnderline">Trainings</font>
		</p>
		<table cellspacing="0" style="border: 0px solid gray;" width="90%">
			<tr>
				<td class="label" width="11%" height="22"
					style="border: 0px solid gray;">Training Name</td>
				<td height="22" width="20%" style="border: 0px solid gray;"><input
					type="text" name="name"
					value="<%=ServletUtility.getParameter("name", request)%>">
				</td>
				<td class="label" height="22" style="border: 0px solid gray;">
					<input type="submit" class="button" name="operation"
					value="<%=TrainingListCtl.OP_SEARCH%>">
				</td>
			</tr>
		</table>
		<br>
		<table border="1" cellspacing="0"
			style="border-collapse: collapse; border: 1px solid gray;"
			width="90%">
			<tr>
				<td class="subheader" height="22" style="border: 1px solid gray;">Select</td>
				<td class="subheader" height="22" style="border: 1px solid gray;">Training
					Name</td>
				<td class="subheader" height="22" style="border: 1px solid gray;">Description</td>
				<td class="subheader" height="22" style="border: 1px solid gray;">Sector</td>
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
			Iterator<TrainingModel> it = list.iterator();

			while (it.hasNext()) {

				TrainingModel bean = it.next();
		%>
			<tr>
				<td class="label" height="22" style="border: 1px solid gray;"><input
					type="checkbox" name="ids" value="<%=bean.getId()%>"></td>
				<td class="label" height="22" style="border: 1px solid gray;"><%=bean.getName()%></td>
				<td class="label" height="22" style="border: 1px solid gray;"><%=bean.getDescription()%></td>
				<td class="label" height="22" style="border: 1px solid gray;"><%=bean.getDepartementName()%></td>

				<td class="label" height="22" style="border: 1px solid gray;">
					<%
				String label = (AccessUtility.canWrite(request)) ? "Edit"
										: "View";
			%><a href="<%=ORSView.TRAININGMANAGEMENT_CTL%>?id=<%=bean.getId()%>"><%=label%></a>
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
					value="<%=TrainingListCtl.OP_PREVIOUS%>"></td>


				<td class="label" height="22" style="border: 0px solid gray;"
					align="center"><%=HTMLUtility.getSubmitButton(BaseCtl.OP_NEW,
					AccessUtility.canAdd(request), request)%><%=HTMLUtility.getSubmitButton(BaseCtl.OP_DELETE,
					AccessUtility.canDelete(request), request)%></td>
				<td class="label" height="22" style="border: 0px solid gray;"
					align="right"><input type="submit" name="operation"
					class="button" value="<%=TrainingCtl.OP_NEXT%>"></td>
			</tr>
		</table>
		<input type="hidden" name="pageNo" value="<%=pageNo%>"> <input
			type="hidden" name="pageSize" value="<%=pageSize%>">
	</center>
</form>

