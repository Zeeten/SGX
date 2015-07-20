//Rich HTML Balloon Tooltip: http://www.dynamicdrive.com/dynamicindex5/balloontooltip.htm
//Created: September 10th, 2006
//Updated: May 9th, 10 for window edge bug

var disappeardelay=250  //tooltip disappear delay (in miliseconds)
var verticaloffset=0 //vertical offset of tooltip from anchor link, if any
var enablearrowhead=1 //0 or 1, to disable or enable the arrow image
var arrowheadimg=["arrowdown.gif", "arrowup.gif"] //path to down and up arrow images
var arrowheadheight=11 //height of arrow image (amount to reveal)

/////No further editting needed

var ie=document.all
var ns6=document.getElementById&&!document.all
verticaloffset=(enablearrowhead)? verticaloffset+arrowheadheight : verticaloffset

function getposOffset(what, offsettype){
var totaloffset=(offsettype=="left")? what.offsetLeft : what.offsetTop;
var parentEl=what.offsetParent;
while (parentEl!=null){
totaloffset=(offsettype=="left")? totaloffset+parentEl.offsetLeft : totaloffset+parentEl.offsetTop;
parentEl=parentEl.offsetParent;
}
return totaloffset;
}

function showhide(obj, e){
dropmenuobj.style.left=dropmenuobj.style.top="-500px"
if (e.type=="mouseover")
obj.visibility="visible"
}

function iecompattest(){
return (document.compatMode && document.compatMode!="BackCompat")? document.documentElement : document.body
}

function clearbrowseredge(obj, whichedge){
if (whichedge=="rightedge"){
edgeoffsetx=0
var windowedge=ie && !window.opera? iecompattest().scrollLeft+iecompattest().clientWidth-15 : window.pageXOffset+window.innerWidth-15
dropmenuobj.contentmeasure=dropmenuobj.offsetWidth
if (windowedge-dropmenuobj.x < dropmenuobj.contentmeasure)
edgeoffsetx=dropmenuobj.contentmeasure-obj.offsetWidth
if (dropmenuobj.x-edgeoffsetx+dropmenuobj.contentmeasure>windowedge)
edgeoffsetx=dropmenuobj.x-windowedge+dropmenuobj.contentmeasure
return edgeoffsetx
}
else{
edgeoffsety=0
var topedge=ie && !window.opera? iecompattest().scrollTop : window.pageYOffset
var windowedge=ie && !window.opera? iecompattest().scrollTop+iecompattest().clientHeight-15 : window.pageYOffset+window.innerHeight-18
dropmenuobj.contentmeasure=dropmenuobj.offsetHeight
if (windowedge-dropmenuobj.y < dropmenuobj.contentmeasure) //move up?
edgeoffsety=dropmenuobj.contentmeasure+obj.offsetHeight+(verticaloffset*2)
return edgeoffsety
}
}

function displayballoontip(obj, e){ //main ballooon tooltip function
if (window.event) event.cancelBubble=true
else if (e.stopPropagation) e.stopPropagation()
if (typeof dropmenuobj!="undefined") //hide previous tooltip?
dropmenuobj.style.visibility="hidden"
clearhidemenu()
//obj.onmouseout=delayhidemenu
dropmenuobj=document.getElementById(obj.getAttribute("rel"))
showhide(dropmenuobj.style, e)
dropmenuobj.x=getposOffset(obj, "left")
dropmenuobj.y=getposOffset(obj, "top")+verticaloffset
dropmenuobj.style.left=dropmenuobj.x-clearbrowseredge(obj, "rightedge")+"px"
dropmenuobj.style.top=dropmenuobj.y-clearbrowseredge(obj, "bottomedge")+obj.offsetHeight+"px"
if (enablearrowhead)
displaytiparrow()
}

function displaytiparrow(){ //function to display optional arrow image associated with tooltip
tiparrow=document.getElementById("arrowhead")
tiparrow.src=(edgeoffsety!=0)? arrowheadimg[0] : arrowheadimg[1]
var ieshadowwidth=(dropmenuobj.filters && dropmenuobj.filters[0])? dropmenuobj.filters[0].Strength-1 : 0
//modify "left" value depending on whether there's no room on right edge of browser to display it, respectively
tiparrow.style.left=(edgeoffsetx!=0)? parseInt(dropmenuobj.style.left)+dropmenuobj.offsetWidth-tiparrow.offsetWidth-10+"px" : parseInt(dropmenuobj.style.left)+5+"px"
//modify "top" value depending on whether there's no room on right edge of browser to display it, respectively
tiparrow.style.top=(edgeoffsety!=0)? parseInt(dropmenuobj.style.top)+dropmenuobj.offsetHeight-tiparrow.offsetHeight-ieshadowwidth+arrowheadheight+"px" : parseInt(dropmenuobj.style.top)-arrowheadheight+"px"
tiparrow.style.visibility="visible"
}

function delayhidemenu(){
delayhide=setTimeout("dropmenuobj.style.visibility='hidden'; dropmenuobj.style.left=0; if (enablearrowhead) tiparrow.style.visibility='hidden'",disappeardelay)
}

function clearhidemenu(){
if (typeof delayhide!="undefined")
clearTimeout(delayhide)
}

function reltoelement(linkobj){ //tests if a link has "rel" defined and it's the ID of an element on page
var relvalue=linkobj.getAttribute("rel")
return (relvalue!=null && relvalue!="" && document.getElementById(relvalue)!=null && document.getElementById(relvalue).className=="balloonstyle")? true : false
}

function initalizetooltip(){
var all_links=document.getElementsByTagName("a")
if (enablearrowhead){
tiparrow=document.createElement("img")
tiparrow.setAttribute("src", arrowheadimg[0])
tiparrow.setAttribute("id", "arrowhead")
document.body.appendChild(tiparrow)
}
for (var i=0; i<all_links.length; i++){
if (reltoelement(all_links[i])){ //if link has "rel" defined and it's the ID of an element on page
all_links[i].onmouseover=function(e){
var evtobj=window.event? window.event : e
displayballoontip(this, evtobj)
}
all_links[i].onmouseout=delayhidemenu
}
}
}

if (window.addEventListener)
window.addEventListener("load", initalizetooltip, false)
else if (window.attachEvent)
window.attachEvent("onload", initalizetooltip)
else if (document.getElementById)
window.onload=initalizetooltip




// Added by Kamlesh Dhakad on 07-05-2011 for provide photo information
var theObj="";

function toolTip(text,me) {
//alert('function called.........');
theObj=me;
theObj.onmousemove=updatePos;
document.getElementById('toolTipBox').innerHTML=text;
document.getElementById('toolTipBox').style.display="block";
window.onscroll=updatePos;
}

function updatePos() {


var ev=arguments[0]?arguments[0]:event;
var x=ev.clientX;
var y=ev.clientY;

//alert(x+ ''+ y);
diffX=24;
diffY=0;
document.getElementById('toolTipBox').style.top = y-2+diffY+document.body.scrollTop+ "px";
document.getElementById('toolTipBox').style.left = x-2+diffX+document.body.scrollLeft+"px";
theObj.onmouseout=hideMe;
}

function hideMe() {
   document.getElementById('toolTipBox').style.display="none";
}
