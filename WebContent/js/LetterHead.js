


function showSampleId(obj)
{

try
{
if(obj.value!=-1)
{

var idCombo = document.getElementById('functionalityId');
    var idComboText = idCombo.options[idCombo.selectedIndex].text;

document.getElementById('functionalityName').value=idComboText;

document.getElementById('sampleIdDiv1').style.display='';
document.getElementById('sampleIdDiv2').style.display='';

}
else
{
document.getElementById('functionalityName').value='';

document.getElementById('sampleId').selectedIndex=0;

document.getElementById('sampleIdDiv1').style.display='none';
document.getElementById('sampleIdDiv2').style.display='none';


}


}


catch(e)
{
alert(e);

}
}



function changeDraggableDiv(divId)
{

divId.innerHTML='';
elementsWidth='100px';
var originalDivId=document.getElementById(divId.id);
var textName=document.getElementById(divId.id+'textName').value;
var textNameObject=document.getElementById(divId.id+'textName');

var textFontFace=document.getElementById(divId.id+'FontFace').value;
var textFontFaceObject=document.getElementById(divId.id+'FontFace');

var textFontSize=document.getElementById(divId.id+'FontSize').value;
var textFontSizeObject=document.getElementById(divId.id+'FontSize');
var textFontWeight=document.getElementById(divId.id+'FontWeight').value;
var textFontWeightObject=document.getElementById(divId.id+'FontWeight');
var textFontColor=document.getElementById(divId.id+'FontColor').value;
var textFontColorObject=document.getElementById(divId.id+'FontColor');



var textPrimaryId=document.getElementById(divId.id+'primaryId').value;

if(textFontSize==1)
{
textFontSizeTextNode="1 (8 pt)";
}


else if(textFontSize==2)
{
textFontSizeTextNode="2(10 pt)";
}

else if(textFontSize==3)
{
textFontSizeTextNode="3(12 pt)";
}
else if(textFontSize==4)
{
textFontSizeTextNode="4(14 pt)";
}
else
{
textFontSize=2;
textFontSizeTextNode="2(10 pt)";
}


var elementText = document.createElement("input");
elementText.type = "text";
elementText.value=textName;
elementText.id = "TextElementId"+textPrimaryId;
elementText.name = "TextElementId"+textPrimaryId;

  elementText.style.width=elementsWidth;
  

elementText.style.color="#000080";
	  elementText.style.fontFamily="Verdana";
	  elementText.style.fontSize="8pt";
	  
	  elementText.onclick=function () {changeDivText(this,document.getElementById(varyDiv.id));};
elementText.onchange=function () {changeDivText(this,document.getElementById(varyDiv.id));};
elementText.onkeypress=function () {changeDivText(this,document.getElementById(varyDiv.id));};
elementText.onkeydown=function () {changeDivText(this,document.getElementById(varyDiv.id));};
elementText.onkeyup=function () {changeDivText(this,document.getElementById(varyDiv.id));};
	  
	  
	 elementText.ondblclick=function () {
newDivElements(varyDiv,elementText);
};
  

	
var elementFontFace = document.createElement("select");
	            


elementFontFace.name="fontWeight";
elementFontFace.style.width=elementsWidth;	  


elementFontFace.id="fontWeight"+textPrimaryId;

elementFontFace.style.color="#000080";
	  elementFontFace.style.fontFamily="Verdana";
	  elementFontFace.style.fontSize="8pt";
	  



  
var option=document.createElement("option");
option.appendChild(document.createTextNode(textFontFace));
option.setAttribute("value",textFontFace);

elementFontFace.appendChild(option);
  

var option=document.createElement("option");
option.appendChild(document.createTextNode("Verdana"));
option.setAttribute("value","Verdana");

elementFontFace.appendChild(option);



var option=document.createElement("option");
option.appendChild(document.createTextNode("Arial"));
option.setAttribute("value","Arial");

elementFontFace.appendChild(option);




var option=document.createElement("option");
option.appendChild(document.createTextNode("Courier"));
option.setAttribute("value","Courier");

elementFontFace.appendChild(option);




var option=document.createElement("option");
option.appendChild(document.createTextNode("Comic Sans MS"));
option.setAttribute("value","Comic Sans MS");

elementFontFace.appendChild(option);



var option=document.createElement("option");
option.appendChild(document.createTextNode("Georgia"));
option.setAttribute("value","Georgia");

elementFontFace.appendChild(option);





var option=document.createElement("option");
option.appendChild(document.createTextNode("Impact"));
option.setAttribute("value","Impact");

elementFontFace.appendChild(option);




var option=document.createElement("option");
option.appendChild(document.createTextNode("Times"));
option.setAttribute("value","Times");


elementFontFace.appendChild(option);



var option=document.createElement("option");
option.appendChild(document.createTextNode("Trebuchet MS"));
option.setAttribute("value","Trebuchet MS");
elementFontFace.appendChild(option);



elementFontFace.onfocus=function () {changeFontFace(this,document.getElementById(varyDiv.id));};
         
    elementFontFace.onkeypress=function () {changeFontFace(this,document.getElementById(varyDiv.id));};
     elementFontFace.onclick=function () {changeFontFace(this,document.getElementById(varyDiv.id));};
    elementFontFace.onblur=function () {changeFontFace(this,document.getElementById(varyDiv.id));};

var elementFontSize = document.createElement("select");
	           

elementFontSize.id = "fontSize"+textPrimaryId;
elementFontSize.name="fontSize";

elementFontSize.style.color="#000080";
	  elementFontSize.style.fontFamily="Verdana";
	  elementFontSize.style.fontSize="8pt";
elementFontSize.style.width=elementsWidth;	  


var option=document.createElement("option");
option.appendChild(document.createTextNode(textFontSizeTextNode));
option.setAttribute("value",textFontSize);

elementFontSize.appendChild(option);

var option=document.createElement("option");
option.appendChild(document.createTextNode("1 (8 pt)"));
option.setAttribute("value","1");

elementFontSize.appendChild(option);




var option=document.createElement("option");
option.appendChild(document.createTextNode("2(10 pt)"));
option.setAttribute("value","2");

elementFontSize.appendChild(option);




var option=document.createElement("option");
option.appendChild(document.createTextNode("3(12 pt)"));
option.setAttribute("value","3");

elementFontSize.appendChild(option);



var option=document.createElement("option");
option.appendChild(document.createTextNode("4(14 pt)"));
option.setAttribute("value","4");
elementFontSize.appendChild(option);




elementFontSize.onfocus=function () {changeFont(this,document.getElementById(varyDiv.id));};
         
    elementFontSize.onkeypress=function () {changeFont(this,document.getElementById(varyDiv.id));};
     elementFontSize.onclick=function () {changeFont(this,document.getElementById(varyDiv.id));};
    elementFontSize.onblur=function () {changeFont(this,document.getElementById(varyDiv.id));};
    
 


var elementFontWeight = document.createElement("select");

elementFontWeight.id = "fontWeight"+textPrimaryId;
elementFontWeight.name="fontWeight";
elementFontWeight.style.width=elementsWidth;	  


elementFontWeight.style.color="#000080";
	  elementFontWeight.style.fontFamily="Verdana";
	  elementFontWeight.style.fontSize="8pt";
	  


var option=document.createElement("option");

option.appendChild(document.createTextNode(textFontWeight));
option.setAttribute("value",textFontWeight);

elementFontWeight.appendChild(option);


var option=document.createElement("option");
option.appendChild(document.createTextNode("Normal"));
option.setAttribute("value","Normal");

elementFontWeight.appendChild(option);



var option=document.createElement("option");
option.appendChild(document.createTextNode("Normal Underline"));
option.setAttribute("value","Normal Underline");

elementFontWeight.appendChild(option);




var option=document.createElement("option");
option.appendChild(document.createTextNode("Bold"));
option.setAttribute("value","Bold");

elementFontWeight.appendChild(option);




var option=document.createElement("option");
option.appendChild(document.createTextNode("Bold Underline"));
option.setAttribute("value","Bold Underline");

elementFontWeight.appendChild(option);



var option=document.createElement("option");
option.appendChild(document.createTextNode("Italic"));
option.setAttribute("value","Italic");

elementFontWeight.appendChild(option);





var option=document.createElement("option");
option.appendChild(document.createTextNode("Italic Underline"));
option.setAttribute("value","Italic Underline");

elementFontWeight.appendChild(option);




var option=document.createElement("option");
option.appendChild(document.createTextNode("Bold Italic"));
option.setAttribute("value","Bold Italic");
elementFontWeight.appendChild(option);




var option=document.createElement("option");
option.appendChild(document.createTextNode("Bold Italic Underline"));
option.setAttribute("value","Bold Italic Underline");
elementFontWeight.appendChild(option);



elementFontWeight.onfocus=function () {changeFontWeight(this,document.getElementById(varyDiv.id));};
         
    elementFontWeight.onkeypress=function () {changeFontWeight(this,document.getElementById(varyDiv.id));};
     elementFontWeight.onclick=function () {changeFontWeight(this,document.getElementById(varyDiv.id));};
    elementFontWeight.onblur=function () {changeFontWeight(this,document.getElementById(varyDiv.id));};
    




elementFontWeight.appendChild(option);
	



var elementFontColor = document.createElement("input");
elementFontColor.type = "text";
elementFontColor.value=textFontColor;
elementFontColor.id = "elementFontColor"+textPrimaryId;
  elementFontColor.style.width=elementsWidth;	  
  
elementFontColor.style.color="#000080";
	  elementFontColor.style.fontFamily="Verdana";
	  elementFontColor.style.fontSize="8pt";
	  
  elementFontColor.onfocus=function () {


document.getElementById(varyDiv.id).style.color=this.value;
};

elementFontColor.onchange=function () {


document.getElementById(varyDiv.id).style.color=this.value;
};
  
 elementFontColor.onclick=function () {

showColorPicker(this);
};
 





var varyDiv = document.createElement('div');
     varyDiv.id='contentsDivId'+textPrimaryId;
	 varyDiv.style.width=elementsWidth;
	 varyDiv.style.height='35px';
	 varyDiv.style.overflow='auto';
	varyDiv.style.color='#000080';
	varyDiv.style.verticalAlign='top';

	
	divId.appendChild(varyDiv);
  changeFontWeight(textFontWeightObject,varyDiv);
 changeFont(textFontSizeObject,varyDiv);
  changeFontFace(textFontFaceObject,varyDiv);
  varyDiv.style.color=textFontColorObject.value;
  varyDiv.innerHTML=textName;
 
 
var elementSaveButton = document.createElement("input");
elementSaveButton.type = "button";
elementSaveButton.value='Save';


elementSaveButton.style.color="#000080";
	  elementSaveButton.style.fontFamily="Verdana";
	  elementSaveButton.style.fontSize="8pt";
	 
	 elementSaveButton.onclick=function () {
saveOriginalDiv(divId,document.getElementById('TextElementId'+textPrimaryId),textFontSizeObject,elementFontSize,textFontFaceObject,elementFontFace,elementFontColor,textFontColorObject,elementFontWeight,textFontWeightObject,textNameObject);
};
  
 
var elementCancelButton = document.createElement("input");
elementCancelButton.type = "button";
elementCancelButton.value='Cancel';


elementCancelButton.style.color="#000080";
	  elementCancelButton.style.fontFamily="Verdana";
	  elementCancelButton.style.fontSize="8pt";
	 elementCancelButton.onclick=function () {
cancelOriginalDiv(divId,textNameObject,textFontFaceObject,textFontSizeObject,textFontWeightObject,textFontColorObject);
};
	 
 
	  var breakLine = document.createElement('br');
	 
 

var rows=6
var columns=2
var tbl=document.createElement("table");
tbl.setAttribute("width","50px");

tbl.setAttribute("id","dynamic")
tbl.style.borderWidth="1px"
tbl.style.borderStyle="solid"
tbl.style.borderColor="#ccc"
var tb=document.createElement("tbody");
for (var i=0;i<rows;i++)
    {
    tr=document.createElement("tr");
tr.setAttribute('noWrap','true');
    var contents="";
  
    for (var j=0;j<columns;j++)
        {
        var td=document.createElement("td");
       
        var contentsNode=document.createTextNode("");
       td.setAttribute('noWrap','true');
 
 
 
 
  if(i==0 && j==0)
    {
        td.appendChild(elementSaveButton);
        td.appendChild(breakLine);
     
      
        td.appendChild(elementCancelButton);
    
    }
  
  if(i==0 && j==1)
    {
  td.appendChild(varyDiv)
    
       }
 
  if(i==1 && j==0)
    {
        contentsNode=document.createTextNode("Text")
        td.appendChild(contentsNode);
    }
  
  if(i==1 && j==1)
    {
    
  td.appendChild(elementText)
       }
      
 
  if(i==2 && j==0)
    {
        contentsNode=document.createTextNode("Font Face")
        td.appendChild(contentsNode);
    }
  
  if(i==2 && j==1)
    {
    
  td.appendChild(elementFontFace)
       }
 
 
 
 
  if(i==3 && j==0)
    {
        contentsNode=document.createTextNode("Font Size")
        td.appendChild(contentsNode);
    }
  
  if(i==3 && j==1)
    {
    
  td.appendChild(elementFontSize)
       }
  
  if(i==4 && j==0)
    {
        contentsNode=document.createTextNode("Font Weight")
        td.appendChild(contentsNode);
    }
  
  if(i==4 && j==1)
    {
    
  td.appendChild(elementFontWeight)
       }
         
   if(i==5 && j==0)
    {
        contentsNode=document.createTextNode("Color Chart")
        td.appendChild(contentsNode);
    } 
       if(i==5 && j==1)
    {
    
  td.appendChild(elementFontColor)
       }
  
       
 
       
       
       
        td.style.borderWidth="1px"
        td.style.borderStyle="solid"
        td.style.borderColor="#ccc"
        td.style.backgroundColor="#fff"
        td.style.padding="3px"
       td.style.color="#000080";
	  td.style.fontFamily="Verdana";
	  td.style.fontSize="8pt";
       
       
        tr.appendChild(td)
        
        }
    tb.appendChild(tr)
    }
tbl.appendChild(tb)

	 
	  divId.appendChild(tbl);
	
	
	
	
	
	  
document.getElementById('temporaryColor').value=textPrimaryId;

}

