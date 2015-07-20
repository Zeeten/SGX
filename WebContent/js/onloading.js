
var counterCaptchaGlobal = 0;
var pictures = new Array(3);
var logoutPermanentGlobal=0;
//window.setTimeout(onLoadCommon,1000);


function onLoadCommon()
{
logoutGlobal();
}
function logoutGlobal()
{
  //alert("gg=="+gg);
//alert("Global="+logoutPermanentGlobal);
if(document.getElementById('globalLogout').value=='LogOut')
{
window.location.replace('http://localhost:8080/Sgx1/displayLoginAction.do');
}
//window.setTimeout(logoutGlobal,1000);


}
