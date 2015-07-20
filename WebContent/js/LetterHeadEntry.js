function letterHeadFormat()
{

//Anil added on 21/01/2010:add below code for validate the letterhead name 
if (document.letterHeadEntryForm.letterHeadName.value=="")
	{
		alert("Please Enter the LetterHead Name");
		return false;
	}
	if (document.letterHeadEntryForm.principalEmployerid.selectedIndex == 0)
	{
		alert("Please Select Principal Employer ");
		letterHeadEntryForm.principalEmployerid.focus();
		return false;
	}
//Anil added Begin for checking the images if images is duplicated then gives error.
//Anil added Begin for checking the images if images is duplicated then gives error.
//Anil added 12/12/09:End 

	if ((document.letterHeadEntryForm.imagePath_1.value!="")&& (document.letterHeadEntryForm.imagePath_2.value!=""))
	{
		if (document.letterHeadEntryForm.imagePath_1.value==document.letterHeadEntryForm.imagePath_2.value)
		{
			alert("Image I and Image 2 is duplicate");
			return false;
		}
	}
	if ((document.letterHeadEntryForm.imagePath_2.value!="")&& (document.letterHeadEntryForm.imagePath_3.value!=""))
	{
		if (document.letterHeadEntryForm.imagePath_2.value==document.letterHeadEntryForm.imagePath_3.value)
		{
		alert("Image 2 and Image 3 is duplicate");
			return false;
		}
	}
	if ((document.letterHeadEntryForm.imagePath_4.value!="")&& (document.letterHeadEntryForm.imagePath_2.value!=""))
	{
		if (document.letterHeadEntryForm.imagePath_4.value==document.letterHeadEntryForm.imagePath_2.value)
		{
		alert("Image 3 and Image 4 is duplicate");
			return false;
		}
	}
	if ((document.letterHeadEntryForm.imagePath_4.value!="")&& (document.letterHeadEntryForm.imagePath_1.value!=""))
	{
		if (document.letterHeadEntryForm.imagePath_4.value==document.letterHeadEntryForm.imagePath_1.value)
		{
		alert("Image 4 and Image 1 is duplicate");
			return false;
		}
	}
	if ((document.letterHeadEntryForm.imagePath_1.value!="")&& (document.letterHeadEntryForm.imagePath_3.value!=""))
	{
		if (document.letterHeadEntryForm.imagePath_1.value==document.letterHeadEntryForm.imagePath_3.value)
		{
		alert("Image 1 and Image 3 is duplicate");
			return false;
		}
	}

//Anil added 12/12/09:End 
	
document.getElementById('javascript').value="true";
document.getElementById('operation').value="Please Wait";
return true;
}
var rgbColorArray=new Array();
function  changeColor(obj1,obj2,index)
{
	if (document.getElementById(index).checked==true)
	{
	var rgbvalue="rgb"+obj1.id.substring(obj1.id.indexOf('_')+1);
	obj1.style.color=obj2.value;
	rgbColorArray[index]=obj2.value;
	
	}
	else
	{		
		obj1.style.color="#000080";
		rgbColorArray[index]=obj2.value;
	}
	document.getElementById('rgbhidden').value=rgbColorArray;
	
}

//Anil added on 2/02/2010 .
var setValueInFontSize=new Array();
function changeFont(obj1,obj2,index)
{
	
	
	if (document.getElementById(index).checked==true)
{
	var changeFontValue=1;
	if(obj1.value==1)
	{
	changeFontValue=8
	setValueInFontSize[index]=obj1.value;
	}
	if(obj1.value==2)
	{
	changeFontValue=10
	setValueInFontSize[index]=obj1.value;
	}
	
	if(obj1.value==3)
	{
	changeFontValue=12
	setValueInFontSize[index]=obj1.value;
	}
	if(obj1.value==4)
	{
	changeFontValue=14
	setValueInFontSize[index]=obj1.value;
	}
	if(obj1.value==5)
	{
	changeFontValue=18
	setValueInFontSize[index]=obj1.value;
	}
	if(obj1.value==6)
	{
	changeFontValue=24
	setValueInFontSize[index]=obj1.value;
	}
	if(obj1.value==7)
	{
	changeFontValue=36
	setValueInFontSize[index]=obj1.value;
	}
	obj2.style.fontSize=changeFontValue+'px';
}else{

	obj2.style.fontSize='10px';
	document.getElementById('fontSizeBox').selectedIndex = 0;
}
	//Anil added on 2/02/2010:setting the all values to fontSize property .
	document.getElementById('fontsizehidden').value=setValueInFontSize;
}
//Anil added 2/02/2010:add new condition in below function 
var setValueInFontArray =new Array();