function changeTemporaryColorHiddenBoxValue(TemporaryColorHiddenBoxValue)
{
document.getElementById('temporaryColor').value=TemporaryColorHiddenBoxValue;

}


function newDivElements(divId,element)
{
divId.innerHTML=element.value;
}


function cancelOriginalDiv(divId,textNameObject,textFontFaceObject,textFontSizeObject,textFontWeightObject,textFontColorObject)
{
divId.style.fontSize=changeFont(textFontSizeObject,document.getElementById(divId.id));
divId.style.fontFace=changeFontFace(textFontFaceObject,document.getElementById(divId.id));
divId.style.fontWeight=changeFontWeight(textFontWeightObject,document.getElementById(divId.id));
divId.style.color=textFontColorObject.value;

divId.innerHTML=textNameObject.value;

}


function saveOriginalDiv(divId,elementText,textFontSizeObject,elementFontSize,textFontFaceObject,elementFontFace,elementFontColor,textFontColorObject,elementFontWeight,textFontWeightObject,textNameObject)
{

textNameObject.value=elementText.value;



textFontSizeObject.value=elementFontSize.value;
textFontFaceObject.value=elementFontFace.value;
textFontColorObject.value=elementFontColor.value;

textFontWeightObject.value=elementFontWeight.value;

divId.style.fontSize=changeFont(elementFontSize,document.getElementById(divId.id));
divId.style.fontFace=changeFontFace(elementFontFace,document.getElementById(divId.id))

divId.style.fontWeight=changeFontWeight(elementFontWeight,document.getElementById(divId.id))

divId.style.color=textFontColorObject.value;

divId.innerHTML=elementText.value;

}


	      
function temporaryChangeDiv(contentsDivId)
    {
    contentsDivId.style.color=color_picker_form_field.value;
	
  
    }


