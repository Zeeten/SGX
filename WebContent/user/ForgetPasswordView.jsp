
<%@page import="in.co.sunrays.common.controller.BaseCtl"%>
<%@page import="in.co.sunrays.wsx.controller.ORSView"%>
<%@page import="in.co.sunrays.common.controller.ForgetPasswordCtl"%>
<%@page import="in.co.sunrays.util.HTMLUtility"%>
<%@page import="in.co.sunrays.util.DataUtility"%>
<%@page import="in.co.sunrays.util.ServletUtility"%>

<jsp:useBean id="model" class="in.co.sunrays.common.model.UserModel"
	scope="request"></jsp:useBean>
<head>
  <link href="css/homePage.css" rel="stylesheet" type="text/css" />
   <title>Forgot Password</title>
   <link rel="shortcut icon" href="images/NewWelcomePage/logoheader.png" type="image/x-icon">
<link rel="icon" href="images/NewWelcomePage/logoheader.png" type="image/x-icon">
   <link rel="stylesheet" href="dynamic/modalbox.css" type="text/css"  media="screen" />

<script type="text/javascript" src="dynamic/modalbox.js"></script>
</head>
<%=HTMLUtility.getSuccessMessage(request)%>
<%=HTMLUtility.getErrorMessage(request)%>
<body>
<form action="<%=ORSView.FORGET_PASSWORD_CTL%>" method="Post">
<table width="100%" border="0" cellspacing="0" cellpadding="0">
  <tr>
    <td><table width="988" border="0" align="center" cellpadding="0" cellspacing="0">
      <tr>
        <td><img src="images/NewWelcomePage/wse.jpg" width="988" height="35" /></td>
      </tr>
      <tr valign="top">
        <td style="background-image:url(images/NewWelcomePage/bg_bene.jpg); background-repeat:repeat-y" height="470px"><table width="988" cellpadding="0" cellspacing="0">
          <tr>
            <td style="background-image:url(images/NewWelcomePage/bene_new2.jpg); background-repeat:no-repeat;" height="65">
              <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<font face="Verdana" size="2"><a href="<%=ORSView.LOGIN_CTL%>" style="color: white;"><b>Home</b></a></font>
              <table width="96%" border="0" align="center" cellpadding="0" cellspacing="0">
            </table></td>
          </tr>
          <tr>
            <td style="background-image:url(images/NewWelcomePage/bene_new.jpg); background-repeat:no-repeat;">
             <table width="300" border="0" align="center" cellpadding="0" cellspacing="0">
              <tr>
                <td height="170"></td>
              </tr>
              <tr valign="top">
                <td height="200" style="background-image:url(images/NewWelcomePage/forgopassword.png); background-repeat:no-repeat;"><table width="90%" border="0" align="center" cellpadding="0" cellspacing="0">
                <br>
                <br>
                  <tr>
                    <td height="40">&nbsp;</td>
                  </tr>
                  <tr>
                    <td><table width="95%" border="0" align="center" cellpadding="0" cellspacing="0">
 <tr>
                        <td class="text_content"><strong style="color:#7e7e7e">Email ID *</strong></td>
                        <td>
						<input type="text" name="login" class="form_bene"
				value=<%=DataUtility.getStringData(request.getParameter("login"))%>>
				<br>
				<font color="red"> <%=ServletUtility.getErrorMessage("login", request)%>
			</font>
                        </td>
                      </tr>
                      <tr>
                        <td class="text_content"></td>
                        <td height="20"></td>
                      </tr>
                  
                        <tr>
   						 <td colspan="2" align="center" height="15" nowrap>
   							  
   							  </td>
					 </tr>
                    <tr>
				    <td colspan="2">
				   <div id="buttonDiv">
				   <input type="submit" name="operation" value="<%=BaseCtl.OP_GO%>" style="margin-left:88px;" class="button">
				   </div>
				</td>
				</tr>
				</table>
				</td>
				</tr>
				</table>
				</td>
			
				</table>
				</td>
				</tr>
				</table>
				</td>
				</tr>
				</table>
				</td>
				</tr>
				<tr>
    <td bgcolor="#dedede"><table width="960" border="0" align="center" cellpadding="0" cellspacing="0" height="50">
      <tr>
        <td><span class="text_footer">&#169 Copyright 2010-2020 WSX-SGX. All rights reserved.</span></td>
        <td><div align="right" class="text_footer"></div></td>
      </tr>
				</table>
				</td>
				</tr>
				</table>
				</body>
</html>
<%-- 	<table>
		<tr>
			<td>Email ID *</td>
			<td><input type="text" name="login" size="50"
				value=<%=DataUtility.getStringData(request.getParameter("login"))%>>
				<span class="error"> <%=ServletUtility.getErrorMessage("login", request)%>
			</span></td>
		</tr>
		<tr>
			<td></td>
			<td><input type="submit" name="operation"
				value="<%=BaseCtl.OP_GO%>"></td>
		</tr>

	</table> --%>


</form>
</body>
