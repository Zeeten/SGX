stm_bm(["menu4b6c",730,"","blank.gif",0,"","",0,0,250,0,1000,1,0,0,"","",0,0,1,2,"default","hand",""],this);
stm_bp("p0",[0,4,0,0,0,4,0,16,100,"",-2,"",-2,90,0,0,"#999999","transparent","",3,0,0,"#E6FAB4 #788C32 #788C32 #E6FAB4"]);
stm_ai("p0i0",[0," मुख्य पृष्ठ","","",-1,-1,0,"displayHomePage.do","_self","","","","",0,0,0,"","",10,9,0,0,1,"",0,"#a84200",0,"bg_24.gif","",3,3,1,1,"#95C5D8","#CFE9F4","#003399","#FFFFFF","9pt Verdana"," 9pt Verdana",0,0],0,24);
stm_ai("p0i0",[0,"लोकेशन / पोस्ट","","",-1,-1,0,"","_self","","","","",0,0,0,"","",10,9,0,0,1,"",0,"#a84200",0,"bg_24.gif","",3,3,1,1,"#95C5D8","#CFE9F4","#003399","#FFFFFF","9pt Verdana"," 9pt Verdana",0,0],0,24);
stm_bp("p1",[1,4,0,0,0,0,0,16,100,"stEffect(\"slip\")",-2,"stEffect(\"slip\")",-2,55,0,0,"#999999","transparent","",3,0,0,"#000000"]);
stm_aix("p1i0","p0i0",[0," लोकेशन","","",-1,-1,0,"displayPrincipalLocationView.do","_self","","","","",0,0,0,"","",12,9,0,0,1,"#FFFFFF",0,"#a84200",0,""],100,0);
stm_bpx("p2","p1",[1,2,0,0,0,0,0,0]);
stm_aix("p2i0","p0i0",[0," एड","","",-1,-1,0,"displayStateForCityAndZone.do?hiddenOperation=AddLocation","_self","","","","",0,0,0,"","",0,0,0,0,1,"#FFFFFF",0,"#a84200",0,"","",3,3,1,1,"#95C5D8","#CFE9F4","#003399","#FFFFFF","9pt Verdana","9pt Verdana"],100,0);
stm_aix("p2i1","p2i0",[0," अपडेट","","",-1,-1,0,"displayStateForCityAndZone.do?hiddenOperation=UpdateLocation"]);
stm_aix("p2i2","p2i0",[0," व्यू","","",-1,-1,0,"displayPrincipalLocationView.do"]);
stm_ep();
stm_aix("p1i1","p1i0",[0," पोस्ट","","",-1,-1,0,"displayPrincipalEmployerForPostView.do","_self","","","","",0,0,0,"","",12,9,0,0,1,"#FFFFFF",0,"#a84200",0,""],100,0);
stm_bpx("p3","p2",[]);
stm_aix("p3i0","p2i0",[0," एड","","",-1,-1,0,"displaySelectLocationForPost.do?hiddenOperation=Add","_self","","","","",0,0,0,"","",0,0,0,0,1,"#FFFFFF",0,"#a84200",0,"","",3,3,1,2,"#95C5D8","#CFE9F4","#003399","#FFFFFF","9pt Verdana","9pt Verdana"],100,0);
stm_aix("p3i1","p2i1",[0," अपडेट","","",-1,-1,0,"displaySelectLocationForPost.do?hiddenOperation=Update"],100,0);
stm_aix("p3i2","p2i2",[0," व्यू","","",-1,-1,0,"displayPrincipalEmployerForPostView.do"],100,0);
stm_ep();
stm_ep();
stm_aix("p0i4","p0i0",[0,"सर्विस प्रोवायडर","","",-1,-1,0,"","_self","","","","",0,0,0,"","",8,9,0,0,1,"#9cc2c9",0,"#a81515"],0,24);
stm_bpx("p8","p1",[]);
stm_aix("p8i0","p2i0",[0," एड","","",-1,-1,0,"displayAddServiceProviderByPE.do","_self","","","","",0,0,0,"","",0,0,0,0,1,"#FFFFFF",0,"#a81515"]);
stm_aix("p8i1","p8i0",[0," अपडेट ","","",-1,-1,0,"displayUpdateSPAddedByPEAction.do","_self","","","","",0,0,0,"","",0,0,0,0,1,"#FFFFFF",0,"#a81515"]);
stm_aix("p8i2","p8i0",[0," व्यू","","",-1,-1,0,"displayPEAndSPListAction.do"]);
stm_aix("p8i3","p1i0",[0," Corporate Employee","","",-1,-1,0,"displayEmployeeList.do","_self","","","","",0,0,0,"","",16,9,0,0,1,"#FFFFFF",0,"#a81515"]);
stm_aix("p8i5","p2i0",[0," चरित्र सत्यापन","","",-1,-1,0,""]);
stm_bpx("p8","p1",[1,2,0,0,0,0,0,0]);
stm_aix("p8i5","p2i0",[0," Records Of Employees Sent To SP","","",-1,-1,0,""]);
stm_bpx("p8","p1",[1,2,0,0,0,0,0,0]);
stm_aix("p8i0","p0i0",[0," Exiting Employee","","",-1,-1,0,"displayCharacterVerificationListOfEmployee.do","_self","","","","",0,0,0,"","",0,0,0,0,1,"#FFFFFF",0,"#a84200",0,"","",3,3,1,1,"#95C5D8","#CFE9F4","#003399","#FFFFFF","9pt Verdana","9pt Verdana"]);
stm_aix("p8i1","p2i0",[0," Ex Employee","","",-1,-1,0,"displayCharacterVerificationListOfXEmployee.do"]);
stm_aix("p8i1","p2i0",[0," Records Send By Own Delegates","","",-1,-1,0,"displayCharacterVerificationList.do?operation=EmployeeRequestSentByPEDelegateToPESentToSP"]);
stm_ep();
stm_aix("p8i5","p2i0",[0," प्रोफाइल पहा","","",-1,-1,0,""]);
stm_bpx("p8","p1",[1,2,0,0,0,0,0,0]);
stm_aix("p8i1","p2i0",[0," Send By You To SP ","","",-1,-1,0,"displayCharacterVerificationList.do?operation=RegisterEmployeeByPE"]);
stm_aix("p8i1","p2i0",[0," Send By Own Delegates To You And You Send To SP","","",-1,-1,0,"displayCharacterVerificationList.do?operation=ViewListSendByOwnDelegateAndAddPE"]);
stm_ep();
stm_aix("p8i5","p2i0",[0," अपडेट प्रोफाइल","","",-1,-1,0,"displayCharacterVerificationList.do?operation=UpdateRegisterByPE"]);
stm_aix("p8i2","p2i0",[0," प्रोफाइल शोध","","",-1,-1,0,"displayCharacterVerificationEmployeeSearch.do?operation=Search"]);
//stm_aix("p9i0","p8i0",[0,"Profile"],130,0);
stm_ep();
stm_ep();
stm_aix("p0i1","p0i0",[0,"एक्सेप्टेन्स","","",-1,-1,0,"","_self","","","","",0,0,0,"","",8,9,0,0,1,"#a84200",0,"#005591"],0,24);
stm_bpx("p4","p1",[]);
stm_aix("p4i0","p1i0",[0," एड"],100,0);
stm_bpx("p5","p2",[]);
stm_aix("p5i0","p2i0",[0," नवीन एक्सेप्टेन्स","","",-1,-1,0,"displaySelectLocationIndustry.do?hiddenOperation=Add"],250,0);
stm_aix("p5i1","p2i0",[0," नवीन डेसिग्नेशन पासून चालू एक्सेप्टेन्स पर्यंत ","","",-1,-1,0,"displaySelectLocationIndustry.do?hiddenOperation=AddNew"],250,0);
stm_ep();
stm_aix("p4i1","p1i0",[0," अपडेट","","",-1,-1,0,"displaySelectLocationIndustry.do?hiddenOperation=Update"]);
stm_aix("p4i2","p4i1",[0," व्यू","","",-1,-1,0,"displaySelectLocationToSeeAcceptanceAction.do"]);
stm_ep();
stm_aix("p0i2","p0i0",[0,"वर्कऑर्डर","","",-1,-1,0,"","_self","","","","",0,0,0,"","",10,9,0,0,1,"#9cc2c9",0,"#b28800"],0,24);
stm_bpx("p6","p2",[1,4]);
stm_aix("p6i0","p2i0",[0," प्लेस","","",-1,-1,0,"displaySelectLocationForWorkOrderAction.do?hiddenOperation=Add","_self","","","","",0,0,0,"","",0,0,0,0,1,"#FFFFFF",0,"#b28800"],60,0);
stm_aix("p6i1","p6i0",[0," अपडेट","","",-1,-1,0,"displaySelectLocationForWorkOrderAction.do?hiddenOperation=Update"],60,0);
stm_aix("p6i2","p6i0",[0," व्यू","","",-1,-1,0,"displayWorkOrderView.do"],60,0);
stm_ep();
stm_aix("p0i3","p0i0",[0,"ऑनलाइन अग्रीमेंट","","",-1,-1,0,"","_self","","","","",0,0,0,"","",16,9,0,0,1,"#9cc2c9",0,"#6b0046"],120,24);
stm_bpx("p7","p6",[]);
stm_aix("p7i0","p2i0",[0," सर्विस प्रोवायडरकडे फ़ॉरवर्ड","","",-1,-1,0,"displaySelectLocationAndIndustryForAgreement.do?hiddenOperation=Add","_self","","","","",0,0,0,"","",0,0,0,0,1,"#FFFFFF",0,"#6b0046"],150,0);
stm_aix("p7i1","p7i0",[0," सर्विस प्रोवायडरकडून फ़ॉरवर्ड","","",-1,-1,0,"displayAgreementSampleFwdBySE.do?hiddenOperation=SelectAgreementFwdBySE"],150,0);
stm_aix("p7i2","p7i0",[0," व्यू","","",-1,-1,0,"displayAgreementView.do"],150,0);
stm_aix("p7i3","p7i0",[0," रीओपन","","",-1,-1,0,"displaySelectLocationAndIndustryForAgreement.do?hiddenOperation=Reopen"],150,0);
stm_ep();
stm_aix("p0i5","p0i3",[0,"डेलिगेशन"],0,24);
stm_bpx("p10","p1",[]);
stm_aix("p10i0","p1i0",[0," सर्विस प्रोवायडर डेलीगेटर","","",-1,-1,0,"displayDelegatesForSEDelegateView.do","_self","","","","",0,0,0,"","",0,0,0,0,1,"#FFFFFF",0,"#6b0046"],150,0);
stm_aix("p10i0","p1i0",[0," प्रिंसिपल एम्प्लोयर डेलीगेटर","","",-1,-1,0,"","_self","","","","",0,0,0,"","",14,9,0,0,1,"#FFFFFF",0,"#6b0046"]);
stm_bpx("p11","p2",[]);
stm_aix("p11i0","p7i0",[0," एड","","",-1,-1,0,"displayPrincipalEmployerDelegateAction.do?hiddenOperation=add"],130,0);
stm_aix("p11i1","p7i0",[0," एडिट","","",-1,-1,0,"displayPrincipalEmployerDelegateUpdateAction.do?"]);
stm_aix("p11i2","p7i2",[0," व्यू","","",-1,-1,0,"displayPrincipalEmployerDelegateListAction.do?"]);
stm_aix("p11i2","p7i2",[0," Assign Location","","",-1,-1,0,""],70,0);
stm_bpx("p11","p2",[]);
stm_aix("p11i0","p7i0",[0," Add","","",-1,-1,0,"displayAssignPrincipalEmployerDelegatorsLocations.do"],60,0);
stm_aix("p11i0","p7i0",[0," Update","","",-1,-1,0,"displayPrincipalEmployerDelegatorsUpdateLocations.do"],60,0);
stm_aix("p11i0","p7i0",[0," View","","",-1,-1,0,"displayPrincipalEmployerDelegatorsLocationsView.do"],60,0);
stm_ep();
stm_ep();
stm_ep();
stm_aix("p0i6","p0i1",[0,"डॅश बोर्ड","","",-1,-1,0,"","_self","","","","",0,0,0,"","",14,9,0,0,1,"#FFFFFF"]);
stm_bpx("p12","p6",[]);
stm_aix("p12i0","p10i0",[0," उपस्थिति रिपोर्ट पहा","","",-1,-1,0,"displayAttendanceReportByAgency.do","_self","","","","",0,0,0,"","",0,0]);
stm_aix("p12i1","p12i0",[0," ई.पी.एफ.","","",-1,-1,0,"displaySelectLocationForEmployeeEpfReportAction.do"]);
stm_aix("p12i2","p12i0",[0," ई.पी.एफ. १२ए चलान  रिपोर्ट","","",-1,-1,0,""]);
stm_aix("p12i3","p12i0",[0," ई.एस.आइ.सी.","","",-1,-1,0,""]);
stm_aix("p12i4","p12i0",[0," बिल","","",-1,-1,0,"displayBillView.do"]);
stm_aix("p12i5","p12i0",[0," सर्व","","",-1,-1,0,"displayViewTheListOfPrincipalEmployerAction.do"]);
stm_aix("p12i6","p12i0",[0," येण्याची आणि जाण्याची वेळ पहा ","","",-1,-1,0,"displayInAndOutTimeAction.do"]);
stm_ep();
//stm_aix("p0i7","p0i6",[0,"मदत"]);
stm_aix("p0i7","p0i6",[0,"लॉग्स"]);
stm_bpx("p13","p6",[]);
stm_aix("p13i0","p2i0",[0," लॉग आउट","","",-1,-1,0,"displayLoginAction.do?operation=LogOut","_self","","","","",0,0,0,"","",0,0,0,0,1,"#FFFFFF",0,"#005591"]);
stm_aix("p13i1","p13i0",[0," मुख्य पृष्ठ","","",-1,-1,0,"displayHomePage.do"]);
stm_aix("p13i2","p13i0",[0," पासवर्ड बदला","","",-1,-1,0,"displayChangePassword.do"]);
stm_ep();
stm_ep();
stm_em();


