function addTextData()
{

var temp=confirm('Are You Sure You Want To Proceed?')

if(temp==true)
{


document.getElementById('data').value='N';
document.getElementById('hiddenOperation').value='textDataAndLine';
document.getElementById('text_upload_form').submit();


return true;

}
else
{

return false;
}


}



function uploadImage()
{


document.getElementById('file_upload_form').hiddenOperation.value='Upload';







return true;
}





function changeDivText(text,contentsDivId)
{
contentsDivId.innerHTML=text.value;


}











function changeFontFace(currentObject,contentsDivId)
{


contentsDivId.style.fontFamily=currentObject.value;

}














function changeFont(currentObject,contentsDivId)
{
var changeFontValue=1;


if(currentObject.value==1)
{
changeFontValue=8;

}
if(currentObject.value==2)
{
changeFontValue=10;


}

if(currentObject.value==3)
{
changeFontValue=12;

}
if(currentObject.value==4)
{
changeFontValue=14;


}
if(currentObject.value==5)
{
changeFontValue=18;


}





contentsDivId.style.fontSize=changeFontValue+"pt";
return changeFontValue+"pt";;


}










function changeFontWeight(currentObject,contentsDivId)
{

if(currentObject.value=="Bold")
{


contentsDivId.style.fontWeight  ="Bold";
contentsDivId.style.textDecoration="";
}
if(currentObject.value=="Bold Underline")
{


contentsDivId.style.textDecoration="underline";
}


if(currentObject.value=="Italic")
{
contentsDivId.style.fontWeight  ="Normal";
contentsDivId.style.fontStyle  ="Italic";
contentsDivId.style.textDecoration="";
}

if(currentObject.value=="Italic Underline")
{
contentsDivId.style.fontWeight  ="Normal";
contentsDivId.style.fontStyle  ="Italic";
contentsDivId.style.textDecoration="underline";
}

if(currentObject.value=="Normal")
{

contentsDivId.style.fontWeight  ="Normal";
contentsDivId.style.textDecoration="";
}


if(currentObject.value=="Normal Underline")
{

contentsDivId.style.fontWeight  ="Normal";
contentsDivId.style.textDecoration="underline";
}


if(currentObject.value=="Bold Underline")
{

contentsDivId.style.fontWeight  ="Bold";
contentsDivId.style.textDecoration="underline";
}
if(currentObject.value=="Bold Italic")
{
contentsDivId.style.fontWeight  ="Bold";
contentsDivId.style.fontStyle  ="Italic";
contentsDivId.style.textDecoration="";
}



if(currentObject.value=="Bold Italic Underline")
{
contentsDivId.style.fontWeight  ="Bold";
contentsDivId.style.fontStyle  ="Italic";
contentsDivId.style.textDecoration="underline";
}


}









