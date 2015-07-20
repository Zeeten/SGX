package in.co.sunrays.wsx.controller;

import java.io.IOException;
import java.io.PrintWriter;
import java.io.StringWriter;
import java.sql.Timestamp;
import java.text.SimpleDateFormat;
import java.util.Date;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.log4j.Logger;

import in.co.sunrays.common.controller.BaseCtl;
import in.co.sunrays.common.model.BaseModel;
import in.co.sunrays.util.AccessUtility;
import in.co.sunrays.util.DataUtility;
import in.co.sunrays.util.DataValidator;
import in.co.sunrays.util.PropertyReader;
import in.co.sunrays.util.ServletUtility;
import in.co.sunrays.wsx.exception.ApplicationException;
import in.co.sunrays.wsx.model.AppRole;
import in.co.sunrays.wsx.model.AttendenceModel;
import in.co.sunrays.wsx.model.ErrorMessageModel;
import in.co.sunrays.wsx.model.SchedularStatusModel;
import in.co.sunrays.wsx.model.StudentAttendanceModel;

public class AttendanceSchedular extends BaseCtl {

	private ErrorMessageModel errorMessageModel = null;
	private SchedularStatusModel schedularStatusModel = null;
	protected Logger log = Logger.getLogger(this.getClass());
	private String name;
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}

	@Override
	protected void preload(HttpServletRequest request) {
	
	}
	@Override
	protected boolean validate(HttpServletRequest request) {
		log.debug("AttendanceSchedular Method validate Started");
		boolean pass = true;

		if (DataValidator.isNull(request.getParameter("date"))) {
			request.setAttribute("error.date",
					PropertyReader.getValue("error.require", "date"));
			pass = false;
		}



		System.out.println("....................in validate");
		log.debug("AttendanceSchedular Method validate Ended");
		return pass;
	}
	@Override
	protected void doGet(HttpServletRequest request,
			HttpServletResponse response) throws ServletException, IOException {
		log.debug("AttendanceSchedular Method get Started");
		ServletUtility.forwardView(ORSView.SCHEDULAR_ATTENDENCE_VIEW, request, response);
	}
	
	protected void doPost(HttpServletRequest request,
			HttpServletResponse response) throws ServletException, IOException {
		log.debug("AttendanceSchedular Method get Started");
	
		if (validate(request)) {
			StudentAttendanceModel model = new StudentAttendanceModel();
			String datepara=request.getParameter("date");
			Date date=DataUtility.getDate(request
					.getParameter("date"));
		String sdf=new SimpleDateFormat("yyyy-MM-dd").format(date);
			System.out.println("date"+sdf);
			try {
				schedularStatusModel = new SchedularStatusModel();
				schedularStatusModel.setSchedularName("StudentAttendanceJob");
				schedularStatusModel.setStartTime(new Timestamp(new Date().getTime()));
				long pk = schedularStatusModel.add();
				schedularStatusModel.setId(pk);
		model.addSchedular(sdf);
		schedularStatusModel.setStatus("Complete");
		schedularStatusModel.setStopTime(new Timestamp(new Date().getTime()));
		schedularStatusModel.update();
		ServletUtility.setModel(model, request);
		ServletUtility.setSuccessMessage("Scheduler has  scuccessfully run for date "+datepara,
				request);
		ServletUtility.forwardView(ORSView.SCHEDULAR_ATTENDENCE_VIEW, request, response);
			}
			catch (Exception e) {

				log.error(e);

				errorMessageModel = new ErrorMessageModel();

				errorMessageModel.setSchedularName("StudentAttendanceJob");
				errorMessageModel.setCreatedDatetime(new Timestamp(new Date().getTime()));
				errorMessageModel.setErrorMessage(e.toString());

				StringWriter sw = new StringWriter();
				PrintWriter pw = new PrintWriter(sw);

				e.printStackTrace(pw);
				errorMessageModel.setErrorTrace(sw.toString());
	
				try {
					errorMessageModel.add();
				} catch (Exception ex) {
					log.error(ex);
					ServletUtility.handleException(e, request, response);
					return;
				}
			
			}
		}else{
			ServletUtility.forwardView(ORSView.SCHEDULAR_ATTENDENCE_VIEW, request, response);
		}
	}
	
	public ErrorMessageModel getErrorMessageModel() {
		return errorMessageModel;
	}
	public void setErrorMessageModel(ErrorMessageModel errorMessageModel) {
		this.errorMessageModel = errorMessageModel;
	}
	public SchedularStatusModel getSchedularStatusModel() {
		return schedularStatusModel;
	}
	public void setSchedularStatusModel(SchedularStatusModel schedularStatusModel) {
		this.schedularStatusModel = schedularStatusModel;
	}
	
	
	@Override
	protected String getView() {
		return ORSView.SCHEDULAR_ATTENDENCE_VIEW;
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
