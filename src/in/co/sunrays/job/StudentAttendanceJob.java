package in.co.sunrays.job;

import in.co.sunrays.wsx.model.StudentAttendanceModel;

import org.quartz.Job;
import org.quartz.JobExecutionContext;
import org.quartz.JobExecutionException;

public class StudentAttendanceJob extends BaseJob {

	@Override
	public void processJob(JobExecutionContext ctx) throws Exception {
		StudentAttendanceModel attendanceModel = new StudentAttendanceModel();
		attendanceModel.addSchedular();
		
	}

	@Override
	public String getName() {
	
		return "StudentAttendanceJob";
	}

	/*@Override
	public void execute(JobExecutionContext arg0) throws JobExecutionException {
		StudentAttendanceModel attendanceModel = new StudentAttendanceModel();
		try{
			attendanceModel.addSchedular();
		}catch(Exception e){
			e.printStackTrace();
		}
		
	}*/


}
