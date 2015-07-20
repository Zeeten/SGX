package in.co.sunrays.wsx.controller;

import in.co.sunrays.util.DataUtility;
import in.co.sunrays.wsx.exception.ApplicationException;
import in.co.sunrays.wsx.model.AppRole;
import in.co.sunrays.wsx.model.AssessorModel;
import in.co.sunrays.wsx.model.AttendenceModel;
import in.co.sunrays.wsx.model.StaffModel;
import in.co.sunrays.wsx.model.StudentModel;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class MarkAttendance extends HttpServlet {

	@Override
	protected void doGet(HttpServletRequest request,
			HttpServletResponse response) throws ServletException, IOException {

		AttendenceModel model = new AttendenceModel();

		model.setStudentId(DataUtility.getLong(request.getParameter("id")));
		int type = DataUtility.getInt(request.getParameter("type"));
		// 1-10
		// String type = request.getParameter("type");
		String code = request.getParameter("code");
		String[] token = code.split("-");
		type = DataUtility.getInt(token[0]);
		int id = DataUtility.getInt(token[1]);

		model.setStudentId(id);

		model.setAttendanceTime(DataUtility.getTimestamp(DataUtility
				.getLong(request.getParameter("time"))));
		model.setReceivedAt(DataUtility.getCurrentTimestamp());

		String firstName = null;
		String lastName = null;
	
		if (type == AppRole.STUDENT) {
			model.setType(type);
			model.setCode(code);
			StudentModel studentModel = new StudentModel();
			studentModel = studentModel.findByPK(id);
			code = studentModel.getCode();
			firstName = studentModel.getFirstName();
			lastName = studentModel.getLastName();
		}
		else if (type == AppRole.ASSESSOR) {
			model.setType(type);
			model.setCode(code);
			AssessorModel assessorModel = new AssessorModel();
			assessorModel = assessorModel.findByPK(id);
			code = assessorModel.getCode();
			firstName = assessorModel.getFirstName();
			lastName = assessorModel.getLastName();
		}else {
			System.out.println("else");
			model.setType(type);
			model.setCode(code);
			StaffModel staffModel = new StaffModel();
			staffModel = staffModel.findByPK(id);
			code = staffModel.getCode();
			firstName = staffModel.getFirstName();
			lastName = staffModel.getLastName();
		}

		long pk = 0;
		boolean success = true;
		// {sucess:"true", error : "no error",id :"89"}

		String json = "";

		try {
			pk = model.add();

			json = "{\"sucess\":true,\"code\":\"" + code
					+ "\",\"firstName\":\"" + firstName
					+ "\",\"lastName\":\"" + lastName
					+ "\",\"error\":\"no error\",\"id\":" + pk + "}";
		} catch (ApplicationException e) {
			json = "{\"sucess\":false,\"error\":\"" + e.getMessage()
					+ "\",\"id\" :-1}";
		}

		response.setContentType("application/json");

		PrintWriter out = response.getWriter();
		out.print(json);
		out.close();
	}

}
