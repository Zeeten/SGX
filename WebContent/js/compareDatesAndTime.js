//Author Prashant

function compareTwoDatesGlobal(startDate, endDate,mode) {
	
	var startDate = startDate.split("/");
	var endDate = endDate.split("/");
	startDateYear = startDate[2];
	endDateYear = endDate[2];
	startDateMonth = startDate[1] - 1;//sets months to default values i.e Jan = 0; Feb = 1; etc.
	endDateMonth = endDate[1] - 1;
	startDateDay = startDate[0];
	endDateDay = endDate[0];
	startDate = new Date(startDateYear, startDateMonth, startDateDay);
	endDate = new Date(endDateYear, endDateMonth, endDateDay);
	dif = startDate - endDate;//difference in milliseconds
	dif = Math.ceil(dif / 1000 / 60 / 60 / 24);//difference in days
	if (dif > 0) {//if the date is in the future
		alert(mode+" End Date Cannot Be Less Than Start Date");
		return false;
	}
else
{
return true;
}

}


