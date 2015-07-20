<%@page import="java.util.ResourceBundle"%>
<%@page import="in.co.sunrays.wsx.controller.ORSView"%>
<%@page import="in.co.sunrays.wsx.model.NoticeModel"%>
<%@page import="java.util.Iterator"%>
<%@page import="java.util.List"%>
<%@page import="in.co.sunrays.common.controller.LoginCtl"%>
<%@page import="in.co.sunrays.util.DataUtility"%>
<%@page import="in.co.sunrays.util.HTMLUtility"%>
<%@page import="in.co.sunrays.util.ServletUtility"%>
<head>
   <meta http-equiv="content-type" content="text/html; charset=UTF-8">
   <link href="css/homePage.css" rel="stylesheet" type="text/css" />
   <title>Login</title>
   <link rel="shortcut icon" href="images/NewWelcomePage/logoheader.png" type="image/x-icon">
<link rel="icon" href="images/NewWelcomePage/logoheader.png" type="image/x-icon">
   <link rel="stylesheet" href="dynamic/modalbox.css" type="text/css"  media="screen" />

<script type="text/javascript" src="dynamic/modalbox.js"></script>
</head>
<jsp:useBean id="model" class="in.co.sunrays.common.model.UserModel"
	scope="request"></jsp:useBean>

 <body>
 <form action="<%=ORSView.LOGIN_CTL%>" method="POST">
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
              

                <td height="200" style="background-image:url(images/NewWelcomePage/bene_form_bg.jpg); background-repeat:no-repeat;"><table width="90%" border="0" align="center" cellpadding="0" cellspacing="0">
                  <tr>
                    <td height="40">&nbsp;</td>
                  </tr>
                  <tr>
                        
                    <td><table width="95%" border="0" align="center" cellpadding="0" cellspacing="0">
 <tr>
  <%=HTMLUtility.getSuccessMessage(request)%>
<font
						color="red"><%=HTMLUtility.getErrorMessage(request)%></font>
                        <td class="text_content"><strong style="color:#7e7e7e">Login ID</strong></td>
                        <td>
                        <input type="text" name="login"  class="form_bene"
						value="<%=DataUtility.getStringData(model.getLogin())%>">
						<br>
						<font
						color="red"> <%=ServletUtility.getErrorMessage("login", request)%></font>
                        </td>
                      </tr>
                      <tr>
                        <td class="text_content"></td>
                        <td height="20"></td>
                      </tr>
                      
                      <tr>
                        <td class="text_content"><strong style="color:#7e7e7e">Password</strong></td>
                        <td>
                      <input type="password" name="password" class="form_bene"
						value="<%=DataUtility.getStringData(model.getPassword())%>">
						<br>
						<font
						color="red"> <%=ServletUtility.getErrorMessage("password", request)%></font>
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
				   <input type="submit" name="operation" value="<%=LoginCtl.OP_SIGN_IN%>" style="margin-left:88px;" class="button">
				   </div>
				</td>
				</tr>
				</table>
				</td>
				</tr>
				</table>
				</td>
				</form>
				 <tr>
                 <td class="text_content" align="center">
                 
                 <div align="center">
                  <a href="<%=ORSView.FORGET_PASSWORD_CTL%>" title="Forget password" 
				   style="color: #b01d24;">Forgot Password?</a>
				    </div>
				</td>
				</tr>
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
				
				


<%-- <tr>
	<td width="30%" style="border-style: none;">

		<form action="<%=ORSView.LOGIN_CTL%>" method="POST">

			<table>
				<tr>
					<th>LoginId*</th>
					<td><input type="text" name="login" size=30
						value="<%=DataUtility.getStringData(model.getLogin())%>"><font
						color="red"> <%=ServletUtility.getErrorMessage("login", request)%></font></td>
				</tr>
				<tr>
					<th>Password*</th>
					<td><input type="password" name="password" size=30
						value="<%=DataUtility.getStringData(model.getPassword())%>"><font
						color="red"> <%=ServletUtility.getErrorMessage("password", request)%></font></td>
				</tr>
				<tr>
					<td colspan="2" align="right"><input type="submit" name="operation"
						value="<%=LoginCtl.OP_SIGN_IN%>"></td>
				</tr>
			</table>
		</form> <a href="<%=ORSView.FORGET_PASSWORD_CTL%>">Forget my password</a> --%>
		</body>