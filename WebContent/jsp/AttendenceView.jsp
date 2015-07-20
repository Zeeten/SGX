<%@page import="in.co.sunrays.wsx.controller.ORSView"%>
<%@page import="java.util.List"%>
<%@page import="java.util.LinkedHashMap"%>
<%@page import="java.util.Iterator"%>
<%@page import="in.co.sunrays.common.controller.BaseCtl"%>
<%@page import="in.co.sunrays.util.HTMLUtility"%>
<%@page import="in.co.sunrays.util.DataUtility"%>
<%@page import="in.co.sunrays.util.ServletUtility"%>
<%@page import="in.co.sunrays.util.AccessUtility"%>

<jsp:useBean id="model" class="in.co.sunrays.wsx.model.AttendenceModel"
	scope="request" />
	
	<jsp:useBean id="studentList" class="java.util.ArrayList"
	scope="request" />


<%=HTMLUtility.getSuccessMessage(request)%>
<%=HTMLUtility.getErrorMessage(request)%>


<form action="<%=ORSView.ATTENDENCE_CTL%>" method="post">
<center>
<br>
			<p>
<font class="textPMWithOutBorderCommonCenterRedBoldUnderline">Attendance</font>
</p>
<input type="hidden" name="id" value="<%=model.getId()%>">
<table border="1" cellspacing="0" style="border-collapse: collapse;border: 1px solid gray;" width="90%">
		<tr>
			<td  class="label" width="20%" height="22" style="border: 1px solid gray;">Code*</td>
			<td   height="22" style="border: 1px solid gray;"><input type="text" name="code" style="width: 25%" 
							value="<%=DataUtility.getStringData(model.getCode())%>"></input><font
							color="red"> <%=ServletUtility.getErrorMessage("code", request)%></font></td>

		</tr>
		<tr>
			<td  class="label" width="20%" height="22" style="border: 1px solid gray;">Time*</td>
			<td   height="22" style="border: 1px solid gray;"><input type="text" name="time" style="width: 25%"  placeholder="dd/mm/yyyy HH MM AM/PM"
				value="<%=DataUtility.getStringData(model.getAttendanceTime())%>"><font
				color="red"> <%=ServletUtility.getErrorMessage("time", request)%></font></td>
		</tr>		
	</table>
	<p align="center">
	<%=HTMLUtility.getSubmitButton(BaseCtl.OP_SAVE,
					AccessUtility.canAdd(request), request)%>
	</p>
	</center>
</form>