function changeFontFace(obj1,obj2,index)
{
if (document.getElementById(index).checked==true)
{
	setValueInFontArray[index] = obj1.value;
	obj2.style.fontFamily=obj1.value;
	
}
else{
	setValueInFontArray[index] = '';
	obj2.style.fontFamily='Verdana';
	setValueInFontArray[index] = obj1.value;
	document.getElementById('font').selectedIndex = 0;
	
	}
//setting the all values to fontFace property .
document.getElementById('fontFace').value=setValueInFontArray;
}
var setValueInFontWeightArray=new Array();
function changeFontWeight(obj1,obj2,index)
{
if (document.getElementById(index).checked==true)
{
	if(obj1.value=="Bold")
	{
		obj2.style.fontWeight  ="Bold";
		obj2.style.textDecoration="";
		//Anil added on 2/01/2010:add below code 
		setValueInFontWeightArray[index]=obj1.value;
	}
	if(obj1.value=="Bold Underline")
	{
		obj2.style.textDecoration="underline";
		//Anil added on 2/02/2010:add below code 
		setValueInFontWeightArray[index]=obj1.value;
	}
	if(obj1.value=="Italic")
	{
	obj2.style.fontWeight  ="Normal";
	obj2.style.fontStyle  ="Italic";
	obj2.style.textDecoration="";
	//Anil added on 2/02/2010:add below code 
		setValueInFontWeightArray[index]=obj1.value;
	}
	if(obj1.value=="Italic Underline")
	{
	obj2.style.fontWeight  ="Normal";
	obj2.style.fontStyle  ="Italic";
	obj2.style.textDecoration="underline";
	//Anil added on 2/01/2010:add below code 
		setValueInFontWeightArray[index]=obj1.value;
	}
	if(obj1.value=="Normal")
	{
	
	obj2.style.fontWeight  ="Normal";
	obj2.style.textDecoration="";
	//Anil added on 2/02/2010:add below code 
		setValueInFontWeightArray[index]=obj1.value;
	}
	if(obj1.value=="Normal Underline")
	{
	
	obj2.style.fontWeight  ="Normal";
	obj2.style.textDecoration="underline";
	//Anil added on 2/02/2010:add below code 
		setValueInFontWeightArray[index]=obj1.value;
	}
	if(obj1.value=="Bold Underline")
	{
	
	obj2.style.fontWeight  ="Bold";
	obj2.style.textDecoration="underline";
	//Anil added on 2/02/2010:add below code 
		setValueInFontWeightArray[index]=obj1.value;
	}
	if(obj1.value=="Bold Italic")
	{
	obj2.style.fontWeight  ="Bold";
	obj2.style.fontStyle  ="Italic";
	obj2.style.textDecoration="";
	//Anil added on 2/02/2010:add below code 
		setValueInFontWeightArray[index]=obj1.value;
	}
	if(obj1.value=="Bold Italic Underline")
	{
	obj2.style.fontWeight  ="Bold";
	obj2.style.fontStyle  ="Italic";
	obj2.style.textDecoration="underline";
	//Anil added on 2/02/2010:add below code 
		setValueInFontWeightArray[index]=obj1.value;
	}
}else{
	
	obj2.style.fontStyle  = "Normal";
	obj2.style.textDecoration="";
	obj2.style.fontWeight="";
	setValueInFontWeightArray[index] = obj1.value;
	document.getElementById('fontWeight').selectedIndex = 0;
	
}
document.getElementById('fontweighthidden').value=setValueInFontWeightArray;

}
function CommonSingleColumnAddLetterHead(divid,name,size,rgb,fontSize) 

{
	var xx1=parseInt(document.getElementById('hiddenCounterForText').value);
	//alert("xx1="+xx1);
	var ni = divid ;
	var cccc=xx1+4;
	var newdiv = document.createElement('div');
	 var divIdName = 'my'+xx1+'Div';
	newdiv.setAttribute('id',divIdName);
	
	var idContent=name+"_"+cccc;
	var rgbValue=rgb+cccc;
	var fontSizeValue=fontSize+cccc;
	nnn=rgbValue;
	 var trAndTd='<tr>'
	    +'<td width="50%">&nbsp;</td>'
	    +'<td width="50%">&nbsp;</td>'
	  +'</tr>'
	  
	newdiv.innerHTML =newdiv.innerHTML+trAndTd;
	ni.appendChild(newdiv);
	/*
	var oTR1 = document.createElement("tr");
	var oTD11 = document.createElement("td");
	
	oTR1.appendChild(oTD11);
	ni.appendChild(oTR1);
	*/
	/*
	var forColorFont=document.createElement("input");
	forColorFont.setAttribute("type","text");
	forColorFont.setAttribute("name","rgb");
	
	forColorFont.setAttribute("value","000080");
	forColorFont.setAttribute("id",rgbValue);
	forColorFont.setAttribute("size",10);
	newdiv.appendChild(forColorFont);
	ni.appendChild(newdiv);
	*/


}





