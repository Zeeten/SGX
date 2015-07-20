package in.co.sunrays.job;

import in.co.sunrays.wsx.model.AttendanceSheetModel;
import in.co.sunrays.wsx.model.StudentAttendanceModel;

import org.quartz.Job;
import org.quartz.JobExecutionContext;
import org.quartz.JobExecutionException;

public class AttendanceSheetJob extends BaseJob {

	@Override
	public void processJob(JobExecutionContext ctx) throws Exception {
		AttendanceSheetModel model = new AttendanceSheetModel();
		model.add();
		
	}

	@Override
	public String getName() {
	
		return "AttendanceSheetJob";
	}



}
