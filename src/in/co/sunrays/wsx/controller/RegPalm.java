package in.co.sunrays.wsx.controller;

import in.co.sunrays.util.DataUtility;
import in.co.sunrays.wsx.model.AppRole;
import in.co.sunrays.wsx.model.AssessorModel;
import in.co.sunrays.wsx.model.StaffModel;
import in.co.sunrays.wsx.model.StudentModel;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class RegPalm
 */
@WebServlet("/RegPalm")
public class RegPalm extends HttpServlet {

	private static final long serialVersionUID = 1L;

	protected void doGet(HttpServletRequest request,
			HttpServletResponse response) throws ServletException, IOException {
		// 1-10
		String type = request.getParameter("type");
		String code = request.getParameter("code");
		String[] token = code.split("-");
		int role = DataUtility.getInt(token[0]);
		int id = DataUtility.getInt(token[1]);

		String json = "";

		if (AppRole.STUDENT == role) {

			StudentModel model = new StudentModel();
			model.setId(id);
			model.updatePalmStatus("Y", type);
			model = model.findByPK(id);
			json = "{success : 'true', error :''}";

		} else if (AppRole.STAFF == role) {

			StaffModel model = new StaffModel();
			model.setId(id);
			model.updatePalmStatus("Y", type);
			model = model.findByPK(id);
			json = "{success : 'true', error :''}";
		}else if (AppRole.ASSESSOR == role) {

			AssessorModel model = new AssessorModel();
			model.setId(id);
			model.updatePalmStatus("Y", type);
			model = model.findByPK(id);
			json = "{success : 'true', error :''}";
		} else {
			json = "{success : 'false', error : 'This is error message'}";
		}
		response.setContentType("application/json");
		PrintWriter out = response.getWriter();
		out.print(json);
		out.close();
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doPost(HttpServletRequest request,
			HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
	}

}