function getLetterHeadSample()
{

if(document.getElementById('sampleId').value==-1)
{

}

else
{
var idCombo = document.getElementById('sampleId');
    var idComboText = idCombo.options[idCombo.selectedIndex].text;

document.getElementById('sampleName').value=idComboText;

loadingSampleDiv.className = 'LetterHead8ptLeftRed';
   
loadingSampleDiv.innerHTML='Loading..';

document.getElementById('hiddenOperation').value='first';

document.getElementById('sampleLetterHeadFormId').submit();
return true;
}

}







var counterRow=10;

var counterRowForLine=0;





function addRowImageForLine(tableID) {
	    
	   $('#dataTableImage').fadeIn(3000); 
$('#dataTableImageLine').fadeIn(3000); 
document.getElementById('MaxMinDivId').innerHTML='<img src="images/minimize.jpg" width="15" height="15" onclick="hideLetterHead();" onmouseover="Tip(\'Hide\');" onmouseout="UnTip();" />';
 
	      var table = document.getElementById(tableID);
	 
	            var rowCount = table.rows.length;
	            var row = table.insertRow(rowCount);
	 

	  row.id="trLine"+counterRowForLine;
 var lineDiv='lineDiv'+counterRowForLine;
	 var domHiddenLine='domHiddenLine'+counterRowForLine;
	 
	 
	 
 var cell = row.insertCell(0);
		            var element = document.createElement("input");
		           

element.id = "lineDiv"+counterRowForLine;
element.name="textViewOnly";

element.type = "text";
	 element.value="_________________________________________________________________________________________";
	  
	  element.style.color="#000080";
	  element.style.fontFamily="Verdana";
	  element.style.fontSize="8pt";
element.size='50';
element.style.borderStyle="solid";
element.style.borderColor="#FFFFFF";

   
cell.appendChild(element);







	 var cell = row.insertCell(1);
		            
		            cell.align="center";
		            
		            var element = document.createElement("input");
		            
	element.style.color="#000080";
	  element.style.fontFamily="Verdana";
	  element.style.fontSize="8pt";
	 
element.id = "fontColorLine"+counterRowForLine;
element.name="fontColor";
element.type = "text";
	    element.size="7";
	 element.value="#000080";
element.onclick=function () {
showColorPicker(this);
};
  
 
 
element.onchange=function () {
document.getElementById(lineDiv).style.color=this.value;
};


element.onfocus=function () {
document.getElementById(lineDiv).style.color=this.value;

};



 element.onmouseover=function()
 {
  Tip('Click Me To Change Color Line');
 };
 element.onmouseout=function()
 {
  UnTip();
 }
   
  cell.appendChild(element);
	 


	 
	 
	 var cell = row.insertCell(2);
	var element = document.createElement("select");
	
	element.id = "HorizontalOrVerticalLine"+counterRow;
element.name="HorizontalOrVerticalLine";

element.style.color="#000080";
	  element.style.fontFamily="Verdana";
	  element.style.fontSize="8pt";
	  


var option=document.createElement("option");
option.appendChild(document.createTextNode("Horizontal"));
option.setAttribute("value","H");

element.appendChild(option);
var option=document.createElement("option");
option.appendChild(document.createTextNode("Vertical"));
option.setAttribute("value","V");
element.appendChild(option);
	cell.appendChild(element);
	
	
	 
	 
	 
   var cell = row.insertCell(3);
   
  var element = document.createElement("img");
element.id = "remove"+counterRow;
element.name="remove";
element.type = "src";
element.src = "images/removeimage.gif";

element.width='15';
element.height='15';	 

	 element.onclick=function () {
deleteRowImageForLine('dataTableImageLine',document.getElementById(domHiddenLine).value);
};
  
 cell.align='center';
   
   
 element.onmouseover=function()
 {
  Tip('Click Me To Remove Line');
 };
 element.onmouseout=function()
 {
  UnTip();
 }
   
   
	  cell.appendChild(element);
	 
	  
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	  var cell = row.insertCell(4);
      var element = document.createElement("input");
		            
	
element.id = "domHiddenLine"+counterRowForLine;
element.name="domHiddenLine";
element.type = "hidden";
	element.value=counterRowForLine;  
    element.size="5";
	
	cell.appendChild(element);
	 
	 
	 
	 
	 
 var cell = row.insertCell(5);
 var element = document.createElement("input");
		           


element.name="fontFace";
element.type = "hidden";
	 element.value="Verdana"
	  
	

cell.appendChild(element);

	 
	 
	 
	 
	 
	 
	 
	 
 var cell = row.insertCell(6);
		            var element = document.createElement("input");
		           


element.name="fontSize";
element.type = "hidden";
	 element.value="2"
	  
	

cell.appendChild(element);

	 
	 
	 
	 
	 
	 
 var cell = row.insertCell(7);
		            var element = document.createElement("input");
		           


element.name="fontWeight";
element.type = "hidden";
	 element.value="Normal"
	  
	

cell.appendChild(element);

	 
	 
	 
	 
	 
	 
	 
	 
 var cell = row.insertCell(8);
		            var element = document.createElement("input");
		           

element.id = "lineDiv"+counterRowForLine;
element.name="text";
element.type = "hidden";
	 element.value="______________________________________";
	  
	  element.style.color="#000080";
	  element.style.fontFamily="Verdana";
	  element.style.fontSize="10pt";

element.style.borderStyle="solid";
element.style.borderColor="#FFFFFF";


cell.appendChild(element);
	 
	 
	 
	 
	 
	 
 var cell = row.insertCell(9);
		            var element = document.createElement("input");
		           

element.id = "type"+counterRowForLine;
element.name="type";
element.type = "hidden";
	 element.value="L";
	  
	  element.style.color="#000080";
	  element.style.fontFamily="Verdana";
	  element.style.fontSize="10pt";

element.style.borderStyle="solid";
element.style.borderColor="#FFFFFF";


cell.appendChild(element);
	 
	 
	 
	 
	 
	 
	 

counterRowForLine++;





	 
	 
}







