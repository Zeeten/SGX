stm_bm(["menu4b6c",730,"","blank.gif",0,"","",0,0,250,0,1000,1,0,0,"","",0,0,1,2,"default","hand",""],this);
stm_bp("p0",[0,4,0,0,0,4,0,16,100,"",-2,"",-2,90,0,0,"#999999","transparent","",3,0,0,"#E6FAB4 #788C32 #788C32 #E6FAB4"]);
stm_ai("p0i0",[0,"Home","","",-1,-1,0,"displayHomePage.do","_self","","","","",0,0,0,"","",0,0,0,0,1,"#9cc2c9",1,"#CC0066",0,"bg_24.gif","",3,3,1,1,"#95C5D8","#CFE9F4","#003399","#FFFFFF","8pt Verdana","8pt Verdana",0,0],0,4);
stm_aix("p0i1","p0i0",[0,"Registration","","",-1,-1,0,"","_self","","","","",0,0,0,"","",12,9,0,0,1,"#0066CC",1,"#468BE0"],80,0);
stm_bp("p1",[1,4,0,0,0,0,0,16,100,"stEffect(\"slip\")",-2,"stEffect(\"slip\")",-2,55,0,0,"#999999","transparent","",3,0,0,"#000000"]);
stm_aix("p1i0","p0i0",[0," New","","",-1,-1,0,"displaySgxEmployeeFormAction.do?operation=List","_self","","","","",0,0,0,"","",16,9,0,0,1,"#FFFFFF",0,"#468BE0",0,""],120,0);
stm_bpx("p2","p1",[1,2,0,0,0,0,0,0]);
//stm_aix("p2i0","p1i0",[0," Sgx Employee Form","","",-1,-1,0,"","_self","","","","",0,0,0,"","",0,0],120,0);
stm_aix("p2i0","p1i0",[0," Add","","",-1,-1,0,"displaySgxEmployeeFormAction.do?operation=form"],120,0);
stm_aix("p2i0","p1i0",[0," Update","","",-1,-1,0,"displaySgxEmployeeFormAction.do?operation=UpdateLink"],120,0);
stm_aix("p2i0","p1i0",[0," View","","",-1,-1,0,"displaySgxEmployeeFormAction.do?operation=List"],120,0);
//stm_aix("p2i1","p2i0",[0," Sales","","",-1,-1,0,"displaySalesExecutiveStateCity.do"],120,0);
//stm_aix("p2i0","p1i0",[0," Principal Employers","","",-1,-1,0,"displayPrincipalEmployerList.do","_self","","","","",0,0,0,"","",0,0],120,0);
//stm_aix("p2i1","p2i0",[0," Service Provider","","",-1,-1,0,"displaySecurityAgencyList.do"],120,0);
//stm_aix("p2i2","p2i0",[0," Security Personnel","","",-1,-1,0,""],120,0);,


