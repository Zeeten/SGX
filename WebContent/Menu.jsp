<%@page import="in.co.sunrays.wsx.controller.ORSView"%>
<%@page import="in.co.sunrays.wsx.model.AppRole"%>
<%@page import="in.co.sunrays.common.model.RoleModel"%>
<%@page import="in.co.sunrays.util.ServletUtility"%>
<%@page import="in.co.sunrays.common.model.UserModel"%>
<%
	long roleId = ServletUtility.getRole(request);
	if (AppRole.ADMIN == roleId) {
%>
<ul>
	<li><a href="/SGX/WelcomeCtl">Home</a></li>
	<li><a href="javascript:void(0)"
		style="cursor: default; padding-right: 23px;">Master Data<img
			src="<%=ORSView.APP_CONTEXT%>/down.gif" class="downarrowclass"
			style="border: 0;"></a>
		<ul
			style="top: 24px; display: none; visibility: visible; left: 0px; width: 171px;">
			<li><a href="/SGX/ctl/UserCtl">New User</a></li>
			<li><a href="/SGX/ctl/StaffCtl">New Trainer</a></li>
			<li><a href="/SGX/ctl/StudentCtl">New Trainee</a></li>
			<li><a href="/SGX/ctl/AssessorCtl">New Assessor</a></li>
			<li><a href="/SGX/ctl/AttendenceCtl">Add Attendance</a></li>

		</ul></li>

	<li><a href="javascript:void(0)"
		style="cursor: default; padding-right: 23px;">Reports<img
			src="<%=ORSView.APP_CONTEXT%>/down.gif" class="downarrowclass"
			style="border: 0;"></a>
		<ul
			style="top: 24px; display: none; visibility: visible; left: 0px; width: 171px;">
			<li><a href="/SGX/ctl/UserListCtl">User List</a></li>
			<li><a href="/SGX/ctl/DepartementListCtl">Sector List</a></li>
			<li><a href="/SGX/ctl/TrainingManagementListCtl">Training
					List </a></li>
			<li><a href="/SGX/ctl/StaffListCtl">Trainer List</a></li>
			<li><a href="/SGX/ctl/StudentListCtl">Trainee List</a></li>
				<li><a href="/SGX/ctl/AssessorListCtl">Assessor List</a></li>
			<li><a href="/SGX/ctl/AttendenceListCtl">Attendance Log</a></li>
			<li><a href="/SGX/ctl/StudentAttendanceListCtl">Attendance
					Sheet</a></li>
			<li><a href="/SGX/ctl/AttendanceSheetListCtl">Attendance
					Report</a></li>

		</ul></li>

	<li><a href="javascript:void(0)"
		style="cursor: default; padding-right: 23px;">My Account<img
			src="<%=ORSView.APP_CONTEXT%>/down.gif" class="downarrowclass"
			style="border: 0;"></a>
		<ul
			style="top: 24px; display: none; visibility: visible; left: 0px; width: 171px;">

			<li><a href="/SGX/ctl/MyProfileCtl">MyProfile</a></li>
			<li><a href="/SGX/ctl/CollegeCtl">My Training Center</a></li>
			<li><a href="/SGX/ChangePasswordCtl">Change Password</a></li>
		</ul></li>
</ul>


<%
	} else if (AppRole.TRAINING_PROVIDER == roleId) {
%>
<ul>
	<li><a href="/SGX/WelcomeCtl">Home</a></li>
	<li><a href="javascript:void(0)"
		style="cursor: default; padding-right: 23px;">Master Data<img
			src="<%=ORSView.APP_CONTEXT%>/down.gif" class="downarrowclass"
			style="border: 0;"></a>
		<ul
			style="top: 24px; display: none; visibility: visible; left: 0px; width: 171px;">
			<li><a href="/SGX/ctl/UserCtl">New User</a></li>
			<li><a href="/SGX/ctl/StaffCtl">New Trainer</a></li>
			<li><a href="/SGX/ctl/StudentCtl">New Trainee</a></li>
			<li><a href="/SGX/ctl/AssessorCtl">New Assessor</a></li>
			<li><a href="/SGX/ctl/AttendenceCtl">Add Attendance</a></li>

		</ul></li>

	<li><a href="javascript:void(0)"
		style="cursor: default; padding-right: 23px;">Reports<img
			src="<%=ORSView.APP_CONTEXT%>/down.gif" class="downarrowclass"
			style="border: 0;"></a>
		<ul
			style="top: 24px; display: none; visibility: visible; left: 0px; width: 171px;">
			<li><a href="/SGX/ctl/UserListCtl">User List</a></li>
			<li><a href="/SGX/ctl/DepartementListCtl">Sector List</a></li>
			<li><a href="/SGX/ctl/TrainingManagementListCtl">Training
					List </a></li>
			<li><a href="/SGX/ctl/StaffListCtl">Trainer List</a></li>
			<li><a href="/SGX/ctl/StudentListCtl">Trainee List</a></li>
				<li><a href="/SGX/ctl/AssessorListCtl">Assessor List</a></li>
			<li><a href="/SGX/ctl/AttendenceListCtl">Attendance Log</a></li>
			<li><a href="/SGX/ctl/StudentAttendanceListCtl">Attendance
					Sheet</a></li>
			<li><a href="/SGX/ctl/AttendanceSheetListCtl">Attendance
					Report</a></li>

		</ul></li>

	<li><a href="javascript:void(0)"
		style="cursor: default; padding-right: 23px;">My Account<img
			src="<%=ORSView.APP_CONTEXT%>/down.gif" class="downarrowclass"
			style="border: 0;"></a>
		<ul
			style="top: 24px; display: none; visibility: visible; left: 0px; width: 171px;">

			<li><a href="/SGX/ctl/MyProfileCtl">MyProfile</a></li>
			<li><a href="/SGX/ctl/CollegeCtl">My Training Center</a></li>
			<li><a href="/SGX/ChangePasswordCtl">Change Password</a></li>
		</ul></li>
</ul>



<%
	} else if (AppRole.SUPER_ADMIN == roleId) {
%>

<ul>
	<li><a href="/SGX/WelcomeCtl">Home</a></li>
	<li><a href="javascript:void(0)"
		style="cursor: default; padding-right: 23px;">Master Data<img
			src="<%=ORSView.APP_CONTEXT%>/down.gif" class="downarrowclass"
			style="border: 0;"></a>
		<ul
			style="top: 24px; display: none; visibility: visible; left: 0px; width: 171px;">
		<li><a href="/SGX/ctl/PrincipalEmployerCtl">New Principal Employer</a></li>
			<li><a href="/SGX/ctl/UserCtl">New User</a></li>
			<li><a href="/SGX/ctl/RoleCtl">New Role</a></li>
			<li><a href="/SGX/ctl/DepartementCtl">New Sector</a></li>
			<li><a href="/SGX/ctl/TrainingManagementCtl">New Training </a></li>
			<li><a href="/SGX/ctl/CollegeCtl">New Training Center</a></li>

		</ul></li>
	<li><a href="javascript:void(0)"
		style="cursor: default; padding-right: 23px;">Reports<img
			src="<%=ORSView.APP_CONTEXT%>/down.gif" class="downarrowclass"
			style="border: 0;"></a>
		<ul
			style="top: 24px; display: none; visibility: visible; left: 0px; width: 171px;">
			<li><a href="/SGX/ctl/PrincipalEmployerListCtl">Principal Employer List</a></li>
			<li><a href="/SGX/ctl/UserListCtl">User List</a></li>
			<li><a href="/SGX/ctl/RoleListCtl">Role List</a></li>
			<li><a href="/SGX/ctl/DepartementListCtl">Sector List </a></li>
			<li><a href="/SGX/ctl/TrainingManagementListCtl">Training
					List</a></li>
			<li><a href="/SGX/ctl/CollegeListCtl">Training Center List</a></li>
			<li><a href="/SGX/ctl/StaffListCtl">Trainer List</a></li>
			<li><a href="/SGX/ctl/StudentListCtl">Trainee List</a></li>
			<li><a href="/SGX/ctl/AttendenceListCtl">Attendance Log </a></li>
			<li><a href="/SGX/ctl/StudentAttendanceListCtl">Attendance
					Sheet</a></li>
			<li><a href="/SGX/ctl/AttendanceSheetListCtl">Attendance
					Report</a></li>


		</ul></li>

	<li><a href="javascript:void(0)"
		style="cursor: default; padding-right: 23px;">My Account<img
			src="<%=ORSView.APP_CONTEXT%>/down.gif" class="downarrowclass"
			style="border: 0;"></a>
		<ul
			style="top: 24px; display: none; visibility: visible; left: 0px; width: 171px;">
			<li><a href="/SGX/ctl/MyProfileCtl">MyProfile</a></li>
			<li><a href="/SGX/ChangePasswordCtl">Change Password</a></li>
		</ul></li>
	<li><a href="javascript:void(0)"
		style="cursor: default; padding-right: 23px;">Test<img
			src="<%=ORSView.APP_CONTEXT%>/down.gif" class="downarrowclass"
			style="border: 0;"></a>
		<ul
			style="top: 24px; display: none; visibility: visible; left: 0px; width: 171px;">
			<li><a target="_blank" href="/SGX/GetRegInfo.jsp">Get User
					Registration</a></li>
			<li><a target="_blank" href="/SGX/MarkAtt.jsp">User
					Attendence</a></li>
			<li><a href="/SGX/AttendanceSchedular">Attendance Schedular</a></li>
			<li><a href="/SGX/ctl/SchedularStatusListCtl">Schedular
					Status</a></li>
			<li><a href="/SGX/ctl/ErrorMessageListCtl">Error Log</a></li>
			<li><a target="_blank" href="/SGX/RegPalm.jsp">Registration
					Palm</a></li>
		</ul></li>
</ul>




<%
	} else if (AppRole.PRINCIPAL_EMPLOYER== roleId) {
%>
<ul>


	<li><a href="/SGX/WelcomeCtl">Home</a></li>
	<li><a href="javascript:void(0)"
		style="cursor: default; padding-right: 23px;">Master Data<img
			src="<%=ORSView.APP_CONTEXT%>/down.gif" class="downarrowclass"
			style="border: 0;"></a>
		<ul
			style="top: 24px; display: none; visibility: visible; left: 0px; width: 171px;">
			<li><a href="/SGX/ctl/UserCtl">New User</a></li>
			<li><a href="/SGX/ctl/CollegeCtl">New Training Center</a></li>
		</ul></li>

	<li><a href="javascript:void(0)"
		style="cursor: default; padding-right: 23px;">Reports<img
			src="<%=ORSView.APP_CONTEXT%>/down.gif" class="downarrowclass"
			style="border: 0;"></a>
		<ul
			style="top: 24px; display: none; visibility: visible; left: 0px; width: 171px;">
		<li><a href="/SGX/ctl/UserListCtl">User List</a></li>
		
			
<li><a href="/SGX/ctl/CollegeListCtl">Training Center List</a></li>
		
		</ul></li>
	<li><a href="javascript:void(0)"
		style="cursor: default; padding-right: 23px;">My Account<img
			src="<%=ORSView.APP_CONTEXT%>/down.gif" class="downarrowclass"
			style="border: 0;"></a>
		<ul
			style="top: 24px; display: none; visibility: visible; left: 0px; width: 171px;">
			<li><a href="/SGX/ctl/MyProfileCtl">MyProfile</a></li>
			<li><a href="/SGX/ChangePasswordCtl">Change Password</a></li>
		</ul></li>
</ul>






<%
	} else if (AppRole.STAFF == roleId) {
%>
<ul>


	<li><a href="/SGX/WelcomeCtl">Home</a></li>
	<li><a href="javascript:void(0)"
		style="cursor: default; padding-right: 23px;">Master Data<img
			src="<%=ORSView.APP_CONTEXT%>/down.gif" class="downarrowclass"
			style="border: 0;"></a>
		<ul
			style="top: 24px; display: none; visibility: visible; left: 0px; width: 171px;">
			<li><a href="/SGX/ctl/StudentCtl">New Trainee</a></li>
			<li><a href="/SGX/ctl/AttendenceCtl">Add Attendance</a></li>
		</ul></li>

	<li><a href="javascript:void(0)"
		style="cursor: default; padding-right: 23px;">Reports<img
			src="<%=ORSView.APP_CONTEXT%>/down.gif" class="downarrowclass"
			style="border: 0;"></a>
		<ul
			style="top: 24px; display: none; visibility: visible; left: 0px; width: 171px;">
			<li><a href="/SGX/ctl/DepartementListCtl">Sector List </a></li>
			<li><a href="/SGX/ctl/TrainingManagementListCtl">Training
					List </a></li>

			<li><a href="/SGX/ctl/StudentListCtl">Trainee List</a></li>
			<li><a href="/SGX/ctl/StaffListCtl">Trainer List</a></li>
			<li><a href="/SGX/ctl/AttendenceListCtl">Attendance Log</a></li>

			<li><a href="/SGX/ctl/StudentAttendanceListCtl">Attendance
					Sheet</a></li>
		</ul></li>
	<li><a href="javascript:void(0)"
		style="cursor: default; padding-right: 23px;">My Account<img
			src="<%=ORSView.APP_CONTEXT%>/down.gif" class="downarrowclass"
			style="border: 0;"></a>
		<ul
			style="top: 24px; display: none; visibility: visible; left: 0px; width: 171px;">
			<li><a href="/SGX/ctl/MyProfileCtl">MyProfile</a></li>
			<li><a href="/SGX/ChangePasswordCtl">Change Password</a></li>
		</ul></li>
</ul>

<%
	} else if (AppRole.STUDENT == roleId) {
%>
<ul>
	<li><a href="/SGX/WelcomeCtl">Home</a></li>
	<li><a href="javascript:void(0)"
		style="cursor: default; padding-right: 23px;">Reports<img
			src="<%=ORSView.APP_CONTEXT%>/down.gif" class="downarrowclass"
			style="border: 0;"></a>
		<ul
			style="top: 24px; display: none; visibility: visible; left: 0px; width: 171px;">
			<li><a href="/SGX/ctl/StudentListCtl">Trainee List</a></li>
			<li><a href="/SGX/ctl/AttendenceListCtl">Attendance Log</a></li>
		</ul></li>
	<li><a href="javascript:void(0)"
		style="cursor: default; padding-right: 23px;">My Account<img
			src="<%=ORSView.APP_CONTEXT%>/down.gif" class="downarrowclass"
			style="border: 0;"></a>
		<ul
			style="top: 24px; display: none; visibility: visible; left: 0px; width: 171px;">
			<li><a href="/SGX/ctl/MyProfileCtl">MyProfile</a></li>
			<li><a href="/SGX/ChangePasswordCtl">Change Password</a></li>
		</ul></li>
</ul>

<%
	}
%>




