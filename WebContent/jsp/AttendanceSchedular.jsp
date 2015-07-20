<%@page import="in.co.sunrays.util.ServletUtility"%>
<%@page import="in.co.sunrays.util.HTMLUtility"%>
<%@page import="in.co.sunrays.common.controller.BaseCtl"%>
<%@page import="in.co.sunrays.wsx.controller.ORSView"%>
<html>
<%=HTMLUtility.getSuccessMessage(request)%>
<%=HTMLUtility.getErrorMessage(request)%>
<form  action="<%=ORSView.SCHEDULAR_ATTENDENCE_CTL%>" method="POST">
<center>
<br>
			<p>
<font class="textPMWithOutBorderCommonCenterRedBoldUnderline">Attendance Schedular</font>
</p>
<table border="1" cellspacing="0" style="border-collapse: collapse;border: 1px solid gray;" width="90%">
<tr>
			<td  class="label" width="27%" height="22" style="border: 1px solid gray;">
Date</td>
<td   height="22" style="border: 1px solid gray;"> <input
		name="date" placeholder="dd/MM/yyyy" type=text><font
				color="red"> <%=ServletUtility.getErrorMessage("date", request)%></font> </td> 

 </table>
 <p align="center">
 <input type="submit"value="<%=BaseCtl.OP_SAVE%>" style="margin-left:88px;" class="button">
	</p>
 </center>
</form>
</html>