stm_ep();
stm_aix("p1i1","p1i0",[0," Registered","","",-1,-1,0,"","_self","","","","",0,0,0,"","",16,9,0,0,1,"#FFFFFF",0,"#679DE0"],120,0);
stm_bpx("p3","p2",[]);
//stm_aix("p3i0","p2i0",[0," Principal Employers","","",-1,-1,0,"displayPrincipalEmployerRegisteredList.do"],130,0);
//stm_aix("p3i1","p2i0",[0," Security Agencies","","",-1,-1,0,"displaySecurityAgencyRegisteredList.do"],130,0);
//stm_aix("p3i2","p2i0",[0," Accept / Reject Report","","",-1,-1,0,"displayAllUserAction.do"],130,0);
//stm_aix("p3i2","p2i0",[0," Permission_Granted Report","","",-1,-1,0,"displayEmployeeAcceptedAction.do"],130,0);
stm_aix("p3i2","p2i0",[0," SalesExecutive List","","",-1,-1,0,"displaySalesExcutiveScheduleApprovedListAction.do"],130,0);
//stm_aix("p2i8","p2i0",[0," Sgx Employee's List ","","",-1,-1,0,"displaySgxEmployeeListAction.do"],130,0);
stm_ep();
stm_ep();
/*stm_aix("p0i2","p0i0",[0,"Wages Structure","","",-1,-1,0,"","_self","","","","",0,0,0,"","",12,9,0,0,1,"#FFFFFF",0,"#336600"],70,0);
stm_bpx("p4","p1",[]);
stm_aix("p4i0","p1i0",[0," Minimum Wages ","","",-1,-1,0,"","_self","","","","",0,0,0,"","",16,9,0,0,1,"#FFFFFF",0,"#336600"],130,0);
stm_bpx("p5","p2",[]);
stm_aix("p5i0","p4i0",[0," Add","","",-1,-1,0,"displayMinimumWagesParameter.do?hiddenOperation=Add","_self","","","","",0,0,0,"","",0,0],130,0);
stm_aix("p5i1","p5i0",[0," Update","","",-1,-1,0,"displayMinimumWagesParameter.do?hiddenOperation=Update"],130,0);
stm_aix("p5i2","p5i0",[0," View","","",-1,-1,0,"displayMinimumWagesParameterView.do?hiddenOperation=View"],130,0);
stm_ep();
stm_aix("p4i1","p4i0",[0," Basic"],130,0);
stm_bpx("p6","p2",[]);
stm_aix("p6i0","p5i0",[0," Add","","",-1,-1,0,"displayStateForCityAndZone.do?hiddenOperation=SelectZoneAndCategoryAdd"],130,0);
stm_aix("p6i1","p5i0",[0," Update","","",-1,-1,0,"displayStateForCityAndZone.do?hiddenOperation=SelectZoneAndCategoryUpdate"],130,0);
stm_aix("p6i2","p5i0",[0," View","","",-1,-1,0,"displayStateForCityAndZone.do?hiddenOperation=SelectZoneAndCategoryView"],130,0);
stm_ep();
stm_aix("p4i2","p4i0",[0," VDA"],130,0);
stm_bpx("p7","p2",[]);
stm_aix("p7i0","p5i0",[0," Add","","",-1,-1,0,"displayVdaEntryForm.do?hiddenOperation=Add"],130,0);
stm_aix("p7i1","p5i0",[0," Update","","",-1,-1,0,"displayVdaEntryForm.do?hiddenOperation=Update"],130,0);
stm_aix("p7i2","p5i0",[0," View","","",-1,-1,0,"displayVdaEntryForm.do?hiddenOperation=View"],130,0);
stm_ep();
stm_ep();*/