function deleteRowImageForLine(tableID,serial)
{

try {
UnTip();
	            var table = document.getElementById(tableID);
	             var rowCount = table.rows.length;
	  
	 
	  document.getElementById('trLine'+serial).innerHTML="";
	  
	  
	  
	            
	            }catch(e) {
	            }
	        }
	        
	        
	    





   function addRowImage(tableID) {
	    
	      $('#dataTableImage').fadeIn(3000); 
       document.getElementById('MaxMinDivId').innerHTML='<img src="images/minimize.jpg" width="15" height="15" onclick="hideLetterHead();" onmouseover="Tip(\'Hide\');" onmouseout="UnTip();" />';
 
	      var table = document.getElementById(tableID);
	 
	            var rowCount = table.rows.length;
	            var row = table.insertRow(rowCount);
	 

	  row.id="tr"+counterRow;


		            var cell = row.insertCell(0);
		            var element = document.createElement("input");
		           

element.id = "text"+counterRow;
element.name="text";
element.type = "text";
	  
	  
	  element.style.color="#000080";
	  element.style.fontFamily="Verdana";
	  element.style.fontSize="8pt";
	    
	  
	    element.size="20";
        
      var contentsDivId='contentsDivId'+counterRow;
	 
	 var domHidden='domHidden'+counterRow;
	 
	
	 
element.onfocus=function () {changeDivText(this,document.getElementById(contentsDivId));};
         
    element.onkeypress=function () {changeDivText(this,document.getElementById(contentsDivId));};
     element.onclick=function () {changeDivText(this,document.getElementById(contentsDivId));};
    element.onblur=function () {changeDivText(this,document.getElementById(contentsDivId));};
    
    element.onkeydown=function () {changeDivText(this,document.getElementById(contentsDivId));};
    element.onkeyup=function () {changeDivText(this,document.getElementById(contentsDivId));};
    
    
	cell.className = 'LetterHead8ptcenterBlueBLR';
        cell.appendChild(element);
	 
	   





 var cell = row.insertCell(1);
	            var element = document.createElement("select");
	            

element.id = "fontFace"+counterRow;
element.name="fontFace";
element.style.color="#000080";
	  element.style.fontFamily="Verdana";
	  element.style.fontSize="8pt";
	  

var option=document.createElement("option");
option.appendChild(document.createTextNode("Verdana"));
option.setAttribute("value","Verdana");

element.appendChild(option);



var option=document.createElement("option");
option.appendChild(document.createTextNode("Arial"));
option.setAttribute("value","Arial");

element.appendChild(option);




var option=document.createElement("option");
option.appendChild(document.createTextNode("Courier"));
option.setAttribute("value","Courier");

element.appendChild(option);




var option=document.createElement("option");
option.appendChild(document.createTextNode("Comic Sans MS"));
option.setAttribute("value","Comic Sans MS");

element.appendChild(option);



var option=document.createElement("option");
option.appendChild(document.createTextNode("Georgia"));
option.setAttribute("value","Georgia");

element.appendChild(option);





var option=document.createElement("option");
option.appendChild(document.createTextNode("Impact"));
option.setAttribute("value","Impact");

element.appendChild(option);




var option=document.createElement("option");
option.appendChild(document.createTextNode("Times"));
option.setAttribute("value","Times");




var option=document.createElement("option");
option.appendChild(document.createTextNode("Trebuchet MS"));
option.setAttribute("value","Trebuchet MS");

   




element.onfocus=function () {changeFontFace(this,document.getElementById(contentsDivId));};
         
    element.onkeypress=function () {changeFontFace(this,document.getElementById(contentsDivId));};
     element.onclick=function () {changeFontFace(this,document.getElementById(contentsDivId));};
    element.onblur=function () {changeFontFace(this,document.getElementById(contentsDivId));};
    






element.appendChild(option);




	
cell.className = 'LetterHead8ptcenterBlueBLR';
 cell.appendChild(element);
	 



	 
	 
	 
	 
	 
	 
	 
	 
 var cell = row.insertCell(2);
	            var element = document.createElement("select");
	           

element.id = "fontSize"+counterRow;
element.name="fontSize";

element.style.color="#000080";
	  element.style.fontFamily="Verdana";
	  element.style.fontSize="8pt";
	  


var option=document.createElement("option");
option.appendChild(document.createTextNode("Normal"));
option.setAttribute("value","2");

element.appendChild(option);



var option=document.createElement("option");
option.appendChild(document.createTextNode("1 (8 pt)"));
option.setAttribute("value","1");

element.appendChild(option);




var option=document.createElement("option");
option.appendChild(document.createTextNode("2(10 pt)"));
option.setAttribute("value","2");

element.appendChild(option);




var option=document.createElement("option");
option.appendChild(document.createTextNode("3(12 pt)"));
option.setAttribute("value","3");

element.appendChild(option);



var option=document.createElement("option");
option.appendChild(document.createTextNode("4(14 pt)"));
option.setAttribute("value","4");

element.appendChild(option);
element.onfocus=function () {changeFont(this,document.getElementById(contentsDivId));};
         
    element.onkeypress=function () {changeFont(this,document.getElementById(contentsDivId));};
     element.onclick=function () {changeFont(this,document.getElementById(contentsDivId));};
    element.onblur=function () {changeFont(this,document.getElementById(contentsDivId));};
    



	

cell.className = 'LetterHead8ptcenterBlueBLR';
 cell.appendChild(element);
	 



	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
 var cell = row.insertCell(3);
	            var element = document.createElement("select");
	            


element.id = "fontWeight"+counterRow;
element.name="fontWeight";


element.style.color="#000080";
	  element.style.fontFamily="Verdana";
	  element.style.fontSize="8pt";
	  


var option=document.createElement("option");
option.appendChild(document.createTextNode("Normal"));
option.setAttribute("value","Normal");

element.appendChild(option);



var option=document.createElement("option");
option.appendChild(document.createTextNode("Normal Underline"));
option.setAttribute("value","Normal Underline");

element.appendChild(option);




var option=document.createElement("option");
option.appendChild(document.createTextNode("Bold"));
option.setAttribute("value","Bold");

element.appendChild(option);




var option=document.createElement("option");
option.appendChild(document.createTextNode("Bold Underline"));
option.setAttribute("value","Bold Underline");

element.appendChild(option);



var option=document.createElement("option");
option.appendChild(document.createTextNode("Italic"));
option.setAttribute("value","Italic");

element.appendChild(option);





var option=document.createElement("option");
option.appendChild(document.createTextNode("Italic Underline"));
option.setAttribute("value","Italic Underline");

element.appendChild(option);




var option=document.createElement("option");
option.appendChild(document.createTextNode("Bold Italic"));
option.setAttribute("value","Bold Italic");




var option=document.createElement("option");
option.appendChild(document.createTextNode("Bold Italic Underline"));
option.setAttribute("value","Bold Italic Underline");



element.onfocus=function () {changeFontWeight(this,document.getElementById(contentsDivId));};
         
    element.onkeypress=function () {changeFontWeight(this,document.getElementById(contentsDivId));};
     element.onclick=function () {changeFontWeight(this,document.getElementById(contentsDivId));};
    element.onblur=function () {changeFontWeight(this,document.getElementById(contentsDivId));};
    




element.appendChild(option);



	
cell.className = 'LetterHead8ptcenterBlueBLR';
 cell.appendChild(element);
	
	
	
	

	

	 var cell = row.insertCell(4);
		            var element = document.createElement("input");
		            
	element.style.color="#000080";
	  element.style.fontFamily="Verdana";
	  element.style.fontSize="8pt";
	  	cell.align='center';
element.id = "fontColor"+counterRow;
element.name="fontColor";
element.type = "text";
	  element.readonly="readonly";
	    element.size="10";
	 element.value="#000080";
element.onclick=function () {
showColorPicker(this);
};
  
 
 
element.onfocus=function () {

document.getElementById(contentsDivId).style.color=this.value;
}; 
 
  
  
  
element.onchange=function () {


document.getElementById(contentsDivId).style.color=this.value;
}; 
 
 
  
  
	
	         cell.className = 'LetterHead8ptcenterBlueBLR';
        cell.appendChild(element);
	 
	 
	 
	
	  
	  
	  
	  
	 
	 
	 
	 
	 var cell = row.insertCell(5);
	 element = document.createElement('div'); 
     element.setAttribute('id',"contentsDivId"+counterRow); 
	 element.style.width='150px';
	 element.style.height='40px';
	 element.style.overflow='auto';
	
	element.style.fontSize='10pt';
	element.style.color='#000080';
	cell.className = 'LetterHead8ptleftBlueBLR';
	 cell.appendChild(element);
	 



	 
   var cell = row.insertCell(6);
  var element = document.createElement("img");
element.id = "remove"+counterRow;
element.name="remove";
element.type = "src";
element.src = "images/removeimage.gif";

element.width='15';
element.height='15';	 
	cell.align='center';
	  
	 element.onclick=function () {
deleteRowImage('dataTableImage',document.getElementById(domHidden).value);
};



 element.onmouseover=function()
 {
  Tip('Click Me To Delete Row');
 };
 element.onmouseout=function()
 {
  UnTip();
 }
  cell.className = 'LetterHead8ptcenterBlueBLR';
        cell.appendChild(element);
	  
	   
	  
	  
	  
	  
	  
	 
	   var cell = row.insertCell(7);
	   var element = document.createElement("input");
	element.id = "domHidden"+counterRow;
element.name="domHidden";
element.type = "hidden";
	element.value=counterRow;  
	element.size="5";
	cell.appendChild(element);
	 
	 
	 
	 
	 
	   var cell = row.insertCell(8);
	   var element = document.createElement("input");
	element.id = "HorizontalOrVerticalLine"+counterRow;
element.name="HorizontalOrVerticalLine";
element.type = "hidden";
	element.value=counterRow;  
	element.size="5";
	cell.appendChild(element);
	 
	 
	 
	 
 var cell = row.insertCell(9);
		            var element = document.createElement("input");
		           

element.id = "type"+counterRow;
element.name="type";
element.type = "hidden";
	 element.value="T";
	  
	  element.style.color="#000080";
	  element.style.fontFamily="Verdana";
	  element.style.fontSize="10pt";

element.style.borderStyle="solid";
element.style.borderColor="#FFFFFF";


cell.appendChild(element);
	 
	 
	 
	 
	           
	           
	 
	 
	 
	 
	 
	   counterRow++;        
	 
	        }
	 
	        function deleteRowImage(tableID,serial) {
	            
	            
	            
	            UnTip();
	            
	            try {
	            var table = document.getElementById(tableID);
	             var rowCount = table.rows.length;
	  
	  
	  if(document.getElementById('text'+serial).value!='')
	  {
	  temp=confirm('Are you sure, you want to delete?');
	  if(temp==true)
	  {
	  document.getElementById('tr'+serial).innerHTML="";
	  }
	 else
	 {
	 
	 }
	  }
	  else
	  {
	  document.getElementById('tr'+serial).innerHTML="";
	  }
	  
	            
	            }catch(e) {
	            }
	        }
	        
	        
	        
	        
	        function showLetterHead()
	        {
	     
	        UnTip();
$('#dataTableImage').fadeIn(3000); 
$('#dataTableImageLine').fadeIn(3000); 

 document.getElementById('MaxMinDivId').innerHTML='<img src="images/minimize.jpg" width="15" height="15" onclick="hideLetterHead();" onmouseover="Tip(\'Hide\');" onmouseout="UnTip();" />';
  
	      
	      	        }
	      	        
	      	        
	        function hideLetterHead()
	        {
	        UnTip();
	
	
	$('#dataTableImage').fadeOut(3000);
	$('#dataTableImageLine').fadeOut(3000); 
	
	    
 document.getElementById('MaxMinDivId').innerHTML='<img src="images/maximize.jpg" width="15" height="15" onclick="showLetterHead();" onmouseover="Tip(\'Show\')" onmouseout="UnTip()" />';
 
	      	        }
	    
	    
	    
	    
	    
	   function hideLetterHeadGuideLines()
	        {
	       
	
	$('#guidelinesTableId').toggle(4000);     
 
	      	        }
	      
	    
	    
	    
	    
	    
	    
	    
	    
  function hideImageLetterHead(obj)
   {
  
  try {
   name="divNames"+document.getElementById('forDivPurpose'+obj.value).value;
 showOrHide="showOrHide"+document.getElementById('forDivPurpose'+obj.value).value;
    
 
   dd.elements[name].hide();
  
 addToShowImageCombo(obj);
  document.getElementById(showOrHide).value='H';
  obj.remove(obj.selectedIndex);
  
  
   return false;
   }
   
   catch(e) {
	            }
   
   
   
   }
   
   
   
   
  function addToShowImageCombo(obj)
  {
 
  var idCombo = obj;
    var idComboText = idCombo.options[idCombo.selectedIndex].text;
 
var option=document.createElement("option");
option.appendChild(document.createTextNode(idComboText));
option.setAttribute("value",obj.value);
document.getElementById('showCombo').appendChild(option);
  
  } 
   
   
   
  function addToHideImageCombo(obj)
  {
 
  var idCombo = obj;
    var idComboText = idCombo.options[idCombo.selectedIndex].text;
 
var option=document.createElement("option");
option.appendChild(document.createTextNode(idComboText));
option.setAttribute("value",obj.value);
document.getElementById('hideCombo').appendChild(option);
  
  } 
   
   
  
  
  function showImageLetterHead(obj)
   {
  try {
  
  
 
   name="divNames"+document.getElementById('forDivPurpose'+obj.value).value;
 showOrHide="showOrHide"+document.getElementById('forDivPurpose'+obj.value).value;
 
   
   dd.elements[name].show();
    document.getElementById(showOrHide).value='S';
 addToHideImageCombo(obj);
  obj.remove(obj.selectedIndex);
  
   return false;
   }
   
   catch(e) {
	                alert(e);
	            }
   }
   
   
	    
	    