/*function mypopup(basePath)
 {
 document.getElementById('javascript').value="true";

 alert("asas=="+basePath);
   mywindow=window.open (basePath+"submitLetterHeadForm.do?javascript=true","mywindow",'toolbar=no,location=no,directories=no,status=no,menubar=yes,scrollbars=no,resizable=no,width=500,height=350');
 
 } */
        
function move()
{
//window.moveTo(0,0)
//window.resizeTo(50,50)
//window.resizeTo(850,1000)

}
/*
var gFiles = 0;
var i = 1;
function addFile() {
	var tr = document.createElement('tr');
    tr.setAttribute('id', 'file-' + gFiles);
    var td = document.createElement('td');
    td.innerHTML = '<input type=file name="referenceFormFile['+i+']"><span onclick="removeFile(\'file-' + gFiles + '\')" style="cursor:pointer;">Remove</span>';
    tr.appendChild(td);
    document.getElementById('AutoNumber1').appendChild(tr);
    gFiles++;
    i++;
 

}
document.getElementById('countFile').value=i;
function removeFile(aId) {
    var obj = document.getElementById(aId);
    obj.parentNode.removeChild(obj);
}
function setColorFontSize(){

}*/
function  checkImage1()
{
 //Anil added 12/12/09:Begin 
	
	if (document.letterHeadEntryForm.imagePath_1.value!="")
	{	var extensions = new Array("jpg","jpeg","gif");
		var image_file = document.letterHeadEntryForm.imagePath_1.value;
		var image_length = document.letterHeadEntryForm.imagePath_1.value.length;
		var pos = image_file.lastIndexOf('.') + 1;
		var ext = image_file.substring(pos, image_length);
		var final_ext = ext.toLowerCase();
		for (i = 0; i < extensions.length; i++)
		{
		    if(extensions[i] == final_ext)
		    {
		    return true;
		    }
		}
		alert("You must upload an image file with one of the following extensions:\n "+ extensions.join(', ') +".");
		return false;
	}

}
function  checkImage2()
{
	if (document.letterHeadEntryForm.imagePath_2.value!="")
	{
		var extensions = new Array("jpg","jpeg","gif");
		var image_file = document.letterHeadEntryForm.imagePath_2.value;
		var image_length = document.letterHeadEntryForm.imagePath_2.value.length;
		var pos = image_file.lastIndexOf('.') + 1;
		var ext = image_file.substring(pos, image_length);
		var final_ext = ext.toLowerCase();
		for (i = 0; i < extensions.length; i++)
		{
		    if(extensions[i] == final_ext)
		    {
		    return true;
		    }
		}
		alert("You must upload an image file with one of the following extensions:\n "+ extensions.join(', ') +".");
		return false;
	}
}
function checkImage3()
{

	if (document.letterHeadEntryForm.imagePath_3.value!="")
	{
		var extensions = new Array("jpg","jpeg","gif");
		var image_file = document.letterHeadEntryForm.imagePath_3.value;
		var image_length = document.letterHeadEntryForm.imagePath_3.value.length;
		var pos = image_file.lastIndexOf('.') + 1;
		var ext = image_file.substring(pos, image_length);
		var final_ext = ext.toLowerCase();
		for (i = 0; i < extensions.length; i++)
		{
		    if(extensions[i] == final_ext)
		    {
		    return true;
		    }
		}
		alert("You must upload an image file with one of the following extensions:\n"+ extensions.join(', ') +".");
		return false;
	}

}

function checkImage4()
{
	if (document.letterHeadEntryForm.imagePath_4.value!="")
	{	
		var extensions = new Array("jpg","jpeg","gif");
		var image_file = document.letterHeadEntryForm.imagePath_4.value;
		var image_length = document.letterHeadEntryForm.imagePath_4.value.length;
		var pos = image_file.lastIndexOf('.') + 1;
		var ext = image_file.substring(pos, image_length);
		var final_ext = ext.toLowerCase();
		for (i = 0; i < extensions.length; i++)
		{
		    if(extensions[i] == final_ext)
		    {
		    return true;
		    }
		}
		alert("You must upload an image file with one of the following extensions:\n "+ extensions.join(', ') +".");
		return false;
	}
}