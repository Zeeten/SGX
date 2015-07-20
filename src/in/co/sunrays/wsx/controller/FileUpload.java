package in.co.sunrays.wsx.controller;

import in.co.sunrays.util.DataUtility;
import in.co.sunrays.util.PropertyReader;
import in.co.sunrays.wsx.model.AppRole;
import in.co.sunrays.wsx.model.CollegeModel;
import in.co.sunrays.wsx.model.StaffModel;
import in.co.sunrays.wsx.model.StudentModel;

import java.io.File;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.Iterator;
import java.util.List;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.fileupload.FileItem;
import org.apache.commons.fileupload.FileUploadException;
import org.apache.commons.fileupload.disk.DiskFileItemFactory;
import org.apache.commons.fileupload.servlet.ServletFileUpload;

public class FileUpload extends HttpServlet {

	@Override
	protected void doPost(HttpServletRequest request,
			HttpServletResponse response) throws ServletException, IOException {

		boolean isMultipart = ServletFileUpload.isMultipartContent(request);
		String message = "Ok";

		String filePath = PropertyReader.getValue("upload.images");
		String page = ORSView.ERROR_CTL;

		int maxFileSize = 4 * 1024 * 1024; // 4 MB
		int maxMemSize = 4 * 1024; // 4 MB

		// Check that we have a file upload request

		// Create a factory for disk-based file items
		DiskFileItemFactory factory = new DiskFileItemFactory();

		// maximum size that will be stored in memory
		factory.setSizeThreshold(maxMemSize);

		// Location to save data that is larger than maxMemSize.
		factory.setRepository(new File(filePath));

		// Create a new file upload handler
		ServletFileUpload upload = new ServletFileUpload(factory);

		// maximum file size to be uploaded.
		upload.setSizeMax(maxFileSize);

		// Parse the request
		try {

			List<FileItem> items = upload.parseRequest(request);
			Iterator<FileItem> iter = items.iterator();

			FileItem fieldItem = null;
			FileItem fileItem = null;

			String fileName = null;
			String contentType = null;
			String code = null;
			String trainingId=null;
			String type = "1";

			while (iter.hasNext()) {

				FileItem item = iter.next();

				if (item.isFormField()) {
					String name = item.getFieldName();
					if ("id".equals(name)) {
						code = item.getString();
						trainingId = item.getString();
					} else if ("type".equals(name)) {
						type = item.getString();
					} else if ("page".equals(name)) {
						page = item.getString();
					}
					displayFieldDetails(item);
				} else {
					fileItem = item;
					// Get the uploaded file parameters
					fileName = item.getName();
					contentType = item.getContentType();
					displayFileDetails(item);
				}
			}

			fileName = code + getExtention(fileName);

			if (String.valueOf(AppRole.STUDENT).equals(type)) {

				StudentModel model = new StudentModel();
				model.setId(DataUtility.getLong(code));
				model.setPhoto(fileName);
				model.updatePhoto();
			} 
				if (String.valueOf(AppRole.STAFF).equals(type)) {
					StaffModel model = new StaffModel();
					model.setId(DataUtility.getLong(code));
					model.setPhoto(fileName);
					model.updatePhoto();
				}if (String.valueOf(AppRole.TRAINING_PROVIDER).equals(type)) {
					fileName = trainingId + getExtention(fileName);
					CollegeModel model = new CollegeModel();
					model.setId(DataUtility.getLong(trainingId));
					model.setPhoto(fileName);
					model.updatePhoto();
				}
			

			fileName = filePath + "/" + type + "/" + fileName;

			if (contentType.indexOf("image") == -1) {
				message = "file is not an image.";
			} else {
				fileItem.write(new File(fileName));
				System.out.println("File is copied " + fileName);
			}

			response.sendRedirect(page);

		} catch (FileUploadException e) {
			// out.write(e.getMessage());
			e.printStackTrace();
		} catch (Exception e) {
			// out.write(e.getMessage());
			e.printStackTrace();
		}

		// out.print(message);
		// out.close();
	}

	/**
	 * Display field details from muti-part form
	 * 
	 * @param item
	 */

	private void displayFieldDetails(FileItem item) {
		String name = item.getFieldName();
		String value = item.getString();
		System.out.println(name + " : " + value);
	}

	private void displayFileDetails(FileItem item) {

		String fieldName = item.getFieldName();
		String fileName = item.getName();
		String contentType = item.getContentType();

		boolean isInMemory = item.isInMemory();
		long sizeInBytes = item.getSize();

		System.out.println("fieldName : " + fieldName);
		System.out.println("fileName : " + fileName);
		System.out.println("isInMemory : " + isInMemory);
		System.out.println("sizeInBytes : " + sizeInBytes);
		System.out.println("contentType : " + contentType);

	}

	private String getExtention(String file) {
		if (file != null && file.length() > 0 && file.lastIndexOf(".") > 0) {
			return file.substring(file.lastIndexOf("."));
		} else {
			return "";
		}
	}

}
