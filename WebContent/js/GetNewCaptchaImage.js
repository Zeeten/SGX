
var xmlCaptcha;
function loadXMLCaptcha()
{
if (window.XMLHttpRequest)
{// code for IE7+, Firefox, Chrome, Opera, Safari
xmlCaptcha=new XMLHttpRequest();
}
else
{// code for IE6, IE5
xmlCaptcha=new ActiveXObject("Microsoft.XMLHTTP");
}
}









function getNewCaptchaImage()
{
try
{

	
	document.getElementById('captchaId').value='';
	
	
  document.getElementById('captchaImageId').src=document.getElementById('basePathGlobalFromHeadTag').value+"images/loading.gif";
 
 
    loadXMLCaptcha();
	queryString=document.getElementById('basePathGlobalFromHeadTag').value+"displayCaptchaVerificationAction.do?hiddenOperation=nextCaptcha"+"&Date="+new Date();
	xmlCaptcha.onreadystatechange = handleCaptchaGenerateForRegistration;
	xmlCaptcha.open("POST", queryString, true);
	xmlCaptcha.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
	xmlCaptcha.send(null);
}
catch(e)
{

}
}


function handleCaptchaGenerateForRegistration() {
	if (xmlCaptcha.readyState == 4) {
	
	document.getElementById('captchaImageId').src=document.getElementById('basePathGlobalFromHeadTag').value+"Captcha.jpg?"+Math.random(); 
	 document.getElementById('CaptchaDiv').innerHTML='';
	}
}











 function imgRefresh()
 {
basePath=document.getElementById('basePathGlobalFromHeadTag').value;
  var target_image = document.getElementById("captchaId");
  target_image.src = basePath+"Captcha.jpg";
  alert(target_image.src);
  }
  
  
function enlargeCaptcha(obj,mode)
{
var xx=obj.src;
var width=obj.width;
var height=obj.height;
if(mode=='Login')
{
document.getElementById('captchaId').style.visibility = 'hidden';
document.getElementById('refreshCaptchaImageId').style.visibility = 'hidden';
}

document.getElementById("captchaImageId").width=150;
document.getElementById("captchaImageId").height=45;

}

       
function BackToOriginalCaptcha(obj,width,height,mode)
{
var xx=obj.src;
if(mode=='Login')
{
document.getElementById('captchaId').style.visibility = 'visible';
document.getElementById('refreshCaptchaImageId').style.visibility = 'visible';
}
document.getElementById("captchaImageId").width=width;
document.getElementById("captchaImageId").height=height;
}






function validateCaptcha()
{
try
{
document.getElementById('CaptchaDiv').innerHTML ='' ;
document.getElementById('captchaHidden').value ='' ;

if(document.getElementById('captchaId').value=='')
{
}
else
{
document.getElementById('buttonId').style.display = 'none';
document.getElementById('CaptchaDiv').innerHTML=
  '<img src="images/loading.gif" width="25" height="25" alt="Loading..">'+'<font face="Verdana" size="1" color="#800000">Verifying code.</font>' ;
    loadXMLCaptcha();
 	captchaValue=document.getElementById('captchaId').value;
	queryString=document.getElementById('basePathGlobalFromHeadTag').value+"displayCaptchaVerificationAction.do?hiddenOperation=checkCaptcha&captcha="+captchaValue;
	xmlCaptcha.onreadystatechange = handleCaptcha;
	xmlCaptcha.open("POST", queryString, true);
	xmlCaptcha.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
	xmlCaptcha.send(null);
}
}
catch(e)
{
alert(e);
}
}


function handleCaptcha() {
	if (xmlCaptcha.readyState == 4) {
	document.getElementById('buttonId').style.display = 'block';
		document.getElementById('CaptchaDiv').innerHTML='';
		if (xmlCaptcha.status == 200) {
    if(xmlCaptcha.responseText=="Error")
    {
  document.getElementById('captchaHidden').value='Error';
  document.getElementById('CaptchaDiv').innerHTML ='<b><font face="Verdana" size="2" color="#800000">Wrong code</font></b>' ;
  document.getElementById('captchaImageId').src=document.getElementById('basePathGlobalFromHeadTag').value+"Captcha.jpg?"+Math.random();; 
	 }
    else
    {
  document.getElementById('captchaHidden').value='NoError';
	}
    
    
    	}
}
}

