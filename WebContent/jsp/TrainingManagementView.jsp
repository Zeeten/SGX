<%@page import="in.co.sunrays.wsx.model.TrainingModel"%>
<%@page import="java.util.List"%>
<%@page import="in.co.sunrays.wsx.controller.TrainingCtl"%>
<%@page import="java.util.HashMap"%>
<%@page import="in.co.sunrays.util.HTMLUtility"%>
<%@page import="in.co.sunrays.util.DataUtility"%>
<%@page import="in.co.sunrays.util.ServletUtility"%>
<%@page import="in.co.sunrays.wsx.controller.ORSView"%>
<%@page import="in.co.sunrays.common.controller.BaseCtl"%>
<%@page import="java.util.LinkedHashMap"%>
<%@page import="in.co.sunrays.util.AccessUtility"%>

<jsp:useBean id="model"
	class="in.co.sunrays.wsx.model.TrainingModel" scope="request"></jsp:useBean>

<jsp:useBean id="departementList" class="java.util.ArrayList"
	scope="request" />

<%=HTMLUtility.getSuccessMessage(request)%>
<%=HTMLUtility.getErrorMessage(request)%>

<form action="<%=ORSView.TRAININGMANAGEMENT_CTL%>" method="POST">

<center>
<br>
			<p>
<font class="textPMWithOutBorderCommonCenterRedBoldUnderline">Training Form</font>
</p>
	<input type="hidden" name="id" value="<%=model.getId()%>">

<table border="1" cellspacing="0" style="border-collapse: collapse;border: 1px solid gray;" width="90%">
		<tr>
		 <td  class="label" width="27%" height="22" style="border: 1px solid gray;">Name*</td>
			<td   height="22" style="border: 1px solid gray;"><input type="text" name="name"
				value="<%=DataUtility.getStringData(model.getName())%>"></input><font
				color="red"> <%=ServletUtility.getErrorMessage("name", request)%></font></td>
		</tr>
		<tr>
			 <td  class="label" width="27%" height="22" style="border: 1px solid gray;">Description*</td>
			<td   height="22" style="border: 1px solid gray;"><textarea name="description" cols="22"><%=DataUtility.getStringData(model.getDescription())%></textarea>
				<font color="red"> <%=ServletUtility.getErrorMessage("description", request)%></font>
		</tr>
		<tr>
			 <td  class="label" width="27%" height="22" style="border: 1px solid gray;">Sector *</td>
			<td   height="22" style="border: 1px solid gray;"><%=HTMLUtility.getList("departementId",
					model.getDepartementId(), departementList)%></td>

		</tr>
	</table>
		<p align="center">
		<%=HTMLUtility.getSubmitButton(BaseCtl.OP_SAVE,
					AccessUtility.canAdd(request), request)%>
		</p>
</form>