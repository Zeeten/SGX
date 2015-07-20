package in.co.sunrays.util;

import javax.servlet.http.HttpServletRequest;

/**
 * Apply global data fiter
 * 
 * @author admin
 *
 */

public class UserFilterManager {

	public static void setCollegeId(HttpServletRequest request, long id) {
		request.getSession().setAttribute("filter.collegeId", id);
	}

	public static long getCollegeId(HttpServletRequest request) {
		Long l = (Long) request.getSession().getAttribute("filter.collegeId");
		if (l == null) {
			return 0;
		} else {
			return l;
		}
	}

	public static void setOrganizationId(HttpServletRequest request, long id) {
		request.getSession().setAttribute("filter.organizationId", id);
	}

	public static long getOrganizationId(HttpServletRequest request) {
		Long l = (Long) request.getSession().getAttribute("filter.organizationId");
		if (l == null) {
			return 0;
		} else {
			return l;
		}
	}
	
	
}
