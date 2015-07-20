package in.co.sunrays.wsx.controller;

import in.co.sunrays.common.controller.BaseCtl;
import in.co.sunrays.common.model.BaseModel;
import in.co.sunrays.common.model.RoleModel;
import in.co.sunrays.common.model.UserModel;
import in.co.sunrays.util.AccessUtility;
import in.co.sunrays.util.DataUtility;
import in.co.sunrays.util.DataValidator;
import in.co.sunrays.util.PropertyReader;
import in.co.sunrays.util.ServletUtility;
import in.co.sunrays.wsx.exception.ApplicationException;
import in.co.sunrays.wsx.model.AppRole;
import in.co.sunrays.wsx.model.StudentAttendanceModel;
import in.co.sunrays.wsx.model.StudentModel;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.log4j.Logger;

/**
 * Student functionality Controller. Performs operation for add, update, delete
 * and get Student
 * 
 * @author SUNRAYS Technologies
 * @version 1.0
 * @Copyright (c) SUNRAYS Technologies
 */

public class StudentAttendanceCtl extends BaseCtl {

	/**
	 * Logger to log the messages.
	 */
	private static Logger log = Logger.getLogger(StudentCtl.class);

	/**
	 * Loads pre-loaded data like Dropdown List.
	 */
	@Override
	protected void preload(HttpServletRequest request) {

		StudentModel model = new StudentModel();

		try {
			List list = model.search();
			request.setAttribute("studentList", list);
		} catch (ApplicationException e) {
			log.error(e);
		}

		RoleModel roleModel = new RoleModel();
		List deptList = roleModel.search();
		request.setAttribute("roleList", deptList);

	}

	/**
	 * Validates Input data
	 */
	@Override
	protected boolean validate(HttpServletRequest request) {

		log.debug("StudentAttendanceCtl Method validate Started");

		boolean pass = true;

		if (DataValidator.isNull(request.getParameter("name"))) {
			request.setAttribute("name",
					PropertyReader.getValue("error.require", "Name"));
			pass = false;
		}
		if (DataValidator.isNull(request.getParameter("date"))) {
			request.setAttribute("date",
					PropertyReader.getValue("error.require", "Date"));
			pass = false;
		}

		
		
		log.debug("StudentAttendanceCtl Method validate Ended    " + pass);

		return pass;
	}

	@Override
	protected BaseModel populateModel(HttpServletRequest request) {

		log.debug("StudentAttendanceCtl Method populatebean Started");

		StudentAttendanceModel model = new StudentAttendanceModel();

		model.setId(DataUtility.getLong(request.getParameter("id")));

		// bean.setRoleId(RoleBean.STUDENT);
		model.setCode(DataUtility.getString(request.getParameter("code")));
		model.setRoleId(DataUtility.getLong(request.getParameter("roleId")));
		model.setStudentId(DataUtility.getLong(request
				.getParameter("studentId")));
		model.setName(DataUtility.getString(request.getParameter("name")));
		model.setAttendance(DataUtility.getString(request
				.getParameter("attendance")));
		model.setDate(DataUtility.getDate(request
				.getParameter("date")));
		//model.setIn1(DataUtility.getTimestamp(request.getParameter("in1")));
		//model.setIn1(DataUtility.getTimestamp(request.getParameter("in2")));
		//model.setIn1(DataUtility.getTimestamp(request.getParameter("in3")));
		//model.setIn1(DataUtility.getTimestamp(request.getParameter("in4")));
		//model.setOut1(DataUtility.getTimestamp(request.getParameter("out1")));
		//model.setOut2(DataUtility.getTimestamp(request.getParameter("out2")));
		//model.setOut3(DataUtility.getTimestamp(request.getParameter("out3")));
		//model.setOut4(DataUtility.getTimestamp(request.getParameter("out4")));

		//model.setPresentHours(DataUtility.getFloat(request.getParameter("presentHours")));

				
		populateModel(model, request);

		log.debug("StudentAttendanceCtl Method populatemodel Ended");

		return model;
	}

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doPost(HttpServletRequest request,
			HttpServletResponse response) throws ServletException, IOException {

		log.debug("StudentAttendanceCtl Method doGet Started");

		String op = DataUtility.getString(request.getParameter("operation"));

		// get model
		StudentAttendanceModel model = (StudentAttendanceModel) populateModel(request);

		long id = model.getId();

		if (OP_SAVE.equalsIgnoreCase(op)) {
			try {
				if (id > 0) {
					model.update();
				} else {
					long pk = model.add();
					model.setId(pk);
				}
				ServletUtility.setModel(model, request);
				ServletUtility.setSuccessMessage("Data is successfully saved",
						request);
			} catch (ApplicationException e) {
				log.error(e);
				ServletUtility.handleException(e, request, response);
				return;
			}

		} else if (OP_DELETE.equalsIgnoreCase(op)) {
			try {
				model.delete();
				ServletUtility.redirect(ORSView.STUDENTATTENDANCEL_LIST_CTL, request,
						response);
				return;
			} catch (ApplicationException e) {
				log.error(e);
				ServletUtility.handleException(e, request, response);
				return;
			}
		} else {
			if (id > 0 || op != null) {
				StudentAttendanceModel model1;
				try {
					model1 = model.findByPK(id);
					ServletUtility.setModel(model1, request);
				} catch (ApplicationException e) {

					ServletUtility.handleException(e, request, response);
					return;
				}
			}
		}
		ServletUtility.forwardView(ORSView.STUDENTATTENDANCE_VIEW, request,
				response);
		log.debug("StudentAttendanceCtl Method doGet Ended");
	}

	/**
	 * Contains Display Logic
	 */
	protected void doGet(HttpServletRequest request,
			HttpServletResponse response) throws ServletException, IOException {
		Long id = DataUtility.getLong(request.getParameter("id"));

		StudentAttendanceModel model = new StudentAttendanceModel();
		UserModel userModel = ServletUtility.getUserModel(request);
		model.setCollegeId(userModel.getCollegeId());

		if (id > 0) {
			try {
				model = model.findByPK(id);
			} catch (ApplicationException e) {
				ServletUtility.handleException(e, request, response);
				return;
			}
		}

		ServletUtility.setModel(model, request);

		ServletUtility.forwardView(ORSView.STUDENTATTENDANCE_VIEW, request,
				response);
	}

	@Override
	protected String getView() {
		return ORSView.STUDENTATTENDANCE_VIEW;
	}

	@Override
	protected void setAccess(HttpServletRequest request) {
		super.setAccess(request);
		AccessUtility.setWriteAccess("" + AppRole.SUPER_ADMIN + ""
				+ AppRole.ADMIN, request);

		AccessUtility.setWriteAccess("" + AppRole.SUPER_ADMIN + ""
				+ AppRole.ADMIN, request);

	}
}
