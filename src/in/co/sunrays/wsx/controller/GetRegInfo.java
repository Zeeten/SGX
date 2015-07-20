package in.co.sunrays.wsx.controller;

import in.co.sunrays.util.DataUtility;
import in.co.sunrays.wsx.exception.ApplicationException;
import in.co.sunrays.wsx.model.AppRole;
import in.co.sunrays.wsx.model.StaffModel;
import in.co.sunrays.wsx.model.StudentModel;

import java.io.File;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.Date;
import java.util.HashMap;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.codehaus.jackson.JsonGenerationException;
import org.codehaus.jackson.map.JsonMappingException;
import org.codehaus.jackson.map.ObjectMapper;
import org.codehaus.jackson.map.type.MapType;

public class GetRegInfo extends HttpServlet {

	@Override
	protected void doGet(HttpServletRequest request,
			HttpServletResponse response) throws ServletException, IOException {

		// 1-10
		String code = request.getParameter("code");
		String[] token = code.split("-");
		int role = DataUtility.getInt(token[0]);
		int id = DataUtility.getInt(token[1]);
		
		ObjectMapper mapper = new ObjectMapper();

		String json = "";

		if (AppRole.STUDENT == role) {

			StudentModel model = new StudentModel();
			model = model.findByPK(id);
			
			
		 
			try {
		 
				// display to console
				System.out.println(mapper.writeValueAsString(model));
		 
			} catch (JsonGenerationException e) {
		 
				e.printStackTrace();
		 
			} catch (JsonMappingException e) {
		 
				e.printStackTrace();
		 
			} catch (IOException e) {
		 
				e.printStackTrace();
		 
			}
		 
			MapType mapType = mapper.getTypeFactory().constructMapType(HashMap.class,
			        String.class, Object.class);
			
		HashMap<String, Object> jsonMap =	mapper.convertValue(model, mapType);
			
			jsonMap.put("success", true);
			jsonMap.put("error", "This is error msg..!");
		
			json = mapper.writeValueAsString(jsonMap);
			
			/*json = "{success : 'true', error : 'This is error message',  data : { id:'"
					+ id
					+ "', code:'1-29' ,firstName:'"
					+ model.getFirstName()
					+ "', lastName :'" + model.getLastName() + "'}}";*/

		} else if (AppRole.STAFF == role) {

			StaffModel model = new StaffModel();
			model = model.findByPK(id);
			
			try {
				 
				// display to console
				System.out.println(mapper.writeValueAsString(model));
		 
			} catch (JsonGenerationException e) {
		 
				e.printStackTrace();
		 
			} catch (JsonMappingException e) {
		 
				e.printStackTrace();
		 
			} catch (IOException e) {
		 
				e.printStackTrace();
		 
			}
		 
			MapType mapType = mapper.getTypeFactory().constructMapType(HashMap.class,
			        String.class, Object.class);
			
		HashMap<String, Object> jsonMap =	mapper.convertValue(model, mapType);
			
			jsonMap.put("success", true);
			jsonMap.put("error", "This is error msg..!");
		
			json = mapper.writeValueAsString(jsonMap);
			
			
			/*json = "{success : 'true', error : 'This is error message',  data : { id:'"
					+ id
					+ "', code:'1-29' ,firstName:'"
					+ model.getFirstName()
					+ "', lastName :'" + model.getLastName() + "'}}";*/

		} else {
			json = "{success : 'false', error : 'This is error message'}";
		}
		response.setContentType("application/json");
		PrintWriter out = response.getWriter();
		out.print(json);
		out.close();
	}
}
