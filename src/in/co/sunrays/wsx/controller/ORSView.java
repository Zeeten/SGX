package in.co.sunrays.wsx.controller;

/**
 * Contains ORS View and Controller URI
 * 
 * @author SUNRAYS Technologies
 * @version 1.0
 * @Copyright (c) SUNRAYS Technologies
 */

public interface ORSView {

	public String APP_CONTEXT = "/SGX";

	public String PAGE_FOLDER = "/jsp";
	public String COMMON_FOLDER = "/common";
	public String USER_FOLDER = "/user";
	
	public String IMG_FOLDER = APP_CONTEXT + "/images";
	public String CSS_FOLDER = APP_CONTEXT + "/css";
	public String JS_FOLDER = APP_CONTEXT + "/js";
	
	// generic Views
	public String ERROR_VIEW = COMMON_FOLDER + "/Error.jsp";
	public String JAVA_DOC_VIEW = APP_CONTEXT + "/doc/index.html";
	public String LAYOUT_VIEW = "/BaseLayout.jsp";
	public String COMMON_ATTRIBUTES = COMMON_FOLDER + "/CommonAttributes.jsp";

	// User Folder
	public String USER_VIEW = USER_FOLDER + "/UserView.jsp";
	public String USER_LIST_VIEW = USER_FOLDER + "/UserListView.jsp";
	public String ATTENDANCE_LIST_EXCEL_VIEW = PAGE_FOLDER + "/AttendenceListExcel.jsp";
	public String STUDENTATTENDANCE_LIST_EXCEL = PAGE_FOLDER + "/StudentAttendanceListExcel.jsp";
	public String USER_REGISTRATION_VIEW = USER_FOLDER
			+ "/UserRegistrationView.jsp";
	public String MY_PROFILE_VIEW = USER_FOLDER + "/MyProfileView.jsp";
	public String FORGET_PASSWORD_VIEW = USER_FOLDER
			+ "/ForgetPasswordView.jsp";
	public String CHANGE_PASSWORD_VIEW = USER_FOLDER
			+ "/ChangePasswordView.jsp";
	public String LOGIN_VIEW = USER_FOLDER + "/LoginView.jsp";
	
	
	//Common View
	public String WELCOME_VIEW = COMMON_FOLDER + "/Welcome.jsp";
	
	// Role View
	public String ROLE_VIEW = USER_FOLDER + "/RoleView.jsp";
	public String ROLE_LIST_VIEW = USER_FOLDER + "/RoleListView.jsp";

	// Marksheet Views
	public String MARKSHEET_VIEW = PAGE_FOLDER + "/MarksheetView.jsp";
	public String MARKSHEET_LIST_VIEW = PAGE_FOLDER + "/MarksheetListView.jsp";
	public String GET_MARKSHEET_VIEW = PAGE_FOLDER + "/GetMarksheetView.jsp";
	public String COLLEGE_VIEW = PAGE_FOLDER + "/CollegeView.jsp";
	public String COLLEGE_LIST_VIEW = PAGE_FOLDER + "/CollegeListView.jsp";
	public String NOTICE_LIST_VIEW = PAGE_FOLDER + "/NoticeListView.jsp";
	public String NOTICE_VIEW = PAGE_FOLDER + "/NoticeView.jsp";
	public String STUDENT_VIEW = PAGE_FOLDER + "/StudentView.jsp";
	public String STUDENT_LIST_VIEW = PAGE_FOLDER + "/StudentListView.jsp";
	public String STAFF_VIEW = PAGE_FOLDER + "/StaffView.jsp";
	public String STAFF_LIST_VIEW = PAGE_FOLDER + "/StaffListView.jsp";
	public String GETREGISTRATION_VIEW = PAGE_FOLDER + "/GetRegInfo.jsp";

	public String MARKSHEET_MERIT_LIST_VIEW = PAGE_FOLDER
			+ "/MarksheetMeritListView.jsp";

	public String COMMENT_VIEW = PAGE_FOLDER + "/CommentView.jsp";
	public String COMMENT_LIST_VIEW = PAGE_FOLDER + "/CommentListView.jsp";
	public String ATTENDENCE_VIEW = PAGE_FOLDER + "/AttendenceView.jsp";
	public String SCHEDULAR_ATTENDENCE_VIEW = PAGE_FOLDER + "/AttendanceSchedular.jsp";
	public String ATTENDENCE_LIST_VIEW = PAGE_FOLDER
			+ "/AttendenceListView.jsp";
	public String SCHEDULARSTATUS_LIST_VIEW = PAGE_FOLDER
			+ "/SchedularStatusListView.jsp";
	public String ERRORMESSAGE_LIST_VIEW = PAGE_FOLDER
			+ "/ErrorMessageListView.jsp";
	public String GETATTENDENCE_VIEW = PAGE_FOLDER + "/GetAttendenceView.jsp";
	public String ERESOURCE_LINK_VIEW = PAGE_FOLDER + "/EResourceLinkView.jsp";
	public String TIMETABLE_VIEW = PAGE_FOLDER + "/TimeTableView.jsp";
	public String TIMETABLE_LIST_VIEW = PAGE_FOLDER + "/TimeTableListView.jsp";
	public String DEPARTEMENT_VIEW = PAGE_FOLDER + "/DepartementView.jsp";
	public String DEPARTEMENT_LIST_VIEW = PAGE_FOLDER
			+ "/DepartementiListView.jsp";
	public String TRAININGMANAGEMENT_VIEW = PAGE_FOLDER + "/TrainingManagementView.jsp";
	
	public String TRAININGMANAGEMENT_LIST_VIEW = PAGE_FOLDER + "/TrainingManagementListView.jsp";
	