stm_aix("p0i4","p0i0",[0,"Profile","","",-1,-1,0,"","_self","","","","",0,0,0,"","",12,9,0,0,1,"#9cc2c9",0,"#83A04A"],70,0);
stm_bpx("p12","p2",[1,4]);
stm_aix("p12i0","p1i0",[0,"See Employee Profile","","",-1,-1,0,"displaySgxEmployeeFormAction.do?operation=List","_self","","","","",0,0,0,"","",0,0,0,0,1,"#FFFFFF",0,"#83A04A"],120,0);
stm_ep();
/*stm_aix("p0i5","p0i0",[0,"Data Bank","","",-1,-1,0,"","_self","","","","",0,0,0,"","",12,9,0,0,1,"#9cc2c9",0,"#003399"],70,0);
stm_bpx("p13","p1",[]);
stm_aix("p13i0","p1i0",[0," State ","","",-1,-1,0,"displayStateList.do?orderBy=name&asc=true","_self","","","","",0,0,0,"","",0,0,0,0,1,"#FFFFFF",0,"#003399"],120,0);
stm_aix("p13i1","p1i0",[0," District ","","",-1,-1,0,"displayStateList.do?orderBy=name&asc=true","_self","","","","",0,0,0,"","",0,0,0,0,1,"#FFFFFF",0,"#003399"],120,0);
stm_aix("p13i2","p13i0",[0," City & Zone","","",-1,-1,0,"","_self","","","","",0,0,0,"","",16,9],120,0);
stm_bpx("p14","p2",[]);
stm_aix("p14i0","p9i0",[0," Add","","",-1,-1,0,"displayStateForCityAndZone.do?hiddenOperation=Add"],120,0);
stm_aix("p14i1","p9i0",[0," Update","","",-1,-1,0,"displayStateForCityAndZone.do?hiddenOperation=Update"],120,0);
stm_aix("p14i2","p9i0",[0," View","","",-1,-1,0,"displayStateForCityAndZone.do?hiddenOperation=View"],120,0);
stm_ep();
stm_aix("p13i2","p13i0",[0," Post","","",-1,-1,0,"displayPostList.do?orderBy=name&asc=true"],120,0);
stm_aix("p13i3","p13i0",[0," Language","","",-1,-1,0,"displayLanguageList.do?orderBy=name&asc=true"],120,0);
stm_aix("p13i4","p13i0",[0," Industry","","",-1,-1,0,"displayIndustryList.do?orderBy=name&asc=true"],120,0);
stm_ep();*/
/*stm_aix("p0i6","p0i0",[0," Police Department","","",-1,-1,0,"","_self","","","","",0,0,0,"","",12,9,0,0,1,"#9cc2c9",0,"#BF9517"],60,0);
stm_bpx("p15","p12",[]);
stm_aix("p15i0","p1i0",[0," Police Organisation","","",-1,-1,0,"displayPoliceHead.do","_self","","","","",0,0,0,"","",0,0,0,0,1,"#FFFFFF",0,"#BF9517"],150,0);
stm_aix("p15i1","p15i0",[0," Police  State Organisation","","",-1,-1,0,"displayPoliceSubHead.do"],150,0);
stm_aix("p15i2","p15i0",[0," Police Station  ","","",-1,-1,0,"displayPoliceStation.do"],150,0);
stm_aix("p15i3","p15i0",[0," Police Chouki or Beat","","",-1,-1,0,"displayPoliceChouki.do"],150,0);
stm_aix("p15i4","p15i0",[0," Country Wise-List","","",-1,-1,0,"displayPoliceHeadList.do"],150,0);
stm_aix("p15i5","p15i0",[0," State Wise-List","","",-1,-1,0,"displayPoliceSubHeadList.do"],150,0);
stm_aix("p15i6","p15i0",[0," City Wise-List","","",-1,-1,0,"displayPoliceCityHeadList.do"],150,0);
stm_aix("p15i7","p15i0",[0," Police Station-List","","",-1,-1,0,"displayPoliceStationList.do"],150,0);
stm_aix("p15i8","p15i0",[0," Beat / Police-Chouki List","","",-1,-1,0,"displayPoliceChoukiList.do"],150,0);
stm_ep();*/
//stm_aix("p0i8","p0i0",[0,"Help","","",-1,-1,0,"","_self","","","","",0,0,0,"","",12,9,0,0,1,"#9cc2c9",1,"#993366"],60,0);

stm_aix("p0i16","p0i0",[0," Recruit & Appoint ","","",-1,-1,0,"","_self","","","","",0,0,0,"","",15,9,0,0,1,"#9cc2c9"]);
stm_bp("p1",[1,4,0,0,0,0,0,16,100,"stEffect(\"slip\")",-2,"stEffect(\"slip\")",-2,55,0,0,"#999999","transparent","",3,0,0,"#000000"]);
stm_aix("p1i0","p0i0",[0," New Registration","","",-1,-1,0,"displayGeneralInformation.do"]);
stm_aix("p1i1","p0i0",[0," Update Profile","","",-1,-1,0,"displayRecruitmentReport.do"]);
stm_aix("p1i1","p0i0",[0," Appoint New Employee","","",-1,-1,0,"displayAppointment.do","_self","","","","",0,0,0,"","",0,0,0,0,1,"#FFFFFF",0,"#a81515"]);
stm_ep();
stm_aix("p0i7","p0i0",[0,"Logs","","",-1,-1,0,"","_self","","","","",0,0,0,"","",12,9,0,0,1,"#9cc2c9",1,"#2BA9E0"],60,0);
stm_bpx("p16","p12",[]);
stm_aix("p16i0","p1i0",[0," LogOut","","",-1,-1,0,"displayLoginAction.do","_self","","","","",0,0,0,"","",0,0,0,0,1,"#FFFFFF",0,"#2BA9E0"],120,0);
stm_aix("p16i1","p16i0",[0," Home Page","","",-1,-1,0,"displayHomePage.do"],120,0);
stm_aix("p16i2","p16i0",[0," Change Password","","",-1,-1,0,"displayChangePassword.do"],120,0);
stm_ep();






stm_ep();
stm_em();
