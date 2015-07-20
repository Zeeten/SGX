package in.co.sunrays.wsx.controller;

import in.co.sunrays.common.controller.BaseCtl;
import in.co.sunrays.common.model.BaseModel;
import in.co.sunrays.common.model.UserModel;
import in.co.sunrays.wsx.exception.ApplicationException;
import in.co.sunrays.wsx.model.AppRole;
import in.co.sunrays.wsx.model.CollegeModel;
import in.co.sunrays.wsx.model.DepartementModel;
import in.co.sunrays.wsx.model.StaffModel;
import in.co.sunrays.util.AccessUtility;
import in.co.sunrays.util.DataUtility;
import in.co.sunrays.util.PropertyReader;
import in.co.sunrays.util.ServletUtility;
import in.co.sunrays.util.UserFilterManager;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.log4j.Logger;

/**
 * Student List functionality Controller. Performs operation for list, search
 * and delete operations of Student
 * 
 * @author SUNRAYS Technologies
 * @version 1.0
 * @Copyright (c) SUNRAYS Technologies
 */

public class StaffListCtl extends BaseCtl {

	@Override
	protected void preload(HttpServletRequest request) {

		CollegeModel model = new CollegeModel();

		try {
			List list = model.search();
			request.setAttribute("collegeList", list);

			DepartementModel departementModel = new DepartementModel();
			List deptList = departementModel.search();
			request.setAttribute("departementList", deptList);

		} catch (ApplicationException e) {
			log.error(e);
		}

	}

	/**
	 * Logger to log the messages.
	 */

	private static Logger log = Logger.getLogger(StaffListCtl.class);

	@Override
	protected BaseModel populateModel(HttpServletRequest request) {

		StaffModel model = new StaffModel();

		model.setFirstName(DataUtility.getString(request
				.getParameter("firstName")));
		model.setLastName(DataUtility.getString(request
				.getParameter("lastName")));

		model.setCollegeId(DataUtility.getLong(request
				.getParameter("collegeId")));
		
		model.setDepartementId((DataUtility.getLong(request
				.getParameter("departementId"))));

		return model;
	}

	/**
	 * Handles GET request.
	 * 
	 */
	@Override
	protected void doGet(HttpServletRequest request,
			HttpServletResponse response) throws ServletException, IOException {

		log.debug("StaffListCtl doGet Start");

		List list = null;

		int pageNo = DataUtility.getInt(request.getParameter("pageNo"));
		int pageSize = DataUtility.getInt(request.getParameter("pageSize"));

		
		pageSize = (pageSize == 0) ? DataUtility.getInt(PropertyReader
				.getValue("page.size")) : pageSize;

		StaffModel model = (StaffModel) populateModel(request);
		// Global filter
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
				ServletUtility.redirect(ORSView.STAFF_CTL, request, response);
				return;
			} else if (OP_DELETE.equalsIgnoreCase(op)) {
				pageNo = 1;
				if (ids != null && ids.length > 0) {
					StaffModel deletemodel = new StaffModel();
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
			ServletUtility.forwardView(getView(), request, response);

		} catch (ApplicationException e) {
			log.error(e);
			ServletUtility.handleException(e, request, response);
			return;
		}

		log.debug("StaffListCtl doGet End");
	}

	@Override
	protected String getView() {
		return ORSView.STAFF_LIST_VIEW;
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