function forSave()
{


document.getElementById('finalSubmitLetterHead').submit();

}


function ClickHereToPrint()
{ 


branchId=document.getElementById('branchId').value;
sampleId=document.getElementById('sampleId').value;
 functionalityId=document.getElementById('functionalityId').value;
 
  var disp_setting="toolbar=yes,location=no,directories=yes,menubar=yes,"; 
      disp_setting+="scrollbars=yes,width=750, height=1050, left=100, top=25"; 
  basePath=document.getElementById('basePath').value;
  var docprint=window.open(document.getElementById('basePath').value+"displayLetterHeadAction.do?hiddenOperation=print&branchId="+branchId+"&sampleId="+sampleId+"&functionalityId="+functionalityId,"",disp_setting); 
 

}
	    
	    
	    
	   function changeOpacityHidden(obj)
   {
   
   
 document.getElementById('hiddenOpacity').value=obj.value;
   
   document.getElementById('opacityCombo').selectedIndex=0;
  
   return false;
   }
   
   
   
  
   
   
   
   
   function finalSave()
   {
   
document.getElementById('form1').submit();

   
   }
     
	    
	    
	    function changeOpacity(obj)
   {
   
 
 if(obj.selectedIndex!=0)
 {
 
   
   hiddenOpacityValue=document.getElementById('hiddenOpacity').value
   
   name="divNames"+(document.getElementById('forDivPurpose'+hiddenOpacityValue).value);
  
  opacity="opacity"+hiddenOpacityValue;
   
  dd.elements[name].setOpacity(parseFloat(document.getElementById(obj.id).value.replace(/\,/g, '.')));
  document.getElementById(opacity).value=parseFloat(document.getElementById(obj.id).value.replace(/\,/g, '.'));
  
   return false;
   
   
 }
 
   }
    
    
    function backToWidthHeightLetterHead(obj)
    {
    
    if(document.getElementById(obj.id+"textName").value.indexOf("Vertical")!=-1)
    {
     document.getElementById(obj.id).style.width=1;
   
    }
    if(document.getElementById(obj.id+"textName").value.indexOf("Horizontal")!=-1)
    {
     document.getElementById(obj.id).style.height=1;
   
    }
    }
    
	    function changeWidthHeightPositionLetterHead(obj1,obj2,obj3,obj4,type)
	    {
	   
	    if(type=='I'  )
	    {
	  
	  Tip("Name: "+obj1+"<br>Width: "+obj2.width+"<br>Height: "+obj2.height+"<br>Left Position: "+obj3.value+'px'+"<br>Top Position: "+obj4.value+'px');
	    
	    }
	   
	   else if(type=='L' )
	    {
	    
	    Tip("Name: "+obj1+"<br>Left Position: "+obj3.value+'px'+"<br>Top Position: "+obj4.value+'px');
	    
	    }
	   
	    else
	    {
	     Tip("Left Position: "+obj3.value+'px'+"<br>Top Position: "+obj4.value+'px');
	    
	    }
	    
	    
	    }
	    
	    
	    function onLoadLetterHead()
	    {
        var xx1='<img src="images/minimize.jpg" width="15" height="15"  />';
	    var xx2='<img src="images/removeimage.gif" width="15" height="15"  />';
        
       if(document.getElementById('sampleLetterHeadFormId'))
         {
       document.getElementById('sampleId').selectedIndex=0;
       document.getElementById('sampleName').value='';
       document.getElementById('functionalityId').selectedIndex=0;
	   document.getElementById('functionalityName').value='';
	    }


	  
           if(document.getElementById('finalSubmitLetterHead'))
            {
         if(document.getElementById('opacityComboImage'))
        {
        document.getElementById('opacityComboImage').selectedIndex=0;
        }
        if(document.getElementById('opacityCombo'))
        {
        document.getElementById('opacityCombo').selectedIndex=0;
        }
}
	   
       
        
        
        }
	    
	    
	    
	    window.setTimeout(onLoadLetterHead,1000);