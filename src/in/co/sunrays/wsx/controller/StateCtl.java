package in.co.sunrays.wsx.controller;

import in.co.sunrays.util.DataUtility;
import in.co.sunrays.util.JSONParser;
import in.co.sunrays.wsx.model.StateModel;

import java.io.IOException;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.log4j.Logger;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import com.google.gson.Gson;

public class StateCtl extends HttpServlet{
	/**
	 * Logger to log the messages.
	 */
	private static Logger log = Logger.getLogger(StateCtl.class);
	static JSONArray jarr = null;
	
	protected void doGet(HttpServletRequest request,
			HttpServletResponse response) throws ServletException, IOException {
		StateModel stateModel = new StateModel();
		JSONParser jsonParser = new JSONParser();
		  String json = null ;
		stateModel.setCountryId(DataUtility.getLong(request.getParameter("countryname")));
		List stateList = stateModel.search();;
		 json= new Gson().toJson(stateList); 
		 System.out.println("json"+json);
		 Map<String, String> state = new LinkedHashMap<String, String>();
		 try {
			jarr = new JSONArray(json);
			for (int i = 0; i < jarr.length(); i++) {
		
				 JSONObject jsonOBject = jarr.getJSONObject(i);
				 String id = String.valueOf(jsonOBject.getLong("id"));
				 String name = jsonOBject.getString("name");
				 state.put("0", "Select State");
				 state.put(id, name);
				  
			}
		} catch (JSONException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		// JSONObject jsonobj = jsonParser.getJSONFromUrl(json);
		 json= new Gson().toJson(state);
		   response.setContentType("application/json");
		    response.setCharacterEncoding("UTF-8");
		    response.getWriter().write(json); 
	}
	

}
