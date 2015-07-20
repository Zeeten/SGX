package in.co.sunrays.wsx.controller;

import in.co.sunrays.common.controller.BaseCtl;
import in.co.sunrays.common.model.BaseModel;
import in.co.sunrays.util.AccessUtility;
import in.co.sunrays.util.DataUtility;
import in.co.sunrays.util.DataValidator;
import in.co.sunrays.util.PropertyReader;
import in.co.sunrays.util.ServletUtility;
import in.co.sunrays.wsx.exception.ApplicationException;
import in.co.sunrays.wsx.exception.DuplicateRecordException;
import in.co.sunrays.wsx.model.AppRole;
import in.co.sunrays.wsx.model.DepartementModel;
import in.co.sunrays.wsx.model.TrainingModel;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.log4j.Logger;

/**
 * Servlet implementation class TrainingManagementCtl
 */

public class TrainingCtl extends BaseCtl {

	/**
	 * Logger to log the messages.
	 */
	private static Logger log = Logger.getLogger(StudentCtl.class);

	/**
	 * Loads pre-loaded data like Dropdown List.
	 */
	@Override
	protected void preload(HttpServletRequest request) {

		DepartementModel departementModel = new DepartementModel();
		List deptList = departementModel.search();
		request.setAttribute("departementList", deptList);

	}

	/**
	 * Validates Input data
	 */
	@Override
	protected boolean validate(HttpServletRequest request) {

		log.debug("TrainingCtl Method validate Started");

		boolean pass = true;

		if (DataValidator.isNull(request.getParameter("name"))) {
			request.setAttribute("name",
					PropertyReader.getValue("error.require", "Name"));
			pass = false;
		}
		if (DataValidator.isNull(request.getParameter("description"))) {
			request.setAttribute("description",
					PropertyReader.getValue("error.require", "Description"));
			pass = false;
		}
		if (DataValidator.isNull(request.getParameter("departementId"))) {
			request.setAttribute("departementId",
					PropertyReader.getValue("error.require", "Departement Id"));
			pass = false;
		}
		
		log.debug("TrainingCtl Method validate Ended");

		return pass;
	}

	@Override
	protected BaseModel populateModel(HttpServletRequest request) {

		log.debug("TrainingManagementCtl Method populatebean Started");

		TrainingModel model = new TrainingModel();

		model.setId(DataUtility.getLong(request.getParameter("id")));

		// bean.setRoleId(RoleBean.STUDENT);
		model.setName(DataUtility.getString(request.getParameter("name")));
		model.setDescription(DataUtility.getString(request
				.getParameter("description")));
		model.setDepartementId(DataUtility.getLong(request
				.getParameter("departementId")));

		model = populateModel(model, request);

		log.debug("TrainingCtl Method populatemodel Ended");

		return model;
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

		log.debug("TrainingManagementCtl Method doPost Started");

		String op = DataUtility.getString(request.getParameter("operation"));

		// get model
		TrainingModel model = (TrainingModel) populateModel(request);

		System.out.println("userrrr " + model.getCreatedBy());
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
			} catch (DuplicateRecordException e) {
				log.error(e);
				ServletUtility.setModel(model, request);
				ServletUtility.setErrorMessage(
						"Training name allready exists !", request);
				ServletUtility.forwardView(ORSView.TRAININGMANAGEMENT_VIEW,
						request, response);
			}

		} else if (OP_DELETE.equalsIgnoreCase(op)) {
			try {
				model.delete();
				ServletUtility.redirect(ORSView.TRAININGMANAGEMENT_LIST_CTL,
						request, response);
				return;
			} catch (ApplicationException e) {
				log.error(e);
				ServletUtility.handleException(e, request, response);
				return;
			}
		} else {
			if (id > 0 || op != null) {
				TrainingModel model1;
				try {
					model1 = model.findByPK(id);
					ServletUtility.setModel(model1, request);
				} catch (ApplicationException e) {

					ServletUtility.handleException(e, request, response);
					return;
				}
			}
		}
		ServletUtility.forwardView(ORSView.TRAININGMANAGEMENT_VIEW, request,
				response);
		log.debug("TrainingManagementCtl Method doPost Ended");
	}

	/**
	 * Contains Display Logic
	 */
	protected void doGet(HttpServletRequest request,
			HttpServletResponse response) throws ServletException, IOException {
		Long id = DataUtility.getLong(request.getParameter("id"));

		TrainingModel model = new TrainingModel();

		if (id > 0) {
			try {
				model = model.findByPK(id);
				ServletUtility.setModel(model, request);
			} catch (ApplicationException e) {
				ServletUtility.handleException(e, request, response);
				return;
			}
		}
		ServletUtility.forwardView(ORSView.TRAININGMANAGEMENT_VIEW, request,
				response);
	}

	@Override
	protected String getView() {
		return ORSView.TRAININGMANAGEMENT_VIEW;
	}

	@Override
	protected void setAccess(HttpServletRequest request) {
		super.setAccess(request);
		AccessUtility.setWriteAccess("" +   AppRole.SUPER_ADMIN + "" + AppRole.ADMIN, request);
		
		AccessUtility.setWriteAccess("" +   AppRole.SUPER_ADMIN +"" + AppRole.ADMIN, request);
	
	}
}