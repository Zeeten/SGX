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
			<font class="textPMWithOutBorderCommonCenterRedBoldUnderline">Schedular Status Log</font>
		</p>

		<table border="1" cellspacing="0"
			style="border-collapse: collapse; border: 1px solid gray;"
			width="90%">
		<tr>
			<td class="subheader" height="22" style="border: 1px solid gray;">Id</td>
			<td class="subheader" height="22" style="border: 1px solid gray;">SCHEDULAR_NAME</td>
			<td class="subheader" height="22" style="border: 1px solid gray;">START_TIME</td>
			<td class="subheader" height="22" style="border: 1px solid gray;">STOP_TIME</td>
			<td class="subheader" height="22" style="border: 1px solid gray;">STATUS</td>
		</tr>
		<%if (HTMLUtility.getErrorMessage(request).length() > 0) {%>
		<tr>
			<td colspan="16"><%=HTMLUtility.getErrorMessage(request)%></td>
		</tr>
		<%}%>
		<%int i = 0;
			List list = ServletUtility.getList(request);
			Iterator<SchedularStatusModel> it = list.iterator();
			while (it.hasNext()) {
				SchedularStatusModel model = it.next();
				i++;%>
		<tr>
			<td class="label" height="22" style="border: 1px solid gray;"><%=i%></td>
			<td class="label" height="22" style="border: 1px solid gray;"><%=model.getSchedularName()%> </td>
			<td class="label" height="22" style="border: 1px solid gray;"><%=model.getStartTime()%></td>
			<td class="label" height="22" style="border: 1px solid gray;"><%=model.getStopTime()%></td>
			<td class="label" height="22" style="border: 1px solid gray;"><%=model.getStatus()%></td>
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