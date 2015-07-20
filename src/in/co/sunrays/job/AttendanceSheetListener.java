package in.co.sunrays.job;
import static org.quartz.JobBuilder.newJob;
import static org.quartz.TriggerBuilder.newTrigger;

import java.text.ParseException;

import javax.servlet.ServletContextEvent;
import javax.servlet.ServletContextListener;

import org.quartz.CronScheduleBuilder;
import org.quartz.JobDetail;
import org.quartz.Scheduler;
import org.quartz.SchedulerException;
import org.quartz.Trigger;
import org.quartz.impl.StdSchedulerFactory;


public class AttendanceSheetListener implements ServletContextListener {
    Scheduler scheduler = null;

    @Override
    public void contextInitialized(ServletContextEvent servletContext) {
            System.out.println("Context Initialized");
            
            try {
                    // Setup the Job class and the Job group
                    JobDetail job = newJob(AttendanceSheetJob.class).withIdentity(
                                    "AttendanceSheetJob", "Group").build();

                    // Create a Trigger that fires every 5 minutes.
                    Trigger trigger;
					try {
						trigger = newTrigger()
						.withIdentity("AttendanceSheetTriggerName", "Group")
						.withSchedule(CronScheduleBuilder.cronSchedule("0 0 0/2 1/1 * ? *"))
						.build();
					

                    // Setup the Job and Trigger with Scheduler & schedule jobs
                    scheduler = new StdSchedulerFactory().getScheduler();
                    scheduler.start();
                    scheduler.scheduleJob(job, trigger);
					} catch (ParseException e) {
						// TODO Auto-generated catch block
						e.printStackTrace();
					}
            }
            catch (SchedulerException e) {
                    e.printStackTrace();
            }
    }

    @Override
    public void contextDestroyed(ServletContextEvent servletContext) {
            System.out.println("Context Destroyed");
            try 
            {
                    scheduler.shutdown();
            } 
            catch (SchedulerException e) 
            {
                    e.printStackTrace();
            }
    }


}
