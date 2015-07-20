package in.co.sunrays.wsx.controller;

import in.co.sunrays.common.controller.BaseCtl;
import in.co.sunrays.common.model.BaseModel;
import in.co.sunrays.common.model.RoleModel;
import in.co.sunrays.util.AccessUtility;
import in.co.sunrays.util.DataUtility;
import in.co.sunrays.util.PropertyReader;
import in.co.sunrays.util.ServletUtility;
import in.co.sunrays.wsx.exception.ApplicationException;
import in.co.sunrays.wsx.model.AppRole;
import in.co.sunrays.wsx.model.AttendenceModel;
import in.co.sunrays.wsx.model.CollegeModel;
import in.co.sunrays.wsx.model.DepartementModel;
import in.co.sunrays.wsx.model.StudentModel;

import java.io.IOException;
import java.util.LinkedHashMap;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.log4j.Logger;

/**
 * Contains navigation logic for Comment Views.
 * 
 * @version 1.0
 * @since 01 Feb 2015
 * @author SUNRAYS Developer
 * @Copyright (c) sunRays Technologies. All rights reserved.
 * @URL www.sunrays.co.in
 */
public class AttendenceListCtl extends BaseCtl {

	@Override
	protected void preload(HttpServletRequest request) {

		LinkedHashMap<String, String> typeMap = new LinkedHashMap<String, String>();
		typeMap.put("", "--Select--");
		typeMap.put(String.valueOf(AppRole.STUDENT), "Trainee");
		typeMap.put(String.valueOf(AppRole.STAFF), "Trainer");
		typeMap.put(String.valueOf(AppRole.ASSESSOR), "Assessor");
		request.setAttribute("typeMap", typeMap);
	}

	/**
	 * Logger to log the messages.
	 */
	private static Logger log = Logger.getLogger(AttendenceListCtl.class);

	/**
	 * Handles GET request.
	 * 
	 */
	@Override
	protected void doGet(HttpServletRequest request,
			HttpServletResponse response) throws ServletException, IOException {

		log.debug("AttendenceListCtl doGet Start");

		List list = null;

		int pageNo = DataUtility.getInt(request.getParameter("pageNo"));
		int pageSize = DataUtility.getInt(request.getParameter("pageSize"));

		pageSize = (pageSize == 0) ? DataUtility.getInt(PropertyReader
				.getValue("page.size")) : pageSize;

		AttendenceModel model = (AttendenceModel) populateModel(request);
		System.out.println("demo"+ServletUtility.getUserModel(request).getCollegeId());
		model.setCollegeId(ServletUtility.getUserModel(request).getCollegeId());
		String op = DataUtility.getString(request.getParameter("operation"));

		// get the selected checkbox ids array for delete list
		String[] ids = request.getParameterValues("ids");

		try {

			if (OP_SEARCH.equalsIgnoreCase(op) || "Next".equalsIgnoreCase(op)
					|| "Previous".equalsIgnoreCase(op)) {

				if (OP_SEARCH.equalsIgnoreCase(op)) {
					pageNo = 1;
				} else if (OP_NEXT.equalsIgnoreCase(op)) {
					pageNo++;
				} else if (OP_PREVIOUS.equalsIgnoreCase(op)) {
					pageNo--;
				}

			} else if (OP_NEW.equalsIgnoreCase(op)) {
				ServletUtility.redirect(ORSView.ATTENDENCE_CTL, request,
						response);
				return;
			} else if (OP_DELETE.equalsIgnoreCase(op)) {
				pageNo = 1;
				if (ids != null && ids.length > 0) {
					AttendenceModel deletemodel = new AttendenceModel();
					for (String id : ids) {
						deletemodel.setId(DataUtility.getInt(id));
						deletemodel.delete();
					}
				} else {
					ServletUtility.setErrorMessage(
							"Select at least one record", request);
				}
			}

			pageNo = (pageNo == 0) ? 1 : pageNo;
			list = model.search(pageNo, pageSize);
			ServletUtility.setList(list, request);
			if (list == null || list.size() == 0) {
				ServletUtility.setErrorMessage("No record found ", request);
			}
			ServletUtility.setList(list, request);

			ServletUtility.setPageNo(pageNo, request);
			ServletUtility.setPageSize(pageSize, request);
			if (OP_EXCEL.equalsIgnoreCase(op)) {
				 ServletUtility.forward(ORSView.ATTENDANCE_LIST_EXCEL_VIEW, request, response); 
			 }else{
			ServletUtility.forwardView(getView(), request, response);
			 }

		} catch (ApplicationException e) {
			log.error(e);
			ServletUtility.handleException(e, request, response);
			return;
		}

		log.debug("AttendenceListCtl doGet End");
	}

	@Override
	protected BaseModel populateModel(HttpServletRequest request) {

		log.debug("StudentCtl Method populatebean Started");

		AttendenceModel model = new AttendenceModel();
		// Global filter
		model.setCollegeId(ServletUtility.getUserModel(request).getCollegeId());

		model.setType(DataUtility.getInt(request.getParameter("type")));

		model.setStudentName(DataUtility.getString(request
				.getParameter("studentName")));

		model.setStartDate(DataUtility.getDate(request
				.getParameter("startDate")));

		model.setEndDate(DataUtility.getDate(request.getParameter("endDate")));

		log.debug("StudentCtl Method populatemodel Ended");

		return model;
	}

	/**
	 * Returns View page of Controller.
	 */
	@Override
	protected String getView() {
		return ORSView.ATTENDENCE_LIST_VIEW;
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
