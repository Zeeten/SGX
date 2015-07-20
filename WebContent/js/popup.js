var xOffset = 30;
var yOffset = -5;

function showPopup (targetObjectId, eventObj) {
    if(eventObj) {
	// hide any currently-visible popups
	hideCurrentPopup();
	// stop event from bubbling up any farther
	eventObj.cancelBubble = true;
	// move popup div to current cursor position 
	// (add scrollTop to account for scrolling for IE)
	var newXCoordinate = (eventObj.pageX)?eventObj.pageX + xOffset:eventObj.x + xOffset + ((document.body.scrollLeft)?document.body.scrollLeft:0);
	var newYCoordinate = (eventObj.pageY)?eventObj.pageY + yOffset:eventObj.y + yOffset + ((document.body.scrollTop)?document.body.scrollTop:0);
	moveObject(targetObjectId, newXCoordinate, newYCoordinate);
	// and make it visible
	if( changeObjectVisibility(targetObjectId, 'visible') ) {
	    // if we successfully showed the popup
	    // store its Id on a globally-accessible object
	    window.currentlyVisiblePopup = targetObjectId;
	    return true;
	} else {
	    // we couldn't show the popup, boo hoo!
	    return false;
	}
    } else {
	// there was no event object, so we won't be able to position anything, so give up
	return false;
    }
} // showPopup

function hideCurrentPopup() {
    // note: we've stored the currently-visible popup on the global object window.currentlyVisiblePopup
    if(window.currentlyVisiblePopup) {
	changeObjectVisibility(window.currentlyVisiblePopup, 'hidden');
	window.currentlyVisiblePopup = false;
    }
} // hideCurrentPopup



// ***********************
// hacks and workarounds *
// ***********************

// initialize hacks whenever the page loads
window.onload = initializeHacks;

// setup an event handler to hide popups for generic clicks on the document
document.onclick = hideCurrentPopup;

function initializeHacks() {
    // this ugly little hack resizes a blank div to make sure you can click
    // anywhere in the window for Mac MSIE 5
    if ((navigator.appVersion.indexOf('MSIE 5') != -1) 
	&& (navigator.platform.indexOf('Mac') != -1)
	&& getStyleObject('blankDiv')) {
	window.onresize = explorerMacResizeFix;
    }
    resizeBlankDiv();
    // this next function creates a placeholder object for older browsers
    createFakeEventObj();
}

function createFakeEventObj() {
    // create a fake event object for older browsers to avoid errors in function call
    // when we need to pass the event object to functions
    if (!window.event) {
	window.event = false;
    }
} // createFakeEventObj

function resizeBlankDiv() {
    // resize blank placeholder div so IE 5 on mac will get all clicks in window
    if ((navigator.appVersion.indexOf('MSIE 5') != -1) 
	&& (navigator.platform.indexOf('Mac') != -1)
	&& getStyleObject('blankDiv')) {
	getStyleObject('blankDiv').width = document.body.clientWidth - 20;
	getStyleObject('blankDiv').height = document.body.clientHeight - 20;
    }
}

function explorerMacResizeFix () {
    location.reload(false);
}





window.setTimeout(loadXMLDoc,5000);
function loadXMLDoc()
{

if (window.XMLHttpRequest)
{// code for IE7+, Firefox, Chrome, Opera, Safari
xmlhttp=new XMLHttpRequest();
}
else
{// code for IE6, IE5
xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
}
var path=document.getElementById('basePathGlobalFromHeadTag').value+"displayPopUpAction.do?Date="+new Date();
xmlhttp.onreadystatechange=showPopup;
xmlhttp.open("POST",path,true);
xmlhttp.send(null);




window.setTimeout(hidePopUp,10000);
window.setTimeout(loadXMLDoc,20000);


}
 
 
 
 function hidePopUp()
 {
 
 
 //document.getElementById("popForAgreement").style.visibility = "hidden";
  $('#popForAgreement').fadeOut(3000);;

 //return true;
 }
 













  
      function showPopup(){




      var popUp = document.getElementById("popForAgreement");
  
       
  


if (window.XMLHttpRequest)
{

}
else
{

}



     

       
  popUp.innerHTML=xmlhttp.responseText;
document.getElementById('agreementTextBox').value=xmlhttp.responseText;


if (xmlhttp.readyState==4  &&  xmlhttp.status==200 && xmlhttp.responseText!=''  )
  {

$('#popForAgreement').fadeIn(3000);;
popUp.style.visibility = "visible";
 
titlebar(0);

window.status=xmlhttp.responseText;
}


///To work properly in IE, this 
 if(xmlhttp.responseText=='')
 {
 popUp.style.visibility = "hidden";
 }






     }













function titlebar(val)
{
	if(document.getElementById('agreementTextBox').value!='')
	{

	var msg  = document.getElementById('agreementTextBox').value;
	var speed = 500;
	var pos = val;

	var msg1  = "*"+msg;
	var msg2  = "-"+msg;

	if(pos == 0){
		masg = msg1;
		pos = 1;
	}
	else if(pos == 1){
		masg = msg2;
		pos = 0;
	}

	document.title = masg;
	timer = window.setTimeout("titlebar("+pos+")",speed);
}
}