	public String STUDENTATTENDANCE_VIEW = PAGE_FOLDER + "/StudentAttendanceView.jsp";
	public String STUDENTATTENDANCE_LIST_VIEW = PAGE_FOLDER + "/StudentAttendanceListView.jsp";
	public String ATTENDANCESHEET_LIST_VIEW = PAGE_FOLDER + "/AttendanceSheetListView.jsp";
	public String ASSESSOR_VIEW = PAGE_FOLDER + "/AssessorView.jsp";
	public String ASSESSOR_LIST_VIEW = PAGE_FOLDER + "/AssessorListView.jsp";
	public String PRINCIPAL_EMPLOYER_VIEW = PAGE_FOLDER + "/PrincipalEmployerView.jsp";
	public String PRINCIPAL_EMPLOYER_LIST_VIEW = PAGE_FOLDER + "/PrincipalEmployerListView.jsp";
	// generic Controller
	public String ERROR_CTL = "/ErrorCtl";
	public String WELCOME_CTL = APP_CONTEXT + "/LoginCtl";

	// User Controller

	// Without Login
	public String LOGIN_CTL = APP_CONTEXT + "/LoginCtl";
	public String LOGOUT_CTL = APP_CONTEXT + "/LoginCtl";
	public String USER_REGISTRATION_CTL = APP_CONTEXT + "/UserRegistrationCtl";
	public String FORGET_PASSWORD_CTL = APP_CONTEXT + "/ForgetPasswordCtl";
	public String CHANGE_PASSWORD_CTL = APP_CONTEXT + "/ChangePasswordCtl";

	// After Login
	public String USER_CTL = APP_CONTEXT + "/ctl/UserCtl";
	public String USER_LIST_CTL = APP_CONTEXT + "/ctl/UserListCtl";
	public String MY_PROFILE_CTL = APP_CONTEXT + "/ctl/MyProfileCtl";

	// Role Controller
	public String ROLE_CTL = APP_CONTEXT + "/ctl/RoleCtl";
	public String ROLE_LIST_CTL = APP_CONTEXT + "/ctl/RoleListCtl";

	public String NOTICE_LIST_CTL = APP_CONTEXT + "/ctl/NoticeListCtl";
	public String NOTICE_CTL = APP_CONTEXT + "/ctl/NoticeCtl";
	public String COMMENT_CTL = APP_CONTEXT + "/ctl/CommentCtl";
	public String COMMENT_LIST_CTL = APP_CONTEXT + "/ctl/CommentListCtl";
	public String ATTENDENCE_CTL = APP_CONTEXT + "/ctl/AttendenceCtl";
	public String SCHEDULAR_ATTENDENCE_CTL = APP_CONTEXT + "/AttendanceSchedular";
	public String TRAINERATTENDENCE_CTL = APP_CONTEXT + "/ctl/TrainerAttendenceCtl";
	public String ATTENDENCE_LIST_CTL = APP_CONTEXT
			+ "/ctl/AttendenceListCtl";
	public String SCHEDULARSTATUS_LIST_CTL = APP_CONTEXT
			+ "/ctl/SchedularStatusListCtl";
	public String ERRORMESSAGE_LIST_CTL = APP_CONTEXT
			+ "/ctl/ErrorMessageListCtl";
	public String GETATTENDENCE_CTL = APP_CONTEXT + "/ctl/GetAttendenceCtl";
	public String ERESOURCE_LINK_CTL = APP_CONTEXT + "/ctl/EResourceLinkCtl";
	public String TIMETABLE_CTL = APP_CONTEXT + "/ctl/TimeTableCtl";
	public String TIMETABLE_LIST_CTL = APP_CONTEXT + "/ctl/TimeTableListCtl";
	public String Download_CTL = APP_CONTEXT + "/ctl/DownloadCtl";

	public String STUDENT_LIST_CTL = APP_CONTEXT + "/ctl/StudentListCtl";
	public String STUDENT_CTL = APP_CONTEXT + "/ctl/StudentCtl";

	public String STAFF_CTL = APP_CONTEXT + "/ctl/StaffCtl";
	public String STAFF_LIST_CTL = APP_CONTEXT + "/ctl/StaffListCtl";
	public String COLLEGE_CTL = APP_CONTEXT + "/ctl/CollegeCtl";
	public String COLLEGE_LIST_CTL = APP_CONTEXT + "/ctl/CollegeListCtl";

	public String DEPARTEMENT_CTL = APP_CONTEXT + "/ctl/DepartementCtl";
	public String DEPARTEMENT_LIST_CTL = APP_CONTEXT + "/ctl/DepartementListCtl";

	public String TRAININGMANAGEMENT_CTL = APP_CONTEXT + "/ctl/TrainingManagementCtl";
	public String TRAININGMANAGEMENT_LIST_CTL = APP_CONTEXT + "/ctl/TrainingManagementListCtl";
	
	public String STUDENTATTENDANCE_CTL = APP_CONTEXT + "/ctl/StudentAttendanceCtl";
	public String ATTENDANCESHEET_LIST_CTL = APP_CONTEXT + "/ctl/AttendanceSheetListCtl";
	public String STUDENTATTENDANCEL_LIST_CTL = APP_CONTEXT + "/ctl/StudentAttendanceListCtl";
	
	public String ASSESSOR_CTL = APP_CONTEXT + "/ctl/AssessorCtl";
	public String ASSESSOR_LIST_CTL = APP_CONTEXT + "/ctl/AssessorListCtl";
	public String PRINCIPAL_EMPLOYER_CTL = APP_CONTEXT + "/ctl/PrincipalEmployerCtl";
	public String PRINCIPAL_EMPLOYER_LIST_CTL = APP_CONTEXT + "/ctl/PrincipalEmployerListCtl";
	public String FILE_UPLOAD_CTL = APP_CONTEXT + "/FileUpload";	
	
}