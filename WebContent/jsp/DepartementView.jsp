<%@page import="in.co.sunrays.wsx.model.DepartementModel"%>
<%@page import="in.co.sunrays.wsx.model.CollegeModel"%>
<%@page import="java.util.List"%>
<%@page import="in.co.sunrays.wsx.controller.DepartementCtl"%>
<%@page import="java.util.HashMap"%>
<%@page import="in.co.sunrays.util.HTMLUtility"%>
<%@page import="in.co.sunrays.util.DataUtility"%>
<%@page import="in.co.sunrays.util.ServletUtility"%>
<%@page import="in.co.sunrays.wsx.controller.ORSView"%>
<%@page import="in.co.sunrays.common.controller.BaseCtl"%>
<%@page import="java.util.LinkedHashMap"%>
<%@page import="in.co.sunrays.util.AccessUtility"%>

<jsp:useBean id="model"
	class="in.co.sunrays.wsx.model.DepartementModel" scope="request"></jsp:useBean>


<%=HTMLUtility.getSuccessMessage(request)%>
<%=HTMLUtility.getErrorMessage(request)%>

<form action="<%=ORSView.DEPARTEMENT_CTL%>" method="POST">
<center>
<br>
			<p>
<font class="textPMWithOutBorderCommonCenterRedBoldUnderline">Sector Form</font>
</p>
	<input type="hidden" name="id" value="<%=model.getId()%>">

<table border="1" cellspacing="0" style="border-collapse: collapse;border: 1px solid gray;" width="90%">
		<tr>
			 <td  class="label" width="27%" height="22" style="border: 1px solid gray;">Code*</th>
			<td   height="22" style="border: 1px solid gray;"><input type="text" name="code" size="20"
				value="<%=DataUtility.getStringData(model.getCode())%>"></input><font
				color="red"> <%=ServletUtility.getErrorMessage("code", request)%></font></td>
		</tr>
		<tr>
			 <td  class="label" width="27%" height="22" style="border: 1px solid gray;">Name*</th>
			<td   height="22" style="border: 1px solid gray;"><input type="text" name="name" size="20"
				value="<%=DataUtility.getStringData(model.getName())%>"><font
				color="red"> <%=ServletUtility.getErrorMessage("name", request)%></font></td>
		</tr>
		<tr>
			 <td  class="label" width="27%" height="22" style="border: 1px solid gray;">Description*</th>
			<td   height="22" style="border: 1px solid gray;"><textarea name="decription" cols="22"><%=DataUtility.getStringData(model.getDecription())%></textarea>
			<font
				color="red"> <%=ServletUtility.getErrorMessage("decription", request)%></font>
			
		</tr>

	</table>
		<p align="center">
			<%=HTMLUtility.getSubmitButton(BaseCtl.OP_SAVE,
					AccessUtility.canAdd(request), request)%>
		</p>
	</center>
</form>

