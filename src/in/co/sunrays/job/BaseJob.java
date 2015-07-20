package in.co.sunrays.job;

import in.co.sunrays.wsx.model.ErrorMessageModel;
import in.co.sunrays.wsx.model.SchedularStatusModel;

import java.io.PrintWriter;
import java.io.StringWriter;
import java.sql.Timestamp;
import java.util.Date;

import org.apache.log4j.Logger;
import org.quartz.Job;
import org.quartz.JobExecutionContext;
import org.quartz.JobExecutionException;

public abstract class BaseJob implements Job {

	private ErrorMessageModel errorMessageModel = null;
	private SchedularStatusModel schedularStatusModel = null;
	protected Logger logger = Logger.getLogger(this.getClass());
	@Override
	public void execute(JobExecutionContext ctx) throws JobExecutionException {
	
		System.out.println("schedularStatus start ");

		schedularStatusModel = new SchedularStatusModel();
		schedularStatusModel.setSchedularName(getName());
		schedularStatusModel.setStartTime(new Timestamp(new Date().getTime()));
		
		try {

			long pk = schedularStatusModel.add();
			schedularStatusModel.setId(pk);
			processJob(ctx);
			schedularStatusModel.setStatus("Complete");
			schedularStatusModel.setStopTime(new Timestamp(new Date().getTime()));
			schedularStatusModel.update();

		} catch (Exception e) {

			logger.error(e);

			errorMessageModel = new ErrorMessageModel();

			errorMessageModel.setSchedularName(this.getName());
			errorMessageModel.setCreatedDatetime(new Timestamp(new Date().getTime()));
			errorMessageModel.setErrorMessage(e.toString());

			StringWriter sw = new StringWriter();
			PrintWriter pw = new PrintWriter(sw);

			e.printStackTrace(pw);
			errorMessageModel.setErrorTrace(sw.toString());

			try {
				errorMessageModel.add();
			} catch (Exception ex) {
				logger.error(ex);

			}
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
	public abstract void processJob(JobExecutionContext ctx) throws Exception;

	public abstract String getName();

}
