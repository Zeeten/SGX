stm_bm(["menu4b6c",730,"","blank.gif",0,"","",0,0,250,0,1000,1,0,0,"","",0,0,1,2,"default","hand",""],this);
stm_bp("p0",[0,4,0,0,0,0,0,16,100,"",-2,"",-2,90,0,0,"#999999","transparent","",3,0,0,"#E6FAB4 #788C32 #788C32 #E6FAB4"]);
stm_ai("p0i0",[0," डेलीगेट","","",-1,-1,0,"","_self","","","","",0,0,0,"","",16,9,0,0,1,"",0,"#a84200",0,"bg_24.gif","",3,3,1,1,"#95C5D8","#CFE9F4","#003399","#FFFFFF","8pt Verdana","8pt Verdana",0,0],80,0);
stm_bp("p1",[1,4,0,0,0,0,0,0,100,"stEffect(\"slip\")",-2,"stEffect(\"slip\")",-2,55,0,0,"#999999","transparent","",3,0,0,"#000000"]);
stm_aix("p1i0","p0i0",[0," एड","","",-1,-1,0,"displayListForSSByASODelegate.do?hiddenOperation=insert","_self","","","","",0,0,0,"","",0,0,0,0,1,"#FFFFFF",0,"#b28800",0,"","",3,3,1,1,"#95C5D8","#CFE9F4","#003399","#FFFFFF","9pt Verdana","9pt Verdana"],80,0);
stm_aix("p1i1","p1i0",[0," अपडेट","","",-1,-1,0,"displayListForSSByASODelegate.do?hiddenOperation=update"],80,0);
stm_aix("p1i2","p1i0",[0," व्यू","","",-1,-1,0,"displayListForSSByASODelegateView.do?hiddenOperation=view"],80,0);
stm_ep();

stm_aix("p0i1","p0i0",[0," रिक्यूरिमेंट / अपायंटमेंट","","",-1,-1,0,"","_self","","","","",0,0,0,"","",16,9,0,0,1,"#9cc2c9",0,"#b28800"],80,0);
stm_bpx("p2","p1",[]);
stm_aix("p2i0","p1i0",[0," एड प्रोफाइल","","",-1,-1,0,"displayGeneralInformation.do","_self","","","","",0,0,0,"","",0,0,0,0,1,"#FFFFFF",0,"#6b0046"],180,0);
stm_aix("p2i1","p2i0",[0," अपडेट प्रोफाइल","","",-1,-1,0,"displayRecruitmentReport.do"],180,0);
stm_aix("p2i2","p2i1",[0," डिलीट प्रोफाइल","","",-1,-1,0,"displayRecruitmentReport.do"],180,0);
stm_aix("p2i3","p1i0",[0," रिक्यूरिमेंट रिपोर्ट","","",-1,-1,0,"displayRecruitmentReport.do"],180,0);
stm_aix("p2i4","p1i0",[0," नवीन कर्मचार्यांची नियुक्ति","","",-1,-1,0,"displayAppointment.do"],180,0);
stm_aix("p2i5","p2i0",[0," सर्व कर्मचार्यांचा प्रोफाइल पहा ","","",-1,-1,0,"displayEmployeeList.do"],180,0);
stm_ep();

stm_aix("p0i2","p0i0",[0," शिफ्ट","","",-1,-1,0,"","_self","","","","",0,0,0,"","",16,9,0,0,1,"#9cc2c9",0,"#6b0046"],80,0);
stm_bpx("p3","p1",[]);
stm_aix("p3i0","p2i0",[0," सर्वाना आवंटन्यात आलेली शिफ्ट","","",-1,-1,0,"displayShiftAllocation.do"],180,0);
stm_aix("p3i1","p2i0",[0," सूपरवाइज़रला आवंटन्यात आलेली शिफ्ट","","",-1,-1,0,"displayShiftAllocationToSupervisorAction.do"],180,0);
stm_aix("p3i2","p1i0",[0," ओटी आवंटन","","",-1,-1,0,"displayShiftAllocationReport.do","_self","","","","",0,0,0,"","",0,0,0,0,1,"#FFFFFF",0,"#a81515"],180,0);
stm_aix("p3i3","p3i2",[0," शिफ्ट रिपोर्ट","","",-1,-1,0,"displayShiftReportAction.do?lookShift=1"],180,0);
stm_aix("p3i4","p3i2",[0," शिफ्ट अपडेट","","",-1,-1,0,"displayUpdateAllocatedShift.do"],180,0);
stm_ep();

stm_aix("p0i3","p0i0",[0," उपस्थिति","","",-1,-1,0,"","_self","","","","",0,0,0,"","",16,9,0,0,1,"#9cc2c9",0,"#a81515"],80,0);
stm_bpx("p4","p1",[]);
stm_aix("p4i0","p1i0",[0," उपस्थिति शीट","","",-1,-1,0,"displayAttendanceReport.do"],130,0);
stm_aix("p4i1","p1i0",[0," उपस्थिति रिपोर्ट","","",-1,-1,0,"displayReportAttendance.do","_self","","","","",0,0,0,"","",0,0,0,0,1,"#FFFFFF",0,"#005591"],130,0);
stm_aix("p4i2","p4i1",[0," मैनुअल उपस्थिति","","",-1,-1,0,"displayAttendanceAction.do"],130,0);
stm_aix("p4i3","p4i2",[0," अपलोड उपस्थिति","","",-1,-1,0,"http://localhost:8080/UploadProject/Report.jsp"],130,0);
stm_ep();

stm_aix("p0i4","p0i0",[0," माझी शिफ्ट","","",-1,-1,0,"displayShiftReportAction.do?lookShift=0","_self","","","","",0,0,0,"","",16,9,0,0,1,"#a84200",0,"#005591"],0,25);
stm_aix("p0i5","p0i4",[0," माझी उपस्थिति","","",-1,-1,0,"displayIndividualAttendance.do"],0,25);
stm_aix("p0i6","p0i2",[0," माझे वेतन"],80,0);
stm_bpx("p5","p1",[]);
stm_aix("p5i0","p4i1",[0," वेतन शीट","","",-1,-1,0,"displayIndividualSalry.do"],130,0);
stm_aix("p5i1","p4i1",[0," माझे वेतन खाते","","",-1,-1,0,"displayEmployeeSavingAccountInformationAction.do"],130,0);
stm_ep();

stm_aix("p0i7","p0i4",[0," माझे ई.पी.एफ.","","",-1,-1,0,"displayEpf6AFormAction.do?principalEmployerLocationId=0"],0,25);
stm_aix("p0i8","p0i4",[0," माझी ई.एस.आइ.सी.","","",-1,-1,0,""],80,0);
stm_aix("p0i9","p0i2",[0," लॉग्स"],80,0);
stm_bpx("p6","p1",[]);
stm_aix("p6i0","p4i1",[0," लॉग आउट","","",-1,-1,0,"displayLoginAction.do?operation=LogOut"],0,4);
stm_aix("p6i1","p6i0",[0," मुख्य पृष्ठ","","",-1,-1,0,"displayHomePage.do"],0,4);
stm_aix("p6i2","p6i0",[0," पासवर्ड  बदला","","",-1,-1,0,"displayChangePassword.do"],0,4);
stm_ep();
stm_ep();
stm_em();
