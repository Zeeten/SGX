package in.co.sunrays.wsx.controller;

import in.co.sunrays.common.controller.BaseCtl;
import in.co.sunrays.common.model.BaseModel;
import in.co.sunrays.common.model.UserModel;
import in.co.sunrays.util.AccessUtility;
import in.co.sunrays.util.DataUtility;
import in.co.sunrays.util.DataValidator;
import in.co.sunrays.util.PropertyReader;
import in.co.sunrays.util.ServletUtility;
import in.co.sunrays.wsx.exception.ApplicationException;
import in.co.sunrays.wsx.model.AppRole;
import in.co.sunrays.wsx.model.AssessorModel;
import in.co.sunrays.wsx.model.AttendenceModel;
import in.co.sunrays.wsx.model.CollegeModel;
import in.co.sunrays.wsx.model.StaffModel;
import in.co.sunrays.wsx.model.StudentModel;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.catalina.ant.FindLeaksTask;
import org.apache.log4j.Logger;

public class AttendenceCtl extends BaseCtl {

	private static Logger log = Logger.getLogger(AttendenceCtl.class);

	@Override
	protected void preload(HttpServletRequest request) {
	
	}

	@Override
	protected boolean validate(HttpServletRequest request) {
		log.debug("AttendenceCtl Method validate Started");
		boolean pass = true;

		if (DataValidator.isNull(request.getParameter("code"))) {
			request.setAttribute("error.code",
					PropertyReader.getValue("error.require", "Code"));
			pass = false;
		}
		System.out.println("pass"+pass);
		if (DataValidator.isNull(request.getParameter("time"))) {
			request.setAttribute("error.time",
					PropertyReader.getValue("error.require", "Time"));
			pass = false;
		}
		
		if (!DataValidator.istime(request.getParameter("time"))) {
			request.setAttribute("error.time",
					PropertyReader.getValue("error.datetime", "Date Time"));
			pass = false;
		}

		System.out.println("....................in validate");
		log.debug("AttendenceCtl Method validate Ended");
		return pass;
	}

	@Override
	protected BaseModel populateModel(HttpServletRequest request) {
		log.debug("AttendenceCtl Method populatebean Started");
		AttendenceModel model = new AttendenceModel();
		model.setStudentId((DataUtility.getLong(request.getParameter("id"))));
		int type = DataUtility.getInt(request.getParameter("type"));
		String code = (DataUtility.getString(request.getParameter("code")));
		if (validate(request)) {
		String[] token = code.split("-");
		type = DataUtility.getInt(token[0]);
		int id = DataUtility.getInt(token[1]);
		model.setStudentId(id);
		model.setAttendanceTime(DataUtility.getTimestamp(request
				.getParameter("time")));
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
		} else {
			model.setType(type);
			model.setCode(code);
			StaffModel staffModel = new StaffModel();
			staffModel = staffModel.findByPK(id);
			code = staffModel.getCode();
			firstName = staffModel.getFirstName();
			lastName = staffModel.getLastName();
		}
		System.out.println("time"+DataUtility.getTimestamp(request
				.getParameter("time")));
		populateModel(model, request);
		log.debug("AttendenceCtl Method populatebean End");
		}
		return model;
	}

	/**
	 * Contains Display Logic
	 */
	protected void doGet(HttpServletRequest request,
			HttpServletResponse response) throws ServletException, IOException {
		AttendenceModel model = new AttendenceModel();
		long id = DataUtility.getLong(request.getParameter("id"));

		if (id > 0) {
			try {
				AttendenceModel dbModel = model.findByPK(id);
				ServletUtility.setModel(dbModel, request);
			} catch (ApplicationException e) {
				log.error(e);
				ServletUtility.handleException(e, request, response);
				return;
			}
		}

		ServletUtility.forwardView(ORSView.ATTENDENCE_VIEW, request, response);
	}

	/**
	 * 
	 * Contains Submit Logic
	 * 
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */

	protected void doPost(HttpServletRequest request,
			HttpServletResponse response) throws ServletException, IOException {
		log.debug("AttendenceCtl Method doGet Started");
		String op = DataUtility.getString(request.getParameter("operation"));
		long id = DataUtility.getLong(request.getParameter("id"));
		AttendenceModel model = (AttendenceModel) populateModel(request);

		if (OP_SAVE.equalsIgnoreCase(op)) {
			try {
					long pk = model.add();
					model.setId(pk);
				
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
				ServletUtility.redirect(ORSView.ATTENDENCE_LIST_CTL, request,
						response);
				return;
			} catch (ApplicationException e) {
				log.error(e);
				ServletUtility.handleException(e, request, response);
				return;
			}
		} else if (OP_CANCEL.equalsIgnoreCase(op)) {
			ServletUtility.redirect(ORSView.ATTENDENCE_LIST_CTL, request,
					response);
			return;
		} else { // View page
			if (id > 0 || op != null) {
				AttendenceModel model1;
				try {
					model1 = model.findByPK(id);
					ServletUtility.setModel(model1, request);
				} catch (ApplicationException e) {
					log.error(e);
					ServletUtility.handleException(e, request, response);
					return;
				}
			}
		}

		ServletUtility.forwardView(ORSView.ATTENDENCE_VIEW, request, response);
	}

	@Override
	protected String getView() {
		return ORSView.ATTENDENCE_VIEW;
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
