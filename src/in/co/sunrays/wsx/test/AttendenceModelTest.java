package in.co.sunrays.wsx.test;

import in.co.sunrays.wsx.exception.DuplicateRecordException;
import in.co.sunrays.wsx.model.AttendenceModel;

public class AttendenceModelTest {

	public static AttendenceModel model = new AttendenceModel();

	/**
	 * Main method to call test methods.
	 * 
	 * @param args
	 * @throws DuplicateRecordException
	 */
	public static void main(String[] args) throws DuplicateRecordException {
		testAdd();
		// testDelete();
		// testUpdate();
		// testFindByPK();
		// testSearch();

	}

	private static void testAdd() {
		try {
			AttendenceModel model = new AttendenceModel();
			model.setStudentId(255645);
	
			model.add();
			System.out.println("Attendence is added successfully");
		} catch (Exception exception) {
			exception.printStackTrace();
		}
	}
}
