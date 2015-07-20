<%@page import="in.co.sunrays.wsx.model.ErrorMessageModel"%>
<%@page import="in.co.sunrays.wsx.model.SchedularStatusModel"%>
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


<form action="<%=ORSView.SCHEDULARSTATUS_LIST_CTL%>">
<center>
		<br>
		<p>
			<font class="textPMWithOutBorderCommonCenterRedBoldUnderline">Error Message Log</font>
		</p>

		<table border="1" cellspacing="0"
			style="border-collapse: collapse; border: 1px solid gray;"
			width="90%">
		<tr>
			<td class="subheader" height="22" style="border: 1px solid gray;">Id</td>
			<td class="subheader" height="22" style="border: 1px solid gray;">SCHEDULAR NAME</td>
			<td class="subheader" height="22" style="border: 1px solid gray;">ERROR MESSAGE</td>
			<td class="subheader" height="22" style="border: 1px solid gray;">ERROR TRACE</td>
			<td class="subheader" height="22" style="border: 1px solid gray;">LOGGER TIME</td>
		</tr>
		<%if (HTMLUtility.getErrorMessage(request).length() > 0) {%>
		<tr>
			<td colspan="16"><%=HTMLUtility.getErrorMessage(request)%></td>
		</tr>
		<%}%>
		<%int i = 0;
			List list = ServletUtility.getList(request);
			Iterator<ErrorMessageModel> it = list.iterator();
			while (it.hasNext()) {
				ErrorMessageModel model = it.next();
				i++;%>
		<tr>
			<td class="label" height="22" style="border: 1px solid gray;"><%=i%></td>
			<td class="label" height="22" style="border: 1px solid gray;"><%=model.getSchedularName()%> </td>
			<td class="label" height="22" style="border: 1px solid gray;"><%=model.getErrorMessage()%></td>
			<td class="label" height="22" style="border: 1px solid gray;"><%=model.getErrorTrace()%></td>
			<td class="label" height="22" style="border: 1px solid gray;"><%=model.getCreatedDatetime()%></td>
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