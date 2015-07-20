package in.co.sunrays.util;

import java.util.HashMap;
import java.util.Iterator;
import java.util.LinkedHashMap;
import java.util.Map;
import java.util.TreeMap;

import in.co.sunrays.wsx.controller.ORSView;
import in.co.sunrays.wsx.model.AppRole;

public class MenuBuilder {

	public static final int HORIZONTAL = 1;
	public static final int VERTICAL = 2;
	public static final String separator = " | ";

	public static String getLink(String text, String url) {
		return "<a href='" + url + "'>" + text + "</a>";
	}

	public static String getHorizontalLink(HashMap<String, String> hmap) {
		StringBuffer sb = new StringBuffer(separator + "");
		Iterator<String> keys = hmap.keySet().iterator();

		String key = null;
		String value = null;
		while (keys.hasNext()) {
			key = keys.next();
			value = hmap.get(key);
			sb.append(getLink(key, value) + separator);
		}
		return sb.toString();
	}

	public static String getVericalLink(HashMap<String, String> hmap) {
		/*
		 * <UL> <LI> </LI> </UL>
		 */
		StringBuffer sb = new StringBuffer("<UL>");

		Iterator<String> keys = hmap.keySet().iterator();
		String key = null;
		String value = null;
		while (keys.hasNext()) {
			key = keys.next();
			value = hmap.get(key);
			sb.append("<LI>" + getLink(key, value) + "</LI>");
		}
		sb.append("</UL>");
		return sb.toString();
	}

	public static String getMenu(long roleId) {
		return getMenu(roleId, HORIZONTAL);
	}

	public static String getMenu(long roleId, int i) {

		LinkedHashMap<String, String> map = new LinkedHashMap<String, String>();
		map.put("Home", ORSView.WELCOME_CTL);

		if (roleId == AppRole.SUPER_ADMIN) {

			map.put("New User", ORSView.USER_CTL);
			map.put("New Role", ORSView.ROLE_CTL);
			map.put("User List", ORSView.USER_LIST_CTL);
			map.put("Role List", ORSView.ROLE_LIST_CTL);

			map.put("New Sector", ORSView.DEPARTEMENT_CTL);
			map.put("New Training Center", ORSView.COLLEGE_CTL);
			map.put("New Training ", ORSView.TRAININGMANAGEMENT_CTL);

			map.put("Sector List ", ORSView.DEPARTEMENT_LIST_CTL);
			map.put("Training Centers", ORSView.COLLEGE_LIST_CTL);
			map.put("Training List", ORSView.TRAININGMANAGEMENT_LIST_CTL);
			map.put("Trainer List", ORSView.STAFF_LIST_CTL);
			map.put("Trainee List", ORSView.STUDENT_LIST_CTL);
			map.put("Attendance List", ORSView.ATTENDENCE_LIST_CTL);

			map.put("MyProfile", ORSView.MY_PROFILE_CTL);
			map.put("Change Password", ORSView.CHANGE_PASSWORD_CTL);

		} else if (roleId == AppRole.ADMIN) {

			map.put("New Trainer", ORSView.STAFF_CTL);
			map.put("New Trainee", ORSView.STUDENT_CTL);
			map.put("Add Attendance", ORSView.ATTENDENCE_CTL);

			map.put("Sector List", ORSView.DEPARTEMENT_LIST_CTL);
			map.put("Training List ", ORSView.TRAININGMANAGEMENT_LIST_CTL);
			map.put("Trainer List", ORSView.STAFF_LIST_CTL);
			map.put("Trainee List", ORSView.STUDENT_LIST_CTL);
			map.put("Attendances", ORSView.ATTENDENCE_LIST_CTL);
			map.put("StudentAttendances", ORSView.ATTENDENCE_LIST_CTL);

			map.put("MyProfile", ORSView.MY_PROFILE_CTL);
			map.put("Change Password", ORSView.CHANGE_PASSWORD_CTL);

		} else if (roleId == AppRole.STAFF) {

			map.put("Sector List ", ORSView.DEPARTEMENT_LIST_CTL);
			map.put("Training List ", ORSView.TRAININGMANAGEMENT_LIST_CTL);

			map.put("New Trainee", ORSView.STUDENT_CTL);
			map.put("Add Attendance", ORSView.ATTENDENCE_CTL);
			
			map.put("Trainee List", ORSView.STUDENT_LIST_CTL);
			map.put("Attendance List", ORSView.ATTENDENCE_LIST_CTL);
			map.put("Trainer List", ORSView.STAFF_LIST_CTL);

			map.put("MyProfile", ORSView.MY_PROFILE_CTL);
			map.put("Change Password", ORSView.CHANGE_PASSWORD_CTL);

		} else if (roleId == AppRole.STUDENT) {

			map.put("Trainee List", ORSView.STUDENT_LIST_CTL);
			map.put("Attendance List", ORSView.ATTENDENCE_LIST_CTL);

			map.put("MyProfile", ORSView.MY_PROFILE_CTL);
			map.put("Change Password", ORSView.CHANGE_PASSWORD_CTL);
		}

		if (i == HORIZONTAL) {
			return getHorizontalLink(map);
		} else {
			return getVericalLink(map);
		}
	}

}